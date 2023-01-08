"use strict";(self.webpackChunkreact_movie=self.webpackChunkreact_movie||[]).push([[284],{6713:function(n,t,e){e.d(t,{KJ:function(){return s},M1:function(){return p},TP:function(){return l},Yj:function(){return f},qF:function(){return u},tx:function(){return d}});var r=e(5861),o=e(4687),i=e.n(o),a=e(1044),c=e(3524);a.ZP.defaults.baseURL=c._n,a.ZP.defaults.params={api_key:c.$h,language:"en-US"};var s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(t,"/videos"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1939:function(n,t,e){e(2791);var r=e(8175),o=e(184);t.Z=function(){return(0,o.jsx)("div",{children:(0,o.jsxs)(r.ZP,{className:"skeletonHome",speed:1,width:250,height:375,viewBox:"0 0 250 375",backgroundColor:"#44577b",foregroundColor:"#1c2434",children:[(0,o.jsx)("rect",{x:"0",y:"0",rx:"6",ry:"6",width:"250",height:"375"}),(0,o.jsx)("rect",{x:"89",y:"165",rx:"0",ry:"0",width:"1",height:"1"})]})})}},3524:function(n,t,e){e.d(t,{$h:function(){return r},CE:function(){return a},_n:function(){return o},hS:function(){return i},oQ:function(){return c}});var r="74cf07cbcff58397c32fe332f07646fa",o="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500",a="https://image.tmdb.org/t/p/original/",c="https://image.tmdb.org/t/p/w185"},3345:function(n,t,e){e.d(t,{Z:function(){return w}});var r,o,i,a,c=e(2982),s=(e(2791),e(6087)),u=e(1087),l=e(7689),p=e(3524),d=e(1939),f=e(168),h=e(3081),x=h.Z.ul(r||(r=(0,f.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-content: start;\n  flex-wrap: wrap;\n"]))),m=h.Z.li(o||(o=(0,f.Z)(["\n  position: relative;\n  width: 250px;\n  height: 375px;\n\n  margin: 15px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  transition: box-shadow 250ms ease-in-out, transform 400ms ease-in-out;\n  box-shadow: ",";\n\n  :hover,\n  :focus-visible {\n    transform: scale(1.02);\n    box-shadow: ",";\n  }\n\n  :hover p {\n    opacity: 1;\n    transform: translateY(0%) scale(1);\n  }\n"])),(function(n){return n.theme.boxsh.boxsh}),(function(n){return n.theme.boxsh.boxshpr})),v=h.Z.img(i||(i=(0,f.Z)(["\n  width: 250px;\n  height: 375px;\n\n  border-radius: 5px;\n  object-fit: cover;\n"]))),g=h.Z.p(a||(a=(0,f.Z)(["\n  transform: translateY(50%) scale(0.8);\n  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px;\n\n  width: 94%;\n  height: 45px;\n  position: absolute;\n  bottom: 0;\n  border-radius: 5px;\n  border: 1px solid #14c6b3;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n  background-color: #14c6b4a8;\n"]))),b=e(184);function w(n){var t=n.movies,e=n.isLoading,r=(0,l.TH)(),o={visible:function(n){return{opacity:1,y:0,transition:{delay:.1*n}}},hidden:{opacity:0,y:100}};return(0,b.jsx)(x,{children:e?(0,c.Z)(new Array(20)).map((function(n,t){return(0,b.jsx)(d.Z,{},t)})):t.map((function(n,t){var e=n.id,i=n.original_title,a=n.poster_path,c=n.title;return(0,b.jsx)(s.E.div,{variants:o,initial:"hidden",animate:"visible",custom:t,children:(0,b.jsx)(m,{children:(0,b.jsxs)(u.OL,{to:"/movies/".concat(e),state:{from:r},children:[(0,b.jsx)(v,{src:a?"".concat(p.hS).concat(a):"no image",alt:c,width:350,height:525}),(0,b.jsx)("div",{children:(0,b.jsx)(g,{children:i})})]})})},e)}))})}},6284:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,o,i,a,c,s,u,l,p=e(2982),d=e(5861),f=e(885),h=e(4687),x=e.n(h),m=e(2791),v=e(1087),g=e(6713),b=e(6355),w=e(168),Z=e(3081),y=Z.Z.form(r||(r=(0,w.Z)(["\n\n  display: flex;\n  justify-content: center;\n  padding-top: 100px;\n\n  :hover,\n  :focus button {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.clAccent})),j=Z.Z.label(o||(o=(0,w.Z)(["\n  display: flex;\n  align-content: center;\n"]))),k=Z.Z.input(i||(i=(0,w.Z)(["\n\n  width: 300px;\n  border-radius: 25px;\n  border: 3px solid ",";\n  outline: none;\n  padding: 10px;\n  font-size: 18px;\n  text-align: center;\n\n  background-color: black;\n  color: ",";\n  transition: width 300ms ease-in-out, border 400ms ease-in-out;\n\n  :hover,\n  :focus {\n    width: 500px;\n    border: 2px solid ",";\n    border: 3px solid ",";\n    color: ",";\n  }\n  ::placeholder {\n    color: ",";\n    text-decoration-line: underline;\n  }\n"])),(function(n){return n.theme.colors.clPrimary}),(function(n){return n.theme.colors.clAccent}),(function(n){return n.theme.colors.clAccent}),(function(n){return n.theme.colors.clAccent}),(function(n){return n.theme.colors.clAccent}),(function(n){return n.theme.colors.clPrimary})),P=Z.Z.div(a||(a=(0,w.Z)(["\n  /* background-color: ","; */\n"])),(function(n){return n.theme.colors.bgPrimary})),C=Z.Z.button(c||(c=(0,w.Z)(["\n\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n\n  background-color: transparent;\n  color: ",";\n"])),(function(n){return n.theme.colors.clPrimary})),q=Z.Z.div(s||(s=(0,w.Z)(["\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-content: start;\n  flex-wrap: wrap;\n"]))),A=Z.Z.div(u||(u=(0,w.Z)(["\n  /* background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, #003335cc 100%),\n    url(","); */\n\n  width: 100%;\n  height: ",";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n"])),(function(n){return 0===n.movies.length?"https://www.pixelstalk.net/wp-content/uploads/images5/Cool-Batman-Wallpaper-Free-Download.jpg":""}),(function(n){return n.movies.length?"100%":"100vh"})),S=e(3345),_=e(1939),z=Z.Z.p(l||(l=(0,w.Z)(["\n  position: absolute;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n  z-index: 10;\n\n  text-align: center;\n  font-weight: bold;\n  font-size: 35px;\n  color: #01d4ca;\n  margin: 20px 0 30px;\n\n  padding: 7px 15px;\n  border-radius: 15px;\n  /* text-shadow: 0px 0px 5px #000000; */\n"]))),F=e(184);function L(){return(0,F.jsx)("div",{children:(0,F.jsx)(z,{children:"There is no movies with that request..."})})}function T(){var n=(0,m.useState)(""),t=(0,f.Z)(n,2),e=t[0],r=t[1],o=(0,m.useState)(!1),i=(0,f.Z)(o,2),a=i[0],c=i[1],s=(0,v.lr)(),u=(0,f.Z)(s,2),l=u[0],h=u[1],w=(0,m.useState)(!1),Z=(0,f.Z)(w,2),z=Z[0],T=Z[1],E=l.get("query");return(0,m.useEffect)((function(){function n(){return(n=(0,d.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,T(!0),n.next=4,(0,g.qF)(E);case 4:t=n.sent,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Ooops, something went wrong");case 11:return n.prev=11,T(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}E&&function(){n.apply(this,arguments)}()}),[E]),(0,F.jsxs)(A,{movies:a,children:[(0,F.jsx)(y,{action:"",onSubmit:function(n){n.preventDefault(),h({query:e}),r("")},children:(0,F.jsxs)(j,{htmlFor:"",children:[(0,F.jsx)(k,{type:"text",name:"query",value:e,onChange:function(n){r(n.currentTarget.value.toLowerCase())},placeholder:"Please write a name movie"}),(0,F.jsx)(C,{type:"submit",children:(0,F.jsx)(P,{children:(0,F.jsx)(b.U41,{size:35})})})]})}),z?(0,F.jsx)(q,{children:(0,p.Z)(new Array(20)).map((function(n,t){return(0,F.jsx)(_.Z,{},t)}))}):a&&(0,F.jsx)(S.Z,{movies:a}),0===a.length&&(0,F.jsx)(L,{})]})}}}]);
//# sourceMappingURL=284.5a08807d.chunk.js.map