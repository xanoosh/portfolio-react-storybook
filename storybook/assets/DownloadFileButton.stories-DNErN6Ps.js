import{r,j as c}from"./iframe-B5vKKn3F.js";import"./preload-helper-PPVm8Dsz.js";function f({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),r.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const m=r.forwardRef(f),b=async(e,t)=>{const o=await(await fetch(t)).blob(),d=window.URL.createObjectURL(o),s=document.createElement("a");s.href=d,s.download=e,s.click()};function u({text:e,fileName:t,filePath:n,disabled:o=!1}){const d=o===!0?"bg-sky-700 ring-sky-700":"bg-sky-700 ring-sky-700 hover:bg-pink-600 hover:ring-pink-600",s=o?"cursor-not-allowed opacity-70":"cursor-pointer";return e.length===0?null:c.jsxs("button",{onClick:()=>b(t,n),className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center transition-bg duration-300 ease-in-out focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ${d} ${s}`,disabled:o,children:[c.jsx(m,{"aria-label":"icon","aria-hidden":!0,className:"w-4 h-4"}),c.jsx("span",{children:e})]})}u.__docgenInfo={description:"",methods:[],displayName:"DownloadFileButton",props:{text:{required:!0,tsType:{name:"string"},description:""},fileName:{required:!0,tsType:{name:"string"},description:""},filePath:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{expect:a,within:g}=__STORYBOOK_MODULE_TEST__,h={title:"Portfolio/DownloadFileButton",component:u,tags:["autodocs"]},p=(e,t)=>{a(e).toBeInTheDocument(),a(e.textContent).toBe(t.text),t.disabled?a(e).toBeDisabled():a(e).toBeEnabled();const n=g(e).getByLabelText("icon");a(n).toBeInTheDocument(),a(n).toHaveAttribute("aria-hidden","true")},l={args:{text:"example primary download button text",fileName:"file.pdf",filePath:"/"},play:async({canvas:e,args:t})=>{const n=e.getByRole("button");p(n,t)}},i={args:{text:"example disabled primary download button text",fileName:"file.pdf",filePath:"/",disabled:!0},play:async({canvas:e,args:t})=>{const n=e.getByRole("button");p(n,t)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example primary download button text',
    fileName: 'file.pdf',
    filePath: '/'
  },
  play: async ({
    canvas,
    args
  }) => {
    const downloadBtn = canvas.getByRole('button');
    downloadButtonAssertions(downloadBtn, args);
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary download button text',
    fileName: 'file.pdf',
    filePath: '/',
    disabled: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const downloadBtn = canvas.getByRole('button');
    downloadButtonAssertions(downloadBtn, args);
  }
}`,...i.parameters?.docs?.source}}};const B=["DownloadFileButtonEnabled","DownloadFileButtonDisabled"];export{i as DownloadFileButtonDisabled,l as DownloadFileButtonEnabled,B as __namedExportsOrder,h as default};
