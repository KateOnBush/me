"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[7360],{7360:(t,s,i)=>{i.d(s,{EmittersCircleShapeGenerator:()=>r});var e=i(3532),h=i(4409);const n=.25,a=2*Math.PI;class o extends e.B{constructor(t,s,i,e){super(t,s,i,e)}async init(){}randomPosition(){const t=this.size,s=this.fill,i=this.position,[e,o]=[.5*t.width,.5*t.height],r=((t,s)=>{const i=(0,h.G0)()*n,e=Math.atan(s/t*Math.tan(a*i)),o=(0,h.G0)();return o<n?e:o<.5?Math.PI-e:o<.75?Math.PI+e:-e})(e,o),c=(u=r,(l=e)*(p=o)/Math.sqrt((p*Math.cos(u))**2+(l*Math.sin(u))**2)),M=s?c*Math.sqrt((0,h.G0)()):c;var l,p,u;return{position:{x:i.x+M*Math.cos(r),y:i.y+M*Math.sin(r)}}}}class r{generate(t,s,i,e){return new o(t,s,i,e)}}},3532:(t,s,i)=>{i.d(s,{B:()=>e});class e{constructor(t,s,i,e){this.position=t,this.size=s,this.fill=i,this.options=e}resize(t,s){this.position=t,this.size=s}}}}]);
//# sourceMappingURL=7360.2863fe96.chunk.js.map