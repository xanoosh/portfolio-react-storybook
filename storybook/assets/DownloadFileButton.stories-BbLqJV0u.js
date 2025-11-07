import{j as m}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-Dqgj_s_R.js";import"./preload-helper-PPVm8Dsz.js";function g({title:e,titleId:t,...l},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},l),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),o.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const w=o.forwardRef(g),y=async(e,t)=>{const r=await(await fetch(t)).blob(),a=window.URL.createObjectURL(r),n=document.createElement("a");n.href=a,n.download=e,n.click()};function f({text:e,fileName:t,filePath:l,variant:r="primary",disabled:a=!1}){const n=x=>{switch(x){case"primary":return a===!0?"bg-custom-blue ring-custom-blue":"bg-custom-blue hover:bg-opacity-90 ring-custom-blue";case"pink":return a===!0?"bg-custom-pink ring-custom-pink":"bg-custom-pink hover:bg-opacity-90 ring-custom-pink";case"secondary":return a===!0?"bg-slate-500 ring-slate-500":"bg-slate-500 hover:bg-opacity-90 ring-slate-500"}},b=a?"cursor-not-allowed opacity-70":"cursor-pointer";return e.length===0?null:m.jsxs("button",{onClick:()=>y(t,l),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ${n(r)} ${b}`,disabled:a,children:[m.jsx(w,{className:"w-4 h-4"}),m.jsx("span",{children:e})]})}try{f.displayName="DownloadFileButton",f.__docgenInfo={description:"",displayName:"DownloadFileButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"pink"'},{value:'"secondary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Portfolio/DownloadFileButton",component:f,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary"}},s={args:{text:"example pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink"}},d={args:{text:"example secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary"}},c={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary",disabled:!0}},u={args:{text:"example disabled pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink",disabled:!0}},p={args:{text:"example disabled secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary",disabled:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};const F=["DownloadFileButtonPrimary","DownloadFileButtonPink","DownloadFileButtonSecondary","DownloadFileButtonPrimaryDisabled","DownloadFileButtonPinkDisabled","DownloadFileButtonSecondaryDisabled"];export{s as DownloadFileButtonPink,u as DownloadFileButtonPinkDisabled,i as DownloadFileButtonPrimary,c as DownloadFileButtonPrimaryDisabled,d as DownloadFileButtonSecondary,p as DownloadFileButtonSecondaryDisabled,F as __namedExportsOrder,k as default};
