(()=>{"use strict";var e={};let t,n;e.d=(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const c=[];function o(e){const t=e.target.value;if(e.target.checked)c.includes(t)||c.push(t);else{const e=c.indexOf(t);e>-1&&c.splice(e,1)}!function(){const e=new URLSearchParams;e.set("ids",c.join(",")),history.pushState(null,"",`?${e.toString()}`)}(),d()}function d(){n.textContent=`Порядок выбора: ${c.join(", ")}`}"undefined"!=typeof window&&window.addEventListener("DOMContentLoaded",(function(){t=document.getElementById("checkboxes"),n=document.getElementById("selectedOrder"),function(){for(let e=1;e<=20;e++){const n=document.createElement("div");n.className="checkbox-wrapper";const c=document.createElement("input");c.type="checkbox",c.id=`checkbox-${e}`,c.value=e;const d=document.createElement("label");d.htmlFor=`checkbox-${e}`,d.textContent=`Категория ${e}`,c.addEventListener("change",o),n.appendChild(c),n.appendChild(d),t.appendChild(n)}}(),function(){const e=new URLSearchParams(window.location.search).get("ids");e&&(e.split(",").forEach((e=>{const t=document.getElementById(`checkbox-${e}`);t&&(t.checked=!0,c.push(e))})),d())}()}))})();