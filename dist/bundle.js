!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),d=null,l=0,c=[],p=n(7);function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(h(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(h(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function f(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),f(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=l++;n=d||(d=g(e)),r=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return u(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}t&&u(m(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete a[s.id]}}}};var v,k=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=k(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},function(t,e,n){"use strict";n.r(e);n(3);const r=(()=>{const t=[],e=(t,e=[])=>({name:t,tasks:e}),n=()=>{const e=document.getElementById("projects-list");e.innerHTML="";const n=t.map((t,e)=>`<div class="project p${e}" id="${e}">\n\t\t\t\t<div class="project-top collapsible">\n\t\t\t\t\t<h2 class="project-name">${t.name}</h2>\n\t\t\t\t\t<a class="delete-project"></a>\n\t\t\t\t\t<a class="add-new-task">New task</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="project-bottom">\n\t\t\t\t\t<ul class="tasks-list">\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="add-task-modal" style="display: none">\n\t\t\t\t\t<div class="modal-content">\n\t\t\t\t\t\t<div class="modal-header">\n\t\t\t\t\t\t\t<span class="close-add-modal">&times</span>\n\t\t\t\t\t\t\t<h2>Add a new task</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t<label>name<input type="text" name="name" class="name"></label>\n\t\t\t\t\t\t\t<label>Description<textarea class="description"></textarea></label>\n\t\t\t\t\t\t\t<label>Priority\n\t\t\t\t\t\t\t\t<select class="priority">\n\t\t\t\t\t\t\t\t\t<option value="urgent">Urgent</option>\n\t\t\t\t\t\t\t\t\t<option value="pretty-important">Pretty important</option>\n\t\t\t\t\t\t\t\t\t<option value="can-wait">Can wait</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label>Due date<input type="date" name="due-date" class="due-date"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t\t<input type="button" name="submit-task" class="submit-task" id="submit-task" value="Submit task">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>`).join(" ");e.innerHTML=n};return{projectsList:t,projectsFactory:e,addProject:()=>{let r=document.getElementById("project-name").value;if(""!=r)return t.push(e(r)),n(),o.renderAllTasks(),t;alert("The name field cannot be empty!")},renderProjects:n,deleteProject:e=>{t.splice(e,1),n(),o.renderAllTasks(),localStorage.clear()}}})(),o=(()=>{const t=(t,e,n,r)=>({name:t,description:e,priority:n,dueDate:r}),e=()=>{r.projectsList.map((t,e)=>o.renderTask(e))};return{taskFactory:t,addTask:e=>{const n=r.projectsList[e];let o=document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .name`).value,a=document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .description`).value,i=document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .priority`).value,s=document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .due-date`).value;""!=o?n.tasks.push(t(o,a,i,s)):alert("You should at least specify the name")},renderTask:t=>{const e=r.projectsList[t],n=document.querySelector(`.p${t} .tasks-list`);n.innerHTML="";const o=e.tasks.map((t,e)=>`<li class="task g${e}" id=${e}>\n\t\t\t\t<div class="task-header">\n\t\t\t\t\t<h3>${t.name}</h3>\n\t\t\t\t\t${"urgent"==t.priority?'<span class="urgent">Urgent</span>':"pretty-important"==t.priority?'<span class="pretty-important">Pretty important</span>':'<span class="can-wait">Can wait</span>'}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="task-body">\n\t\t\t\t\t<p class="description">${t.description}</p>\n\t\t\t\t\t${t.dueDate?`<p class='due-date'>Due date: ${t.dueDate}</p>`:""}\n\t\t\t\t\t<div class="task-buttons">\n\t\t\t\t\t\t<button class="edit-task">Edit</button>\n\t\t\t\t\t\t<button class="delete-task">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="edit-task-modal" style="display: none">\n\t\t\t\t\t<div class="modal-content">\n\t\t\t\t\t\t<div class="modal-header">\n\t\t\t\t\t\t\t<span class="close-edit-modal">&times</span>\n\t\t\t\t\t\t\t<h2>Editing a task</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t<label>name<input type="text" name="name" class="name"></label>\n\t\t\t\t\t\t\t<label>Description<textarea class="description"></textarea></label>\n\t\t\t\t\t\t\t<label>Priority\n\t\t\t\t\t\t\t\t<select class="priority">\n\t\t\t\t\t\t\t\t\t<option value="urgent">Urgent</option>\n\t\t\t\t\t\t\t\t\t<option value="pretty-important">Pretty important</option>\n\t\t\t\t\t\t\t\t\t<option value="can-wait">Can wait</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label>Due date<input type="date" name="due-date" class="due-date"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t<input type="button" name="edittask" class="edittask" id="edittask" value="Accept">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>`).join(" ");n.innerHTML=o},editTask:(t,e)=>{const n=r.projectsList[e].tasks[t];let a=document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .name`).value,i=document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .description`).value,s=document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .priority`).value,d=document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .due-date`).value;""!=a?(n.name=a,n.description=i,n.priority=s,n.dueDate=d,o.renderAllTasks()):alert("You should at least specify the name")},deleteTask:(t,n)=>{r.projectsList[n].tasks.splice(t,1),e()},renderAllTasks:e}})(),a=(t,e,n)=>{if(e.classList.contains("edit-task-modal")){const e=r.projectsList[n].tasks[t];document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .name`).value=e.name,document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .description`).value=e.description,document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .priority`).value=e.priority,document.querySelector(`.g${t} .edit-task-modal > .modal-content > .modal-body > label > .due-date`).value=e.dueDate}"none"===e.style.display?e.style.display="block":e.style.display="none"};document.getElementById("add-project-btn").addEventListener("click",function(t){r.addProject(),document.getElementById("project-name").value=""}),document.getElementById("project-name").addEventListener("keydown",function(t){13===t.keyCode&&(r.addProject(),this.value="")}),document.getElementById("projects-list").addEventListener("click",function(t){if(t.target.classList.contains("add-new-task")){let e=t.target.parentNode.parentNode.id,n=document.querySelector(`.p${e} .add-task-modal`);a(e,n)}else if(t.target.classList.contains("submit-task")){let e=t.target.parentNode.parentNode.parentNode.parentNode.id;o.addTask(e),o.renderTask(e),document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .name`).value="",document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .description`).value="",document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .priority`).value="",document.querySelector(`.p${e} .add-task-modal > .modal-content > .modal-body > label > .due-date`).value="";let n=document.querySelector(`.p${e} .project-bottom`),r=(t=>{let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseInt(n.marginTop)+parseInt(n.marginBottom)})(document.querySelector(`.p${e} .project-bottom > .tasks-list`));n.style.maxHeight=r+"px";let i=document.querySelector(`.p${e} .add-task-modal`);a(e,i)}else if(t.target.classList.contains("delete-task")){let e=t.target.parentNode.parentNode.parentNode.id,n=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;o.deleteTask(e,n)}else if(t.target.classList.contains("edit-task")){let e=t.target.parentNode.parentNode.parentNode.id,n=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id,r=document.querySelector(`.g${e} .edit-task-modal`);a(e,r,n)}else if(t.target.classList.contains("edittask")){let e=t.target.parentNode.parentNode.parentNode.parentNode.id,n=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;o.editTask(e,n)}else if(t.target.classList.contains("delete-project")){let e=t.target.parentNode.parentNode.id;r.deleteProject(e)}else if(t.target.classList.contains("close-add-modal")){let e=t.target.parentNode.parentNode.parentNode.parentNode.id;document.querySelector(`.p${e} .add-task-modal`).style.display="none"}else if(t.target.classList.contains("close-edit-modal")){let e=t.target.parentNode.parentNode.parentNode.parentNode.id;document.querySelector(`.g${e} .edit-task-modal`).style.display="none"}else if(t.target.classList.contains("collapsible")){t.target.classList.toggle("expanded");let e=t.target.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}else if(t.target.parentNode.classList.contains("collapsible")){t.target.parentNode.classList.toggle("expanded");let e=t.target.parentNode.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}});r.renderProjects(),o.renderAllTasks()},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(0)(!1);var r=n(5)(n(6));e.push([t.i,"* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #fe5f55;\r\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23fe7f77' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23fe9f99' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ffbfbb' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ffdfdd' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23FFF' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E\");\r\n\tbackground-attachment: fixed;\r\n\tbackground-size: cover;\r\n}\r\n\r\nli {\r\n\tlist-style: none;\r\n}\r\n\r\nheader {\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n#wrapper {\r\n\tmax-width: 600px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n#logo-wrapper {\r\n\ttext-align: center;\r\n\tmargin-top: 2em;\r\n}\r\n\r\n#logo-wrapper span {\r\n\tfont-size: 3em;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tvertical-align: top;\r\n  line-height: 2em;\r\n}\r\n\r\n#logo {\r\n\tdisplay: inline-block;\r\n\twidth: 96px;\r\n\theight: 96px;\r\n\tbackground: url("+r+");\r\n\tbackground-size: 96px;\r\n}\r\n\r\n.project {\r\n\tbackground: #FFDFDD;\r\n\tpadding: 0.8em;\r\n  margin-top: 20px;\r\n  border-radius: 7px;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.project:hover {\r\n\tborder: 2px solid #CB4C44;\r\n}\r\n\r\n#add-project {\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n#project-name {\r\n\tpadding: 8px;\r\n}\r\n\r\n#project-name:focus {\r\n\toutline: 2px solid black;\r\n} \r\n\r\n\r\n#add-project-btn {\r\n\tpadding: 8px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: bold;\r\n\tborder-radius: 4px;\r\n\tfont-size: 1em;\r\n\tborder: 1px solid white;\r\n\tcolor: #fff;\r\n\tbackground-color: #CB4C44;\r\n\tcursor: pointer;\r\n\ttransition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#add-project-btn:hover {\r\n\tbackground-color: #fff;\r\n\tcolor: #CB4C44;\r\n}\r\n\r\n.delete-project {\r\n\tfloat: right;\r\n}\r\n\r\n.project-name {\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n\tfont-size: 20px;\r\n\tcursor: default;\r\n\tmax-width: 90%;\r\n}\r\n\r\n.project-bottom {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n\r\n\r\n.tasks-list {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.edit-task-modal,\r\n.add-task-modal {\r\n\tbackground-color: white;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 100px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n\r\n.close-add-modal,\r\n.close-edit-modal {\r\n\tfont-size: 28px;\r\n\tcursor: pointer;\r\n\tfloat: right;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  max-width: 450px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.modal-header h2 {\r\n\tmargin: 0;\r\n\tdisplay: inline-block;\r\n\tfont-weight: normal;\r\n\tfont-size: 1.8em;\r\n}\r\n\r\n.modal-header {\r\n\tbackground-color: #CB4C44;\r\n\tcolor: #fff;\r\n\tpadding: 2px 16px;\r\n}\r\n\r\n.modal-body,\r\n.modal-footer {\r\n\tpadding: 5px 16px;\r\n}\r\n\r\n.modal-body label {\r\n\tfont-size: 22px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n\r\n.modal-body input,\r\n.modal-body textarea,\r\n.modal-body select  {\r\n\tdisplay: block;\r\n\tmargin-bottom: 15px;\r\n\tfont-size: 18px;\r\n\tpadding: 6px 10px;\r\n\tborder: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.modal-body textarea {\r\n\twidth: 80%;\r\n\tresize: none;\r\n\theight: 70px;\r\n}\r\n\r\n.modal-footer {\r\n\tbackground-color: #CB4C44;\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n}\r\n\r\n.modal-footer input {\r\n\tborder: 2px solid white;\r\n\tcolor: #fff;\r\n\tfont-size: 22px;\r\n\tbackground-color: #CB4C44;\r\n\tcursor: pointer;\r\n\ttransition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n.modal-footer input:hover {\r\n\tbackground-color: #fff;\r\n\tcolor: #CB4C44;\r\n}\r\n\r\n.delete-project {\r\n\tborder: none;\r\n}\r\n\r\n.delete-project:after {\r\n\tfont-family: 'Font Awesome\\ 5 Free';\r\n\tcontent: \"\\f00d\";\r\n\tfont-weight: 900;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.add-new-task {\r\n\tdisplay: block;\r\n\tmargin-top: 10px;\r\n\twidth: 16%;\r\n}\r\n\r\n.add-new-task:before {\r\n\tfont-family: 'Font Awesome\\ 5 Free';\r\n  content: \"\\f067\";\r\n  font-weight: 900;\r\n  top: 7%;\r\n  margin-right: 7px;\r\n  color: #AA0000;\r\n}\r\n\r\n.add-new-task:hover {\r\n\tcolor: #AA0000;\r\n}\r\n\r\n\r\n\r\n.add-new-task, \r\n.delete-project {\r\n\tcursor: pointer;\r\n}\r\n\r\n.task-header h3,\r\n.task-header span {\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n}\r\n\r\n.task-header span {\r\n\tfloat: right;\r\n}\r\n\r\n.task {\r\n\tbackground: #fff;\r\n\tmargin-top: 10px;\r\n  border-radius: 7px;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.task-header,\r\n.task-body p,\r\n.task-buttons {\r\n\tpadding: 0.8em;\r\n}\r\n\r\n.task-buttons {\r\n\ttext-align: right;\r\n}\r\n\r\n.task-header {\r\n\tborder-bottom: 1px solid #ccc;\r\n}\r\n/*.task-body {\r\n\tmax-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}*/\r\n\r\n.urgent {\r\n\tcolor: #e3272b;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.pretty-important {\r\n\tcolor: #ffb805;\r\n}\r\n.can-wait {\r\n\tcolor: #3edd89;\r\n}\r\n\r\n.description {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.task-body .due-date {\r\n\tmargin: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.delete-task {\r\n\t border: 1px solid #FE5F55;\r\n   border-radius: 6px;\r\n   background-color: white;\r\n   color: #FE5F55;\r\n   padding: 0.5em;\r\n   font-weight: bold;\r\n   font-size: 0.9em;\r\n   cursor: pointer;\r\n   transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n.edit-task {\r\n\tbackground-color: white;\r\n\tborder: none;\r\n\tpadding: 0.5em;\r\n\tfont-size: 0.9em;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-task, \r\n.edit-task {\r\n\tfont-family: 'Roboto', sans-serif !important;\r\n}\r\n\r\n.delete-task:hover {\r\n\tbackground-color: #FE5F55;\r\n\tcolor: white;\r\n}\r\n\r\n",""])},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"9717a62a6ace89700a402fd1a1b3a191.png"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);