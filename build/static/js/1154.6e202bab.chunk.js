"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[1154],{1154:(i,t,o)=>{o.d(t,{TrailMaker:()=>a});var e=o(4409),n=o(5922);const s="trail";class a extends e.sJ{constructor(i){super(i),this._delay=0}clear(){}init(){}interact(i){var t,o,n,s;const a=this.container,{interactivity:r}=a;if(!a.retina.reduceFactor)return;const l=a.actualOptions.interactivity.modes.trail;if(!l)return;const c=l.delay*e.Xu/this.container.retina.reduceFactor;if(this._delay<c&&(this._delay+=i.value),this._delay<c)return;const d=!(l.pauseOnStop&&(r.mouse.position===this._lastPosition||(null===(t=r.mouse.position)||void 0===t?void 0:t.x)===(null===(o=this._lastPosition)||void 0===o?void 0:o.x)&&(null===(n=r.mouse.position)||void 0===n?void 0:n.y)===(null===(s=this._lastPosition)||void 0===s?void 0:s.y))),u=a.interactivity.mouse.position;u?this._lastPosition={...u}:delete this._lastPosition,d&&a.particles.push(l.quantity,a.interactivity.mouse,l.particles),this._delay-=c}isEnabled(i){var t;const o=this.container,n=o.actualOptions,a=o.interactivity.mouse,r=(null!==(t=null===i||void 0===i?void 0:i.interactivity)&&void 0!==t?t:n.interactivity).events;return a.clicking&&a.inside&&!!a.position&&(0,e.hn)(s,r.onClick.mode)||a.inside&&!!a.position&&(0,e.hn)(s,r.onHover.mode)}loadModeOptions(i){i.trail||(i.trail=new n.X);for(var t=arguments.length,o=new Array(t>1?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];for(const n of o)i.trail.load(null===n||void 0===n?void 0:n.trail)}reset(){}}}}]);
//# sourceMappingURL=1154.6e202bab.chunk.js.map