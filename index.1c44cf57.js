var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var a=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},e.parcelRequired7c6=a),a("fkjOe"),a("krGWQ"),a("2nhTy");var o=a("fkjOe");const r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var t=a("krGWQ");const{galleryConteiner:d}=t.default;t=a("krGWQ"),o=a("fkjOe");var l=a("8G1wF");const{galleryConteiner:s}=t.default,{POSTER_URL:m}=l.default;new(0,o.default);const c=new(0,o.default);d.innerHTML="",c.getTopMovies().then((e=>{!function(e,n){const i=e.results.map((({id:e,poster_path:i,release_date:a,genre_ids:o,original_title:r})=>`<div class="movie__card">\n            <a href="" class="movie__link js-movie-link" id='${e}'>\n                <img class="movie__img" src='${m}/${i}' alt="movie's poster"/>\n                <h2 class="movie__title">${r}</h2>\n                <p class="movie__info">${function(e,n){const i=[];for(let a=0;a<e.length;a+=1)for(const o of n){const{id:n,name:r}=o;e[a]===n&&i.push(r)}return i.length>=3?i.slice(0,3).join(", "):i.join(", ")}(o,n)} | ${a.slice(0,4)}</p>\n            </a>\n        </div>`)).join("");s.insertAdjacentHTML("beforeend",i)}(e,r)}));
//# sourceMappingURL=index.1c44cf57.js.map
