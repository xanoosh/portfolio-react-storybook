import{j as m,w as V,r as q}from"./jsx-runtime-CMRc7bh6.js";import{r as o}from"./index-CsdIBAqE.js";import"./tiny-invariant-CopsF_GD.js";function A({title:e,titleId:t,...l},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},l),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),o.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const $=o.forwardRef(A),O=$,T=async(e,t)=>{const r=await(await fetch(t)).blob(),a=window.URL.createObjectURL(r),n=document.createElement("a");n.href=a,n.download=e,n.click()};function f({text:e,fileName:t,filePath:l,variant:r="primary",disabled:a=!1}){const n=R=>{switch(R){case"primary":return a===!0?"bg-custom-blue ring-custom-blue":"bg-custom-blue hover:bg-opacity-90 ring-custom-blue";case"pink":return a===!0?"bg-custom-pink ring-custom-pink":"bg-custom-pink hover:bg-opacity-90 ring-custom-pink";case"secondary":return a===!0?"bg-slate-500 ring-slate-500":"bg-slate-500 hover:bg-opacity-90 ring-slate-500"}},L=a?"cursor-not-allowed opacity-70":"cursor-pointer";return e.length===0?null:m.jsxs("button",{onClick:()=>T(t,l),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ${n(r)} ${L}`,disabled:a,children:[m.jsx(O,{className:"w-4 h-4"}),m.jsx("span",{children:e})]})}try{f.displayName="DownloadFileButton",f.__docgenInfo={description:"",displayName:"DownloadFileButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"pink"'},{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Portfolio/DownloadFileButton",component:f,parameters:{layout:"centered"},decorators:[V({results:q})],tags:["autodocs"]},s={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary"}},i={args:{text:"example pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink"}},d={args:{text:"example secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary"}},c={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary",disabled:!0}},u={args:{text:"example disabled pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink",disabled:!0}},p={args:{text:"example disabled secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary",disabled:!0}};var b,w,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var g,y,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink'
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,D,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary'
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var k,F,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var B,S,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true
  }
}`,...(_=(S=u.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var E,j,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const G=["DownloadFileButtonPrimary","DownloadFileButtonPink","DownloadFileButtonSecondary","DownloadFileButtonPrimaryDisabled","DownloadFileButtonPinkDisabled","DownloadFileButtonSecondaryDisabled"];export{i as DownloadFileButtonPink,u as DownloadFileButtonPinkDisabled,s as DownloadFileButtonPrimary,c as DownloadFileButtonPrimaryDisabled,d as DownloadFileButtonSecondary,p as DownloadFileButtonSecondaryDisabled,G as __namedExportsOrder,z as default};
