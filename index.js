import{a as u,S as f,i as d}from"./assets/vendor-DnoGfDwQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="55663277-19ff75ff764545e0f4b912e24";function p(o){return u("https://pixabay.com/api/",{params:{key:m,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const a=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){a.innerHTML=o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:c})=>`
            <li class="gallery-item">
                <a href="${s}">
                    <img src="${r}" alt="${i}" />
                </a>
                <p>Likes: ${e}</p>
                <p>Views: ${t}</p>
                <p>Comments: ${n}</p>
                <p>Downloads: ${c}</p>
            </li>
        `).join(""),y.refresh()}function g(){a.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();g(),L(),p(r).then(({hits:s})=>{s.length>0?h(s):d.show({color:"#EF4040",messageColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"322px"})}).catch(s=>{console.log(s.message)}).finally(()=>{o.target.reset(),b()})}
//# sourceMappingURL=index.js.map
