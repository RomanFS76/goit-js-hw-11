import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(l){const r="43330031-9673f4a92262d12e3841226eb",s=new URLSearchParams({key:r,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const d=new c(".gallery a");function f(l){return l.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:o,downloads:n})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
              <img 
                class="gallery-image" 
                src="${r}"
                alt="${i}"
                width = "1000"
                height = "800"
              />
          </a>
          <div class="gallery-desc">
            <ul class="gallery-desc-list">
              <li class="gallery-desc-item">
                <p>Likes</p>
                <p>${e}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Views</p>
                <p>${t}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Comments</p>
                <p>${o}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Downloads</p>
                <p>${n}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}d.refresh();const a=document.querySelector(".form-search"),m=document.querySelector(".gallary");a.addEventListener("submit",l=>{l.preventDefault();const r=l.target.elements.input.value;p(r).then(s=>{if(r===""){u.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}s.hits,m.insertAdjacentHTML("beforeend",f(s.hits))}).catch(s=>console.log(s)),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
