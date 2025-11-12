import{j as a}from"./jsx-runtime-u17CrQMm.js";function s({text:e}){return a.jsxs("div",{role:"alert",className:"text-rose-600",children:["Error: ",e]})}s.__docgenInfo={description:"",methods:[],displayName:"Error",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const{expect:t}=__STORYBOOK_MODULE_TEST__,c=(e,r)=>{t(e).toBeInTheDocument(),t(e).toHaveClass("text-rose-600"),r.text.length>0?t(e.textContent).toBe(`Error: ${r.text}`):t(e).not.toHaveTextContent(`Error: ${r.text}`)},l={title:"Portfolio/Error",component:s,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{text:"example Error text"},play:async({canvas:e,args:r})=>{const n=await e.findByRole("alert");c(n,r)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example Error text'
  },
  play: async ({
    canvas,
    args
  }) => {
    const errorComponent = await canvas.findByRole('alert');
    errorTestAssertions(errorComponent, args);
  }
}`,...o.parameters?.docs?.source}}};const p=["ExampleError"];export{o as ExampleError,p as __namedExportsOrder,l as default};
