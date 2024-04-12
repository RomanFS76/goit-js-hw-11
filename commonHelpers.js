import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){const r="43330031-9673f4a92262d12e3841226eb",o=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const f=new l(".gallery a",{});f.refresh();function m(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
              <img 
                class="gallery-image" 
                src="${r}"
                alt="${s}" 
              />
          </a>
        </li>
      `).join("")}const a=document.querySelector(".form-search"),d=document.querySelector(".gallary");a.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.input.value;u(r).then(o=>{if(r===""){c.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}d.insertAdjacentHTML("beforeend",m(o.hits))}).catch(o=>console.log(o)),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
