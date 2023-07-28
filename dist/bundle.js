(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{X:()=>l});const t=()=>{document.querySelector("body").innerHTML='\n        <div class="container">\n            <div class="container-content">\n                <h1 class="container-title">Выбери сложность</h1>\n                <div class="container-levels">\n                    <input type="radio" id="basic" class="container-level" name="levels" value="1"></input>\n                    <label class="radio-label" for="basic">1</label>\n                    <input type="radio" id="middle" class="container-level" name="levels" value="2"></input>\n                    <label class="radio-label" for="middle">2</label>\n                    <input type="radio" id="advanced" class="container-level" name="levels" value="3"></input>\n                    <label class="radio-label" for="advanced">3</label>\n                </div>\n                <button class="start-button">Старт</button>\n            </div> \n        </div>';const e=document.querySelector(".start-button"),t=document.querySelectorAll(".container-level");let n;e.addEventListener("click",(()=>{let e,s=!1;for(const e of t)!0===e.checked&&(s=!0,n=e.value);s?("1"===n&&(e=3),"2"===n&&(e=6),"3"===n&&(e=9),l(e)):alert("Выберите уровень")}))};function n(){const e=document.querySelector(".minutes"),t=document.querySelector(".seconds");return e.textContent+t.textContent}t();const s=["Diamonds","Clubs","Spades","Hearts"],a=["6","7","8","9","10","jack","queen","king","ace"],c=document.querySelector("body"),l=e=>{c.innerHTML='\n        <div class="game-page-container">\n            <div class="timer">\n                <div class="time">\n                    <span class="timer-number minutes">00.</span>\n                    <span>min</span>\n                </div>\n                <div class="time">\n                    <span class="timer-number seconds">00</span>\n                    <span>sec</span>\n                </div>\n            </div>\n            <div class="button">\n                <button class="restart-button">Начать заново</button>\n            </div>\n        </div>\n        <div class="game-container">\n            <div class="game-space"></div>\n        </div>',document.querySelector(".restart-button").addEventListener("click",(()=>{t()})),function(){const e=document.querySelector(".minutes"),t=document.querySelector(".seconds");let n,s=0,a=0;clearInterval(n),n=setInterval((function(){a++,a<=9&&(t.textContent="0"+a),a>9&&(t.textContent=a),a>60&&(s++,e.textContent="0"+s,a=0,t.textContent="0"+a)}),1e3)}();let l=[];const o=document.querySelector(".game-space");for(let t=0;t<e;t++){const e=Math.floor(Math.random()*s.length),t=Math.floor(Math.random()*a.length);let n="../static/images/"+a[t]+s[e]+".jpg";l.push(n,n)}const r=l.sort((()=>Math.random()-.5));for(let e=0;e<r.length;e++){const t=document.createElement("img");t.src=l[e],o.appendChild(t),t.classList.add("game-card")}const i=document.querySelectorAll(".game-card");setTimeout((()=>{for(const e of i)e.src="../static/images/background.jpg"}),5e3),((e,s)=>{let a=[],c=0;const l=document.querySelector("body");for(let o=0;o<e.length;o++)e[o].addEventListener("click",(e=>{e.target.src=s[o],a[0]?(a[1]=s[o],a[0]===a[1]?(c++,c===s.length/2&&(l.innerHTML+=`\n                            <div class="game-result-container">\n                                <div class="result-content">\n                                    <img src="./static/images/celebration.png">\n                                    <h1 class="result-title">Вы выиграли!</h1>\n                                        <div class="time-spent">Затраченное время:\n                                            <h2 class="time-spent-timer">${n()}</h2>\n                                        </div>\n                                    <button class="result-button">Начать заново</button>\n                                </div>\n                            </div>`,document.querySelector(".result-button").addEventListener("click",(()=>{t()})))):(l.innerHTML+=`\n                            <div class="game-result-container">\n                                <div class="result-content">\n                                    <img src="./static/images/dead.png">\n                                    <h1 class="result-title">Вы проиграли!</h1>\n                                        <div class="time-spent">Затраченное время:\n                                            <h2 class="time-spent-timer">${n()}</h2>\n                                        </div>\n                                    <button class="result-button">Начать заново</button>\n                                </div>\n                            </div>`,document.querySelector(".result-button").addEventListener("click",(()=>{t()}))),a=[]):a[0]=s[o]}))})(i,l)}})();