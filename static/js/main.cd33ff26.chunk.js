(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/tech-talk-on-reactjs-1-638.48bc417a.jpg"},function(t,e,a){t.exports=a(18)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(7),i=a.n(c),r=(a(15),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),h=(a(16),a(8)),p=a.n(h),d=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(m.a)(e).call(this,t))).timer=function(){setTimeout(function(){"true"===a.state.etat&&(60===a.state.s?a.setState({s:0,m:a.state.m+1}):a.setState({s:a.state.s+1}),60===a.state.m&&a.setState({m:0,h:a.state.h+1}),a.timer())},1e3)},a.reset=function(){a.setState({h:0,m:0,s:0,etat:"false"})},a.etat=function(){"true"===a.state.etat?a.setState({etat:"false"}):(a.setState({etat:"true"}),a.timer())},a.state={h:0,m:0,s:0,etat:"false"},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"section1"},s.a.createElement("div",{className:"div-1"},s.a.createElement("img",{src:p.a,alt:"image",className:"image"}))),s.a.createElement("section",{className:"section2"},s.a.createElement("div",{className:"div1-2"},s.a.createElement("span",null,this.state.h<10?"0"+this.state.h:this.state.h),":",s.a.createElement("span",null,this.state.m<10?"0"+this.state.m:this.state.m),":",s.a.createElement("span",null,this.state.s<10?"0"+this.state.s:this.state.s)),s.a.createElement("div",{className:"div2-2"},s.a.createElement("span",null,"Hours"),s.a.createElement("span",null,"Minutes"),s.a.createElement("span",null,"Seconds")),s.a.createElement("div",{className:"btns"},s.a.createElement("button",{className:"btn1",onClick:this.etat},"true"===this.state.etat?"Stop":"Start"),s.a.createElement("button",{className:"btn2",onClick:this.reset},"Reset"))))}}]),e}(n.Component),f=(a(17),function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement(d,null)}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.cd33ff26.chunk.js.map