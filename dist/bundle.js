(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{X:()=>c});const t=()=>{const e=document.querySelector("body");e&&(e.innerHTML='\n        <div class="container">\n            <div class="container-content">\n                <h1 class="container-title">Выбери сложность</h1>\n                <div class="container-levels">\n                    <input type="radio" id="basic" class="container-level" name="levels" value="1"></input>\n                    <label class="radio-label" for="basic">1</label>\n                    <input type="radio" id="middle" class="container-level" name="levels" value="2"></input>\n                    <label class="radio-label" for="middle">2</label>\n                    <input type="radio" id="advanced" class="container-level" name="levels" value="3"></input>\n                    <label class="radio-label" for="advanced">3</label>\n                </div>\n                <button class="start-button">Старт</button>\n            </div> \n        </div>');const t=document.querySelector(".start-button"),n=document.querySelectorAll(".container-level");let s;null==t||t.addEventListener("click",(()=>{let e=!1,t=null;for(const t of n)t instanceof HTMLInputElement&&!0===t.checked&&(e=!0,s=t.value);e?("1"===s&&(t=3),"2"===s&&(t=6),"3"===s&&(t=9),c(t)):alert("Выберите уровень")}))};function n(){const e=document.querySelector(".minutes"),t=document.querySelector(".seconds");let n,s,l;return e&&(n=e.textContent),t&&(s=t.textContent),l=n+s,l}t();const s=["Diamonds","Clubs","Spades","Hearts"],l=["6","7","8","9","10","jack","queen","king","ace"],a=document.querySelector("body"),c=e=>{var c;a&&(a.innerHTML='\n        <div class="game-page-container">\n            <div class="timer">\n                <div class="time">\n                    <span class="timer-number minutes">00.</span>\n                    <span>min</span>\n                </div>\n                <div class="time">\n                    <span class="timer-number seconds">00</span>\n                    <span>sec</span>\n                </div>\n            </div>\n            <div class="button">\n                <button class="restart-button">Начать заново</button>\n            </div>\n        </div>\n        <div class="game-container">\n            <div class="game-space"></div>\n        </div>',null===(c=document.querySelector(".restart-button"))||void 0===c||c.addEventListener("click",(()=>{t()}))),function(){const e=document.querySelector(".minutes"),t=document.querySelector(".seconds");let n,s=0,l=0;clearInterval(n),n=setInterval((function(){l++,l<=9&&t&&(t.textContent="0"+String(l)),l>9&&t&&(t.textContent=String(l)),l>=60&&(s++,e&&(e.textContent="0"+String(s)),l=0,t&&(t.textContent="0"+String(l)))}),1e3)}();let o=[];const i=document.querySelector(".game-space");for(let t=0;t<e;t++){const e=Math.floor(Math.random()*s.length),t=Math.floor(Math.random()*l.length);let n="../static/images/"+l[t]+s[e]+".jpg";o.push(n,n)}const r=o.sort((()=>Math.random()-.5));for(let e=0;e<r.length;e++){const t=document.createElement("img");t.src=o[e],null==i||i.appendChild(t),t.classList.add("game-card")}const d=document.querySelectorAll(".game-card");setTimeout((()=>{for(const e of d)e instanceof HTMLImageElement&&(e.src="../static/images/background.jpg")}),5e3),((e,s)=>{let l=[],a=0;const c=document.querySelector("body");for(let o=0;o<e.length;o++)e[o].addEventListener("click",(e=>{var i,r;e.target.src=s[o],l[0]?(l[1]=s[o],l[0]===l[1]?(a++,a===s.length/2&&c&&(c.innerHTML+=`\n                            <div class="game-result-container">\n                                <div class="result-content">\n                                    <img src="./static/images/celebration.png">\n                                    <h1 class="result-title">Вы выиграли!</h1>\n                                        <div class="time-spent">Затраченное время:\n                                            <h2 class="time-spent-timer">${n()}</h2>\n                                        </div>\n                                    <button class="result-button">Начать заново</button>\n                                </div>\n                            </div>`,null===(i=document.querySelector(".result-button"))||void 0===i||i.addEventListener("click",(()=>{t()})))):c&&(c.innerHTML+=`\n                            <div class="game-result-container">\n                                <div class="result-content">\n                                    <img src="./static/images/dead.png">\n                                    <h1 class="result-title">Вы проиграли!</h1>\n                                        <div class="time-spent">Затраченное время:\n                                            <h2 class="time-spent-timer">${n()}</h2>\n                                        </div>\n                                    <button class="result-button">Начать заново</button>\n                                </div>\n                            </div>`,null===(r=document.querySelector(".result-button"))||void 0===r||r.addEventListener("click",(()=>{t()}))),l=[]):l[0]=s[o]}))})(d,o)}})();