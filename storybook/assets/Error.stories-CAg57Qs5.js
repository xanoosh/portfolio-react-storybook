import{w as m,e as l}from"./index-DnFGxCq3.js";import{j as c}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";function s({text:e}){return c.jsxs("p",{children:["Error: ",e]})}s.__docgenInfo={description:"",methods:[],displayName:"Error",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'main' | 'success'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'success'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:""},handleRemove:{required:!1,tsType:{name:"union",raw:"undefined | (() => void)",elements:[{name:"undefined"},{name:"unknown"}]},description:""}}};const f={title:"Portfolio/Error",component:s,parameters:{layout:"centered"},tags:["autodocs"]},p=async(e,o)=>{const i=m(e).getByText(o);await l(i).toBeInTheDocument()},r={args:{text:"example Error text"},play:({canvasElement:e})=>p(e,"Error: example Error text")};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: 'example Error text'
  },
  play: ({
    canvasElement
  }) => errorUnitTests(canvasElement, 'Error: example Error text')
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const v=["ExampleError"];export{r as ExampleError,v as __namedExportsOrder,f as default};
