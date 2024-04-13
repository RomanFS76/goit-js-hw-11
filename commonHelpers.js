import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){const r="43330031-9673f4a92262d12e3841226eb",s=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:p})=>`
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
                <p>${l}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Downloads</p>
                <p>${p}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const n=document.querySelector(".form-search"),c=document.querySelector(".gallary"),u=document.querySelector("span"),g=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});n.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.input.value;u.classList.add("is-visible"),c.innerHTML="",d(r).then(s=>{if(u.classList.remove("is-visible"),r===""){a.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(s.hits).length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),c.insertAdjacentHTML("beforeend",f(s.hits)),g.refresh()}).catch(s=>console.log(s)),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
