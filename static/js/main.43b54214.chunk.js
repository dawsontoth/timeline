(this.webpackJsonpcontrol=this.webpackJsonpcontrol||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(14),r=a.n(c),i=a(30),l=a(16),o=a(7),s=(a(22),a(12)),u=a.n(s),d=a(13),j=a(15),f=a(31);function m(e){var t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),e,0,0);return t.getTime()-a.getTime()}function v(e){if(null!==e){var t=e<0?"T-":"T+";e=Math.abs(e);var a=String(Math.floor(e%1e3/(1e3/30))).padStart(2,"0"),n=String(Math.floor(e/1e3%60)).padStart(2,"0"),c=String(Math.floor(e/1e3/60%60)).padStart(2,"0");return"".concat(t).concat(c,":").concat(n,":").concat(a)}}function b(){return Object(f.a)("timeline-items",Object(j.a)(u.a.mark((function e(){var t,a,n,c,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){var e,t=Object(d.a)(a);try{for(t.s();!(e=t.n()).done;){var n,c=e.value;if(c.late=!1,c.delta=void 0,c.completed);else if(c.atMinutes){var r=m(c.atMinutes);c.late=r>0,c.delta=v(r)}else if(void 0!==c.afterMinutes&&(null===(n=c.relativeTo)||void 0===n?void 0:n.completed)&&c.relativeTo.completedAt){var i=Date.now()-c.relativeTo.completedAt-60*c.afterMinutes*1e3;c.late=i>0,c.delta=v(i)}c.updated.forEach((function(e){return e()}))}}catch(l){t.e(l)}finally{t.f()}},e.next=3,fetch("/timeline/events.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=Object(d.a)(a);try{for(r=function(){var e=c.value;e.completed=!1,e.updated=[],e.toggleCompleted=function(){e.completed=!e.completed,e.completedAt=e.completed?Date.now():void 0,e.updated.forEach((function(e){return e()}))},void 0!==e.relativeToIndex&&(e.relativeTo=a[e.relativeToIndex])},n.s();!(c=n.n()).done;)r()}catch(l){n.e(l)}finally{n.f()}return setInterval(i,1e3/60),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)}))),{staleTime:1/0})}var O=a(3);function p(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(){var e=b().data,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(),l=Object(o.a)(i,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){var t=setInterval((function(){var t=null===e||void 0===e?void 0:e.find((function(e){return e.delta}));r(null===t||void 0===t?void 0:t.delta),u(null===t||void 0===t?void 0:t.late)}),1e3/60);return function(){clearInterval(t)}}),[e]),{delta:c,late:s}}(),i=r.delta,l=r.late;return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date;c(e.toLocaleTimeString())}),1e3/60);return function(){clearInterval(e)}}),[]),Object(O.jsx)("div",{className:"clock"+(l?" late":""),children:i||a})}a(25);function h(){return Object(O.jsx)("div",{className:"controls",onClick:function(){return window.location.reload()},children:Object(O.jsx)("button",{children:"Reset"})})}function x(e){var t=e.item,a=Object(n.useState)(),c=Object(o.a)(a,2),r=c[0],i=c[1],l=Object(n.useState)(),s=Object(o.a)(l,2),u=s[0],d=s[1],j=Object(n.useState)(),f=Object(o.a)(j,2),m=f[0],v=f[1];return Object(n.useEffect)((function(){var e=function(){i(t.delta),d(t.late),v(t.completed)};return t.updated.push(e),function(){var a=t.updated.indexOf(e);a>=0&&t.updated.splice(a,1)}}),[t,i,v]),Object(O.jsxs)("li",{className:"item"+(u?" late":"")+(m?" completed":""),onClick:t.toggleCompleted,children:[Object(O.jsx)("div",{className:"item-status",children:m?Object(O.jsx)("i",{className:"fal fa-check-circle"}):r||(t.image?Object(O.jsx)("a",{className:"fal fa-question-circle item-image",target:"_blank",rel:"noreferrer",href:t.image,children:Object(O.jsx)("span",{className:"sr-only",children:"Help"})}):void 0)}),Object(O.jsx)("div",{className:"message",dangerouslySetInnerHTML:{__html:t.message}})]})}a(26);function g(){var e=b(),t=e.isLoading,a=e.error,n=e.data;return t?Object(O.jsx)("ul",{className:"timeline",children:Object(O.jsx)("li",{className:"item",children:Object(O.jsx)("div",{className:"item-status",children:"Loading..."})})}):a||!n?Object(O.jsx)("ul",{className:"timeline",children:Object(O.jsx)("li",{className:"item",children:Object(O.jsx)("div",{className:"item-status",children:a||"Failed to load items!"})})}):Object(O.jsx)("ul",{className:"timeline",children:n.map((function(e,t){return Object(O.jsx)(x,{item:e},t)}))})}var N=new i.a;function S(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(l.a,{client:N,children:[Object(O.jsx)(p,{}),Object(O.jsx)(h,{}),Object(O.jsx)(g,{})]})})}a(27);r.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.43b54214.chunk.js.map