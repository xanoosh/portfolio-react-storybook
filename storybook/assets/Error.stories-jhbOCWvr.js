import{j as n}from"./iframe-BNcmbH1O.js";import"./preload-helper-PPVm8Dsz.js";function a({text:e}){return e?.length>0?n.jsx("div",{"aria-label":"error-container",className:"flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:n.jsxs("p",{"aria-label":"error-text",className:"text-rose-600 font-semibold",children:["Error: ",e]})}):null}a.__docgenInfo={description:"",methods:[],displayName:"Error",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,l=(e,s)=>{t(e).toBeInTheDocument(),t(e).toHaveClass("flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50");const r=c(e).getByLabelText("error-text");t(r).toBeInTheDocument(),t(r).toHaveClass("text-rose-600 font-semibold"),t(r).toHaveTextContent(`Error: ${s.text}`)},m={title:"Portfolio/Error",component:a,tags:["autodocs"]},o={args:{text:"example Error text"},play:async({canvas:e,args:s})=>{const r=e.getByLabelText("error-container");l(r,s)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example Error text'
  },
  play: async ({
    canvas,
    args
  }) => {
    const errorComponent = canvas.getByLabelText('error-container');
    errorTestAssertions(errorComponent, args);
  }
}`,...o.parameters?.docs?.source}}};const d=["ExampleError"];export{o as ExampleError,d as __namedExportsOrder,m as default};
