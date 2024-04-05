import{w as m,e as l}from"./index-DnFGxCq3.js";import{j as p}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";function o({text:e}){return p.jsxs("p",{children:["Error: ",e]})}o.__docgenInfo={description:"",methods:[],displayName:"Error",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'main' | 'pink'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'pink'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:""},handleRemove:{required:!1,tsType:{name:"union",raw:"undefined | (() => void)",elements:[{name:"undefined"},{name:"unknown"}]},description:""}}};const f={title:"Portfolio/Error",component:o,parameters:{layout:"centered"},tags:["autodocs"]},c=async(e,s)=>{const i=m(e).getByText(s);await l(i).toBeInTheDocument()},r={args:{text:"example Error text"},play:({canvasElement:e})=>c(e,"Error: example Error text")};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: 'example Error text'
  },
  play: ({
    canvasElement
  }) => errorUnitTests(canvasElement, 'Error: example Error text')
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const v=["ExampleError"];export{r as ExampleError,v as __namedExportsOrder,f as default};
