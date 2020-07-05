import "p5/lib/addons/p5.sound";
import ehorn from "../assets/ehorn.mp3";
import mwow from "../assets/mmmwow.mp3";
import io from "socket.io-client"
const mp3s = [ehorn, mwow];

export default function sketch(p){
    let canvas;
    let socket;
    let song;
    let bufnum;
    let buffers = [];

    p.setup = (props) => {
      canvas = p.createCanvas(500, 500);
      p.noStroke();
      p.background('orangered');
      socket = io();
      socket.on("mouse", data => {
      p.newDrawing(data);
      });

      for(let i=0; i<mp3s.length; i++){
        buffers[i] = p.loadSound(mp3s[i]);
      }
      bufnum = 0;
    }

      p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        bufnum = props.sound;
    };

    p.newDrawing = (data) =>{
      console.log(data);
      p.noStroke();
      p.fill('green');
      p.ellipse(data.x, data.y, 36, 36);
      buffers[data.sound].play();
    }

    p.mouseDragged = () => {
      console.log([p.mouseX, p.mouseY]);

      var data={
      x: p.mouseX,
      y: p.mouseY,
      sound: bufnum
    }

    socket.emit('mouse', data);


    p.fill('blue');
    p.ellipse(p.mouseX, p.mouseY, 36, 26);

    }

//
//     p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
//       if(canvas) //Make sure the canvas has been created
//         p.fill(newProps.color);
//     }
}
