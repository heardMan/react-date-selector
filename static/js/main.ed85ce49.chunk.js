(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{115:function(e,a,t){e.exports=t(398)},119:function(e,a,t){},397:function(e,a,t){},398:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(14),l=t.n(r),o=(t(119),t(20)),s={formatDay:function(e){var a;switch(e){case 0:a="Sunday";break;case 1:a="Monday";break;case 2:a="Tuesday";break;case 3:a="Wednesday";break;case 4:a="Thursday";break;case 5:a="Friday";break;case 6:a="Saturday";break;default:a="Error: Date Input for formatDay() Not Recognized"}return a},formatMonth:function(e){var a;switch(e){case 0:a="January";break;case 1:a="February";break;case 2:a="March";break;case 3:a="April";break;case 4:a="May";break;case 5:a="June";break;case 6:a="July";break;case 7:a="August";break;case 8:a="September";break;case 9:a="October";break;case 10:a="November";break;case 11:a="December";break;default:a="Error: Date Input for formatMonth() Not Recognized"}return a}},m=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],l=t[1],m=function(){var a=new Date(e.date),t=a.setMonth(a.getMonth()+1);return e.onChange(t)},i=function(){var a=new Date(e.date),t=a.setMonth(a.getMonth()-1);return e.onChange(t)},u=function(a){return e.onChange(a.target.getAttribute("data"))};return c.a.createElement("div",{className:"datePicker"},c.a.createElement("div",{className:"daySelector"},c.a.createElement("button",{className:"leftBtn",onClick:function(){var a=new Date(e.date),t=a.setDate(a.getDate()-1);return e.onChange(t)}},"<"),c.a.createElement("div",{onClick:function(){return l(!1===r)}},function(){var a=new Date(e.date);console.log(a);var t=a.getDate(),n=a.getMonth()+1,c=a.getFullYear();return"".concat(n,"/").concat(t,"/").concat(c)}()),c.a.createElement("button",{className:"rightBtn",onClick:function(){var a=new Date(e.date),t=a.setDate(a.getDate()+1);return e.onChange(t)}},">")),!0===r?function(){for(var a=new Date(e.date),t=a.getMonth(),n=a.getFullYear(),r=new Date(n,t+1,0).getDate(),l=[],o=0;o<r;o++){var d=new Date(n,t,o+1);if(0===o)for(var v=0;v<d.getDay();v++)l.push(new Date(n,t,o-(d.getDay()-(v+1))));l.push(d)}for(var E=0;E<l.length%7;E++)l.push(new Date(n,t+1,E+1));return c.a.createElement("div",{className:"calendar"},c.a.createElement("div",{className:"monthSelector"},c.a.createElement("button",{className:"leftBtn",onClick:i},"<"),c.a.createElement("span",null,s.formatMonth(t)),c.a.createElement("button",{className:"rightBtn",onClick:m},">")),c.a.createElement("div",{className:"month"},c.a.createElement("div",{className:"dayTitle"},"S"),c.a.createElement("div",{className:"dayTitle"},"M"),c.a.createElement("div",{className:"dayTitle"},"T"),c.a.createElement("div",{className:"dayTitle"},"W"),c.a.createElement("div",{className:"dayTitle"},"T"),c.a.createElement("div",{className:"dayTitle"},"F"),c.a.createElement("div",{className:"dayTitle"},"S"),l.map((function(a,t){var n="".concat(a.getFullYear(),"-").concat(a.getMonth(),"-").concat(a.getDate()),r=new Date(e.date);return n==="".concat(r.getFullYear(),"-").concat(r.getMonth(),"-").concat(r.getDate())?c.a.createElement("div",{key:t,className:"selectedDay day",data:a,onClick:u},a.getDate()):c.a.createElement("div",{key:t,className:"day",data:a,onClick:u},a.getDate())}))))}():null)},i=(t(120),function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),s=Object(o.a)(l,2),i=s[0],u=s[1],d=Object(n.useState)(!1),v=Object(o.a)(d,2),E=v[0],f=v[1],g=Object(n.useState)(""),b=Object(o.a)(g,2),N=b[0],h=b[1],D=Object(n.useState)(""),k=Object(o.a)(D,2),y=k[0],p=k[1],w=function(e){var a=new Date(e),t=a.getDate(),n=a.getMonth()+1,c=a.getFullYear();return r("".concat(c,"/").concat(n,"/").concat(t))},C=function(e){var a=new Date(e),t=a.getDate(),n=a.getMonth()+1,c=a.getFullYear();return u("".concat(c,"/").concat(n,"/").concat(t))},M=function(){return f(!1===E)};return Object(n.useEffect)((function(){w(Date.now()),C(Date.now())}),[]),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form-field"},c.a.createElement("div",{className:"title"},"Name"),c.a.createElement("input",{className:"name",type:"text",value:N,onChange:function(e){h(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("div",{className:"title"},"Email"),c.a.createElement("input",{className:"email",type:"email",value:y,onChange:function(e){p(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("div",{className:"startDate"},c.a.createElement("div",{className:"title"},"Start Date"),c.a.createElement(m,{date:t,onChange:w}))),c.a.createElement("div",{className:"form-field"},c.a.createElement("div",{className:"endDate"},c.a.createElement("div",{className:"title"},"End Date"),c.a.createElement(m,{date:i,onChange:C}))),c.a.createElement("div",{className:"form-field"},c.a.createElement("button",{className:"btn",onClick:M},"Submit")),!0===E?c.a.createElement("div",null,c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header title"},"Form Data"),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",null,"Name: ",N),c.a.createElement("div",null,"Email: ",y),c.a.createElement("div",null,"Start Date: ",t),c.a.createElement("div",null,"End Date: ",i)),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{className:"btn",onClick:M},"Ok")))),c.a.createElement("div",{className:"modal-bg",onClick:M})):null)});t(397);var u=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.ed85ce49.chunk.js.map