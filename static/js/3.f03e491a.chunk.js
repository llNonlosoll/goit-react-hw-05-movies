"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{211:function(e,t,n){n.d(t,{Z:function(){return m}});var r,a,c,u,s=n(689),i=n(168),o=n(444),p=n(87),l=o.ZP.h1(r||(r=(0,i.Z)(["\n  text-align: center;\n"]))),h=o.ZP.ul(a||(a=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=o.ZP.li(c||(c=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),v=(0,o.ZP)(p.rU)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n  color: #111111;\n\n  &:hover {\n    color: #ffff62;\n  }\n"]))),d=n(184),m=function(e){var t=e.movies,n=(0,s.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{children:"TRENDING FILMS TODAY"}),(0,d.jsx)(h,{children:t.map((function(e){var t=e.id,r=e.title;return(0,d.jsx)(f,{children:(0,d.jsx)(v,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})]})}},3:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(87),o=n(260),p=n(390),l=n(211),h=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)(null),v=(0,a.Z)(f,2),d=v[0],m=v[1],x=(0,s.useState)(!1),w=(0,a.Z)(x,2),g=w[0],y=w[1],Z=(0,i.lr)(),b=(0,a.Z)(Z,2),j=b[0],k=b[1],S=j.get("query"),C=(0,s.useState)((function(){return S||""})),E=(0,a.Z)(C,2),P=E[0],_=E[1],q=(0,s.useRef)();(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.current&&q.current.abort(),q.current=new AbortController,e.prev=2,y(!0),e.next=6,(0,p.qF)(S,q.current.signal);case 6:t=e.sent,c(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&m(e.t0.message);case 13:return e.prev=13,y(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();S&&e()}),[S]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("h2",{children:"Search Movies:"}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k({query:P})},children:[(0,h.jsx)("input",{value:P,onChange:function(e){_(e.target.value)},name:"searchQuery",type:"text",placeholder:"Type here the movie title"}),(0,h.jsx)("button",{type:"submit",children:"Search movie"})]})]}),g&&(0,h.jsx)(o.a,{}),d&&!g&&(0,h.jsxs)("p",{children:["Error: ",d]}),0!==n.length&&(0,h.jsx)(l.Z,{movies:n}),!d&&!S&&0===n.length&&(0,h.jsx)("p",{children:"Please enter movie title"}),!d&&!g&&S&&0===n.length&&(0,h.jsx)("p",{children:"No movies found with this title"})]})}},390:function(e,t,n){n.d(t,{IQ:function(){return f},Jh:function(){return d},Pg:function(){return l},qF:function(){return o},wr:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"efb2c1c3ed4f12e7da1417e145c2656a",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/trending/movie/day");case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function o(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/search/movie?query=".concat(t),{signal:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(t,"/reviews"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=3.f03e491a.chunk.js.map