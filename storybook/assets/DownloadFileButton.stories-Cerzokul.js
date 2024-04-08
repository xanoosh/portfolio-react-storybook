import{j as m,w as q,r as A}from"./jsx-runtime-B9LelQ6Z.js";import{r as o}from"./index-CsdIBAqE.js";import"./tiny-invariant-CopsF_GD.js";function _({title:e,titleId:t,...s},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},s),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),o.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const $=o.forwardRef(_),O=$,U=async(e,t)=>{const r=await(await fetch(t)).blob(),a=window.URL.createObjectURL(r),n=document.createElement("a");n.href=a,n.download=e,n.click()};function C({text:e,fileName:t,filePath:s,variant:r="primary",disabled:a=!1}){const n=R=>{switch(R){case"primary":return a===!0?"bg-custom-blue ring-custom-blue":"bg-custom-blue hover:bg-opacity-90 ring-custom-blue";case"pink":return a===!0?"bg-custom-pink ring-custom-pink":"bg-custom-pink hover:bg-opacity-90 ring-custom-pink";case"secondary":return a===!0?"bg-slate-500 ring-slate-500":"bg-slate-500 hover:bg-opacity-90 ring-slate-500"}},L=a?"cursor-not-allowed opacity-70":"cursor-pointer";return e.length===0?null:m.jsxs("button",{onClick:()=>U(t,s),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ${n(r)} ${L}`,disabled:a,children:[m.jsx(O,{className:"w-4 h-4"}),m.jsx("span",{children:e})]})}C.__docgenInfo={description:"",methods:[],displayName:"DownloadFileButton",props:{text:{required:!0,tsType:{name:"string"},description:""},fileName:{required:!0,tsType:{name:"string"},description:""},filePath:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'pink' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Portfolio/DownloadFileButton",component:C,parameters:{layout:"centered"},decorators:[q({results:A})],tags:["autodocs"]},i={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary"}},l={args:{text:"example pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink"}},d={args:{text:"example secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary"}},c={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary",disabled:!0}},p={args:{text:"example disabled pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink",disabled:!0}},u={args:{text:"example disabled secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary",disabled:!0}};var f,w,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary'
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,g,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink'
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,D;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary'
  }
}`,...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var P,k,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var B,N,S;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true
  }
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var E,T,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true
  }
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const G=["DownloadFileButtonPrimary","DownloadFileButtonPink","DownloadFileButtonSecondary","DownloadFileButtonPrimaryDisabled","DownloadFileButtonPinkDisabled","DownloadFileButtonSecondaryDisabled"];export{l as DownloadFileButtonPink,p as DownloadFileButtonPinkDisabled,i as DownloadFileButtonPrimary,c as DownloadFileButtonPrimaryDisabled,d as DownloadFileButtonSecondary,u as DownloadFileButtonSecondaryDisabled,G as __namedExportsOrder,z as default};
