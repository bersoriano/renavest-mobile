/*! For license information please see 938.87c191d2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkrenavest_mobile=self.webpackChunkrenavest_mobile||[]).push([[938],{938:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(286),i=o(384);const s=e=>{if(void 0===n.d)return;let t,o,s,v=0;const f=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),p=new WeakMap,m=()=>{s&&clearTimeout(s),s=void 0,t&&(b(!1),t=void 0)},h=(e,o)=>{if(e&&e===t)return;s&&clearTimeout(s),s=void 0;const{x:n,y:a}=(0,i.p)(o);if(t){if(p.has(t))throw new Error("internal error");t.classList.contains(d)||w(t,n,a),b(!0)}if(e){const t=p.get(e);t&&(clearTimeout(t),p.delete(e)),e.classList.remove(d);const o=()=>{w(e,n,a),s=void 0};r(e)?o():s=setTimeout(o,l)}t=e},w=(e,t,n)=>{if(v=Date.now(),e.classList.add(d),!f)return;const i=c(e);null!==i&&(L(),o=i.addRipple(t,n))},L=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},b=e=>{L();const o=t;if(!o)return;const n=u-Date.now()+v;if(e&&n>0&&!r(o)){const e=setTimeout((()=>{o.classList.remove(d),p.delete(o)}),u);p.set(o,e)}else o.classList.remove(d)};n.d.addEventListener("ionGestureCaptured",m),n.d.addEventListener("pointerdown",(e=>{t||2===e.button||h(a(e),e)}),!0),n.d.addEventListener("pointerup",(e=>{h(void 0,e)}),!0),n.d.addEventListener("pointercancel",m,!0)},a=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},r=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},d="ion-activated",l=100,u=150}}]);
//# sourceMappingURL=938.87c191d2.chunk.js.map