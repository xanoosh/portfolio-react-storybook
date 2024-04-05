import{w as A,e as C}from"./index-DnFGxCq3.js";import{j as f}from"./jsx-runtime-BnIj46N_.js";import{r as s}from"./index-CsdIBAqE.js";function _({title:e,titleId:a,...r},t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},r),e?s.createElement("title",{id:a},e):null,s.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),s.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const I=s.forwardRef(_),O=I,V=async(e,a)=>{const t=await(await fetch(a)).blob(),n=window.URL.createObjectURL(t),l=document.createElement("a");l.href=n,l.download=e,l.click()};function L({text:e,fileName:a,filePath:r,variant:t="primary",disabled:n=!1}){const l=q=>{switch(q){case"primary":return n===!0?"bg-custom-blue":"bg-custom-blue hover:bg-opacity-90";case"pink":return n===!0?"bg-custom-pink":"bg-custom-pink hover:bg-opacity-90";case"secondary":return n===!0?"bg-slate-500":"bg-slate-500 hover:bg-opacity-90"}},R=n?"cursor-not-allowed opacity-70":"cursor-pointer";return e.length===0?null:f.jsxs("button",{onClick:()=>V(a,r),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${l(t)} ${R}`,disabled:n,children:[f.jsx(O,{className:"w-4 h-4"}),f.jsx("span",{children:e})]})}L.__docgenInfo={description:"",methods:[],displayName:"DownloadFileButton",props:{text:{required:!0,tsType:{name:"string"},description:""},fileName:{required:!0,tsType:{name:"string"},description:""},filePath:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'pink' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Portfolio/DownloadFileButton",component:L,parameters:{layout:"centered"},tags:["autodocs"]},o=async(e,a)=>{const t=A(e).getByText(a);await C(t).toBeInTheDocument()},i={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary"},play:({canvasElement:e})=>o(e,"example primary download button text")},d={args:{text:"example pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink"},play:({canvasElement:e})=>o(e,"example primary download button text")},p={args:{text:"example secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary"},play:({canvasElement:e})=>o(e,"example secondary download button text")},c={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",variant:"primary",disabled:!0},play:({canvasElement:e})=>o(e,"example disabled primary download button text")},m={args:{text:"example disabled pink download button text",fileName:"file.pdf",filePath:"/",variant:"pink",disabled:!0},play:({canvasElement:e})=>o(e,"example disabled pink download button text")},u={args:{text:"example disabled secondary download button text",fileName:"file.pdf",filePath:"/",variant:"secondary",disabled:!0},play:({canvasElement:e})=>o(e,"example disabled secondary download button text")};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'primary'
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example primary download button text')
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,v,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'example pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink'
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example primary download button text')
}`,...(g=(v=d.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,B,D;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'example secondary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'secondary'
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example secondary download button text')
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,P,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var E,N,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'example disabled pink download button text',
    fileName: 'file.pdf',
    filePath: '/',
    variant: 'pink',
    disabled: true
  },
  play: ({
    canvasElement
  }) => downloadFileButtonUnitTests(canvasElement, 'example disabled pink download button text')
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var S,U,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(U=u.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const G=["DownloadFileButtonPrimary","DownloadFileButtonPink","DownloadFileButtonSecondary","DownloadFileButtonPrimaryDisabled","DownloadFileButtonPinkDisabled","DownloadFileButtonSecondaryDisabled"];export{d as DownloadFileButtonPink,m as DownloadFileButtonPinkDisabled,i as DownloadFileButtonPrimary,c as DownloadFileButtonPrimaryDisabled,p as DownloadFileButtonSecondary,u as DownloadFileButtonSecondaryDisabled,G as __namedExportsOrder,z as default};
