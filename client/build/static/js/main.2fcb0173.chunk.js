(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/pot.cb30fab2.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/404_glitch2.119ecb7e.gif"},37:function(e,t,a){e.exports=a(67)},61:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a(2),u=a(4),i=a(3),s=a(5),o=a(6),h=a(15),m=a(9),p=a.n(m);function b(e,t){return function(a){function n(){var e;return Object(r.a)(this,n),(e=Object(u.a)(this,Object(i.a)(n).call(this))).state={loading:!0,redirect:!1,intendedPath:"",message:""},e}return Object(s.a)(n,a),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,a={authorization:"Bearer "+localStorage.getItem("token")};if(t){this.setState({intendedPath:t});var n=t.slice(1);n=n.replace(/-/g," "),this.setState({message:"Please log in to access ".concat(n)})}else this.setState({message:"Please log in"});p.a.get("/api/auth/verify",{headers:a}).then((function(t){200===t.status?e.setState({loading:!1}):e.setState({loading:!1,redirect:!0})})).catch((function(t){e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var a=this.state,n=a.loading,r=a.redirect;return n?null:r?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{to:{pathname:"/auth",state:{route:t,message:this.state.message}}})):l.a.createElement(l.a.Fragment,null,l.a.createElement(e,this.props))}}]),n}(n.Component)}var g=a(14),d=a(7),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={eventname:"",sponges:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),p.a.post("/api/events",{name:this.state.eventname,sponges:this.state.sponges}).then((function(e){console.log("Created event: "+e)})).catch((function(e){console.log(e)})),this.props.checkForUpdates()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("label",null,"Create an event ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"eventname",placeholder:"name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"sponges",placeholder:"sponges",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Create"}))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null," Events: "),l.a.createElement("ul",null,this.props.events.map((function(e){var t=e.id,a=e.name,n=e.data;return l.a.createElement("li",{key:t.toString()},a," ",n)}))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).checkForUpdates=function(){p.a.get("/api/events").then((function(t){e.setState({events:t.data})})).catch((function(e){return console.log(e)}))},e.state={events:[]},e}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.checkForUpdates()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{checkForUpdates:this.checkForUpdates}),l.a.createElement(v,{events:this.state.events}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/"},"Back to entryway"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.login=a.login.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){var t=this;e.preventDefault(),p.a.post("/api/auth/login",{email:this.state.email,password:this.state.password}).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.props.updateAuth(!0))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.props.auth?l.a.createElement(h.a,{to:"".concat(this.props.pathway)}):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login},l.a.createElement("label",null,"Login",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={username:"",email:"",password:"",authorize:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.signup=a.signup.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){var t=this;e.preventDefault(),p.a.post("/api/auth/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.setState({authorize:!0}),t.props.updateAuth(!0))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.authorize?(console.log("authorized"),l.a.createElement(h.a,{to:"".concat(this.props.pathway)})):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("label",null,"Need to signup?",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).logout=a.logout.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(e){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.logout},l.a.createElement("input",{type:"submit",value:"Logout"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).updateAuth=function(e){console.log("triggered",e),a.setState({auth:e})},a.state={pathway:"/",message:"",auth:!1},a.updateAuth=a.updateAuth.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state?(this.setState({pathway:this.props.location.state.route}),this.setState({message:this.props.location.state.message})):console.log("nothing");var t={authorization:"Bearer "+localStorage.getItem("token")};p.a.get("/api/auth/verify",{headers:t}).then((function(t){200===t.status?e.setState({auth:!0}):e.setState({auth:!1})})).catch((function(t){e.setState({auth:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.auth,a=e.pathway;return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"You are Already Logged In"),l.a.createElement(y,null)):l.a.createElement("div",null,l.a.createElement("h3",null,this.state.message),l.a.createElement(O,{pathway:a,updateAuth:this.updateAuth,auth:this.auth}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,{pathway:a,updateAuth:this.updateAuth,auth:this.auth}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/"},"Back to entryway"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null," ABOUT 3 Ecologgiiiesssss ")}}]),t}(n.Component),S=a(34),w=a.n(S),x=(a(61),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Cup",src:w.a,alt:"teapot"})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/events"},"Go to events")),l.a.createElement("li",null," ",l.a.createElement(o.b,{to:"/auth"},"Login or signup")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/entryway"},"EntryWay")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about3e"},"3E About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/oOoOs"},"404 oOoO Portal")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/patches"},"Patches")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/traces"},"Register a trace")))))}}]),t}(n.Component)),A=(a(62),a(35)),F=a.n(A),D=function(){return l.a.createElement("div",{className:"glitch"},l.a.createElement("h3",null,"glitch"),l.a.createElement("img",{src:F.a,alt:"glitch"}))},U=a(21),B=a.n(U),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={image:"",tendencies:"",notes:""},a.onChange=a.onChange.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){switch(e.target.name){case"image":this.setState({image:e.target.files[0]});break;default:this.setState(Object(g.a)({},e.target.name,e.target.value))}}},{key:"submit",value:function(e){var t;return B.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t=new FormData,a.next=4,B.a.awrap(t.append("image",this.state.image));case 4:p.a.post("/api/assets/images",t,{"content-type":"multipart/form-data"}).catch((function(e){console.log(e)}));case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return l.a.createElement("form",{encType:"multipart/form-data"},l.a.createElement("label",null,"Upload an image",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"tendencies",placeholder:"tendencies (comma-separated)",value:this.state.value,onChange:this.onChange}),l.a.createElement("input",{type:"text",name:"notes",placeholder:"notes",value:this.state.value,onChange:this.onChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"file",name:"image",onChange:this.onChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Upload",onClick:this.submit})))}}]),t}(n.Component),z=function(){return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/"},"Back to entryway"))};function I(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home Hello"))}var L=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(o.a,null,l.a.createElement(x,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:I}),l.a.createElement(h.b,{path:"/about3e",component:k}),l.a.createElement(h.b,{path:"/oOoOs",component:D}),l.a.createElement(h.b,{path:"/patches",render:function(){return l.a.createElement("div",null,"Patches")}}),l.a.createElement(h.b,{path:"/entryway",render:function(){return l.a.createElement("div",null,"Entry")}}),l.a.createElement(h.b,{exact:!0,path:"/auth",component:C}),l.a.createElement(h.b,{exact:!0,path:"/events",component:b(f,"/events")}),l.a.createElement(h.b,{exact:!0,path:"/traces",component:b(z,"/traces")})))}}]),t}(n.Component),H=a(36);a.n(H).a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2fcb0173.chunk.js.map