import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(i){const s="43330031-9673f4a92262d12e3841226eb",r=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const m=new u(".gallery a");function f(i){return i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:l,downloads:a})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
              <img 
                class="gallery-image" 
                src="${s}"
                alt="${o}"
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
                <p>${l}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Downloads</p>
                <p>${a}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}m.refresh();const c=document.querySelector(".form-search"),g=document.querySelector(".gallary");c.addEventListener("submit",i=>{i.preventDefault();const s=i.target.elements.input.value;p(s).then(r=>{if(s===""){n.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}console.log(Object.keys(r.hits).length),console.log(r.hits),Object.keys(r.hits).length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:2e3}),g.insertAdjacentHTML("beforeend",f(r.hits))}).catch(r=>console.log(r)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
