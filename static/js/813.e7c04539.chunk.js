"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[813],{438:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),c=n(757),o=n.n(c),s=n(791),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i,f,l,p=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat("ed30d82e5e7e2bb8ef0712ec8219f600"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=n(260),h=n(689),v=n(168),m=n(444),x=n(87),b=m.ZP.ul(i||(i=(0,v.Z)(["\n  list-style-type: none;\n"]))),Z=m.ZP.li(f||(f=(0,v.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),k=(0,m.ZP)(x.rU)(l||(l=(0,v.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: blue;\n  }\n"]))),w=n(184),g=function(e){var t=e.films,n=(0,h.TH)();return(0,w.jsx)(b,{children:t.map((function(e){return(0,w.jsx)(Z,{children:(0,w.jsx)(k,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})},j=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],u=(0,s.useState)(!1),i=(0,a.Z)(u,2),f=i[0],l=i[1],h=(0,s.useRef)();return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.current&&h.current.abort(),h.current=new AbortController,e.prev=2,l(!0),e.next=6,p({abortCtrl:h.current});case 6:t=e.sent,c(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0.message);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,w.jsxs)("main",{children:[(0,w.jsx)("h1",{children:"TRENDING FILMS TODAY"}),(0,w.jsx)(g,{films:n}),f&&(0,w.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=813.e7c04539.chunk.js.map