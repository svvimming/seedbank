const path = require('path');
const md5 = require('md5');
const fs = require('fs');
const https = require('https');
const multer = require('multer');
const knex = require('../db/knex.js');
const default_loc = './assets';

function get_type(url) {
	return url.split('/')[1];
};

function get_path(asset, type='images') {
	return path.resolve(process.env.HOST, 'assets', type, asset['path'], asset['name']);
};

function hash_path(filename, type='images') {
	var hash = md5(filename);
	var chunked = hash.match(/.{1,2}/g).slice(0,4).join('/');
    return path.join('./assets', type, chunked);
};

function set_dest(filename, type='images') {
	return new Promise((resolve, reject) => {
		var dir = (process.env.NODE_ENV == 'production') ? hash_path(filename, type) : default_loc;
		fs.access(dir, notfound => {
			if (notfound) { fs.mkdir(dir, {recursive: true}, err => { reject(err) })}
			resolve(dir);
		})
	})
};

function set_filename(originalname, type='images') {
	return new Promise((resolve, reject) => {
		var dir = (process.env.NODE_ENV == 'production') ? hash_path(originalname, type) : default_loc;
		var file_loc = path.join(dir, originalname);
	  	fs.access(file_loc, notfound => {
	  		if (notfound) { resolve(originalname) }
	  		else {
				fs.readdir(dir, { withFileTypes: true }, (err, files) => {
					if (err) { reject(err) };
					var arr = originalname.split('.');
					var finalname = arr.slice(0,-1).join('.') + '_' + (files.filter(f => f.isFile()).length) + '.' + arr.slice(-1).toString();
					resolve(finalname);
				})
			}
	  	})
	})
};

function upload_form() {
	var storage = multer.diskStorage({
		destination: async function(req, file, cb) {
			try { var result = await set_dest(file.originalname, get_type(req.url));
				  cb(null, result);
			} catch (err) { cb(err, null); }
		},
		filename: async function (req, file, cb) {
			try { var result = await set_filename(file.originalname, get_type(req.url));
				  cb(null, result);
			} catch (err) { cb(err, null); }
		}
	});
	return multer({ storage: storage });
};

function upload_from_url(url, auth_token) {
	return new Promise( async(resolve, reject) => {
		var originalname = url.split('/').pop();
		var dest = await set_dest(originalname);
		var filename = await set_filename(originalname);
		var full_dest = path.join(dest, filename);
		var file_loc = fs.createWriteStream(full_dest);
		var options = { headers: { 'Authorization': 'Bearer ' + auth_token } };
		var data = { filename: filename, destination: dest };

		https.get(url, options, (response) => {
			var stream = response.pipe(file_loc);
			stream.on('finish', () => {
				var file_data = { destination: dest, filename: filename };
				return resolve(file_data);
			});
		}).on('error', (err) => {
			fs.unlink(full_dest);
			return reject(err.message);
		});
	})
};

function db_insert(file, meta, return_id=false) {
	return new Promise((resolve, reject) => {
		var table = file.destination.split('assets/').pop().split('/')[0];
		var row = { name: file.filename,
					path: file.destination.split(/assets\/.+?\//).pop() };

		if (typeof meta.type !== 'undefined') { row.type = meta.type };
		if (typeof meta.tendencies !== 'undefined') { row.tendencies = meta.tendencies };
		if (typeof meta.notes !== 'undefined') { row.notes = meta.notes };

		knex(table)
			.insert(row)
			.then(id => { resolve(return_id ? id[0].toString() : 'uploaded asset!') })
			.catch(err => { reject(err) });
	})
};

module.exports = {
	get_type,
    get_path,
    hash_path,
    upload_form,
    upload_from_url,
    db_insert
}
