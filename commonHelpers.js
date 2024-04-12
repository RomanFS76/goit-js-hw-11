import{i as c,S as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(o){if(o===""){c.show({title:"My friend",message:"Field must be filled",color:"green",imageWidth:1e3,timeout:2e3,position:"center",imageWidth:100});return}const r="43330031-9673f4a92262d12e3841226eb",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`https://pixabay.com/api/?${i}`,{headers:{Accept:"application/json"}}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(o){const r=img.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:m,comments:d,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
              <img 
                class="gallery-image" 
                src="${preview}"
                alt="${t}" 
              />
          </a>
        </li>
    `).join("");userList.insertAdjacentHTML("beforeend",r()),new l(".gallery a",{}).refresh()}const a=document.querySelector(".form-search");a.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.input.value;u(r).then(i=>f()).catch(i=>console.log(i)),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
