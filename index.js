import{a as g,S as f,i as n}from"./assets/vendor-CVuRD470.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y=a=>{const s=new URLSearchParams({key:"53358715-8970766531ccc29f18899e248",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return g.get(`https://pixabay.com/api/?${s}`)},p=a=>{const s=({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:m,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}" target="_self" rel="noopener noreferrer">
    <img
      class="gallery-image"
      src="${r}"
      alt="${t}"
      loading="lazy"
    />
  </a>
  <ul class="stats">
    <li class="stats-item">
      <b>Likes</b>
      <span>${i}</span>
    </li>
    <li class="stats-item">
      <b>Views</b>
      <span>${m}</span>
    </li>
    <li class="stats-item">
      <b>Comments</b>
      <span>${u}</span>
    </li>
    <li class="stats-item">
      <b>Downloads</b>
      <span>${d}</span>
    </li>
  </ul>
</li>
`;l.galleryList.innerHTML=a.map(r=>s(r)).join(""),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},l={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=()=>{l.galleryList.innerHTML=""},L=()=>{l.loader.classList.remove("is-hidden")},b=()=>{l.loader.classList.add("is-hidden")},c=document.querySelector(".form"),S=a=>{a.preventDefault();const{target:s}=a,o=s.elements["search-text"].value.trim();if(o===""){n.warning({message:"Please enter a search query.",position:"topRight"});return}h(),L(),y(o).finally(()=>{b(),c.reset()}).then(r=>{if(r.data.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(r.data.hits)}).catch(r=>{n.error({message:r.message||"Something went wrong"})})};c.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
