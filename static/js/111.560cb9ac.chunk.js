"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[111],{111:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(260),p=r(390),f=r(184),h=function(t){var e=t.movieReviews;if(e)return(0,f.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",r]}),(0,f.jsx)("p",{children:n})]},e)}))})},l=function(){var t=(0,s.useState)(null),e=(0,a.Z)(t,2),r=e[0],u=e[1],l=(0,s.useState)(null),v=(0,a.Z)(l,2),d=v[0],w=v[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),k=x[0],y=x[1],g=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,(0,p.Jh)(g);case 4:e=t.sent,u(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&w(t.t0.message);case 11:return t.prev=11,y(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[g]),(0,f.jsxs)("div",{children:[k&&(0,f.jsx)(o.a,{}),d&&!k&&(0,f.jsxs)("p",{children:["Error: ",d]}),(0,f.jsx)(h,{movieReviews:r})]})}},390:function(t,e,r){r.d(e,{IQ:function(){return l},Jh:function(){return d},Pg:function(){return f},qF:function(){return o},wr:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"efb2c1c3ed4f12e7da1417e145c2656a",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function o(t,e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function t(e,r){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/search/movie?query=".concat(e),{signal:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=111.560cb9ac.chunk.js.map