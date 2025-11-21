import{j as s}from"./iframe-DUhEumfg.js";import"./preload-helper-PPVm8Dsz.js";function n({text:e}){return e?.length>0?s.jsxs("div",{role:"alert",className:"text-rose-600 font-semibold",children:["Error: ",e]}):null}n.__docgenInfo={description:"",methods:[],displayName:"Error",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const{expect:o}=__STORYBOOK_MODULE_TEST__,c=(e,t)=>{o(e).toBeInTheDocument(),o(e).toHaveClass("text-rose-600 font-semibold"),o(e).toHaveTextContent(`Error: ${t.text}`)},m={title:"Portfolio/Error",component:n,tags:["autodocs"],decorators:[e=>s.jsx("div",{className:"flex flex-col gap-4 backdrop-blur-sm px-12 py-6 rounded-lg shadow bg-slate-800/50 justify-center items-center",children:s.jsx(e,{})})]},r={args:{text:"example Error text"},play:async({canvas:e,args:t})=>{const a=e.getByRole("alert");c(a,t)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example Error text'
  },
  play: async ({
    canvas,
    args
  }) => {
    const errorComponent = canvas.getByRole('alert');
    errorTestAssertions(errorComponent, args);
  }
}`,...r.parameters?.docs?.source}}};const i=["ExampleError"];export{r as ExampleError,i as __namedExportsOrder,m as default};
