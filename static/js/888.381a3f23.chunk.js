"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[888],{888:(i,s,t)=>{t.d(s,{AbsorbersPlugin:()=>r});var o=t(4409),e=t(4501);class r{constructor(){this.id="absorbers"}async getPlugin(i){const{Absorbers:s}=await t.e(3183).then(t.bind(t,3183));return new s(i)}loadOptions(i,s){var t;(this.needsPlugin(i)||this.needsPlugin(s))&&(null!==s&&void 0!==s&&s.absorbers&&(i.absorbers=(0,o.wJ)(s.absorbers,(i=>{const s=new e.h;return s.load(i),s}))),i.interactivity.modes.absorbers=(0,o.wJ)(null===s||void 0===s||null===(t=s.interactivity)||void 0===t||null===(t=t.modes)||void 0===t?void 0:t.absorbers,(i=>{const s=new e.h;return s.load(i),s})))}needsPlugin(i){var s;if(!i)return!1;const t=i.absorbers;return(0,o.cy)(t)?!!t.length:!!t||!(null===(s=i.interactivity)||void 0===s||null===(s=s.events)||void 0===s||null===(s=s.onClick)||void 0===s||!s.mode||!(0,o.hn)("absorber",i.interactivity.events.onClick.mode))}}},4501:(i,s,t)=>{t.d(s,{h:()=>n});var o=t(4409);class e{constructor(){this.radius=0,this.mass=0}load(i){i&&(void 0!==i.mass&&(this.mass=i.mass),void 0!==i.radius&&(this.radius=i.radius))}}class r extends o.PV{constructor(){super(),this.density=5,this.value=50,this.limit=new e}load(i){i&&(super.load(i),void 0!==i.density&&(this.density=i.density),(0,o.Et)(i.limit)?this.limit.radius=i.limit:this.limit.load(i.limit))}}class n{constructor(){this.color=new o.Oi,this.color.value="#000000",this.draggable=!1,this.opacity=1,this.destroy=!0,this.orbits=!1,this.size=new r}load(i){void 0!==i&&(void 0!==i.color&&(this.color=o.Oi.create(this.color,i.color)),void 0!==i.draggable&&(this.draggable=i.draggable),this.name=i.name,void 0!==i.opacity&&(this.opacity=i.opacity),void 0!==i.position&&(this.position={},void 0!==i.position.x&&(this.position.x=(0,o.DT)(i.position.x)),void 0!==i.position.y&&(this.position.y=(0,o.DT)(i.position.y))),void 0!==i.size&&this.size.load(i.size),void 0!==i.destroy&&(this.destroy=i.destroy),void 0!==i.orbits&&(this.orbits=i.orbits))}}}}]);
//# sourceMappingURL=888.381a3f23.chunk.js.map