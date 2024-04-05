import{w as P,e as T}from"./index-DnFGxCq3.js";import{j as p}from"./jsx-runtime-BnIj46N_.js";import{r as l}from"./index-CsdIBAqE.js";function N({title:e,titleId:a,...n},t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),e?l.createElement("title",{id:a},e):null,l.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),l.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const S=l.forwardRef(N),U=S,j=async(e,a)=>{const t=await(await fetch(a)).blob(),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,r.click()};function E({text:e,fileName:a,filePath:n,variant:t="primary",disabled:o=!1}){const r=t==="primary"?o===!0?"bg-[#646cff] ":"bg-[#646cff] hover:bg-[#646cffdb] ":o===!0?"bg-slate-500 ":"bg-slate-500 hover:bg-slate-400 ";return e.length===0?null:p.jsxs("button",{onClick:()=>j(a,n),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${r}`,disabled:o,children:[p.jsx(U,{className:"w-4 h-4"}),p.jsx("span",{children:e})]})}E.__docgenInfo={description:"",methods:[],displayName:"DownloadFileButton",props:{text:{required:!0,tsType:{name:"string"},description:""},fileName:{required:!0,tsType:{name:"string"},description:""},filePath:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Portfolio/DownloadFileButton",component:E,parameters:{layout:"centered"},tags:["autodocs"]},m=async(e,a)=>{const t=P(e).getByText(a);await T(t).toBeInTheDocument()},s={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary"},play:({canvasElement:e})=>m(e,"example primary download button text")},d={args:{text:"example secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary"},play:({canvasElement:e})=>m(e,"example secondary download button text")},i={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary",disabled:!0},play:({canvasElement:e})=>m(e,"example disabled primary download button text")},c={args:{text:"example disabled secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary",disabled:!0},play:({canvasElement:e})=>m(e,"example disabled secondary download button text")};var u,f,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary'
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example primary download button text')
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,w,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary'
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example secondary download button text')
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example disabled primary download button text')
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,D,F;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example disabled secondary download button text')
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const V=["DownloadFileButtonPrimary","DownloadFileButtonSecondary","DownloadFileButtonPrimaryDisabled","DownloadFileButtonSecondaryDisabled"];export{s as DownloadFileButtonPrimary,i as DownloadFileButtonPrimaryDisabled,d as DownloadFileButtonSecondary,c as DownloadFileButtonSecondaryDisabled,V as __namedExportsOrder,A as default};
