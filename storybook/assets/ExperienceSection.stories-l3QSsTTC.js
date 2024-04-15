import{j as e,w as h,r as g}from"./jsx-runtime-DrvYMfA8.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CsdIBAqE.js";function o({title:s,text:i,list:l}){return e.jsxs("div",{className:"flex flex-col gap-4 text-white",children:[s.length>0?e.jsx("h1",{className:"text-2xl font-semibold",children:s}):null,i.length>0?e.jsx("p",{children:i}):null,l.length>0?e.jsx("ol",{reversed:!0,className:"list-decimal pl-8",children:l.map(({title:m,date:c,responsibilities:r},x)=>e.jsxs("li",{className:"marker:text-3xl mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:m}),e.jsx("h3",{className:"font-semibold",children:c}),r.length>0?e.jsx("ul",{className:"list-square pl-2",children:r.map((d,u)=>e.jsx("li",{className:"marker:text-base mb-2",children:d},u))}):null]},x))}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"ExperienceSection",props:{title:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},list:{required:!1,tsType:{name:"Array",elements:[{name:"ExperienceListElement"}],raw:"ExperienceListElement[]"},description:""}}};const y={title:"Portfolio/ExperienceSection",component:o,parameters:{layout:"centered",backgrounds:{default:"dark"}},decorators:[h({results:g})],tags:["autodocs"]},t={args:{title:"example title",text:"example ExperienceSection text",list:[{title:"example list title",date:"example date string",responsibilities:["example responsibility 1","example responsibility 2","example responsibility 3"]}]}};var n,a,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    text: 'example ExperienceSection text',
    list: [{
      title: 'example list title',
      date: 'example date string',
      responsibilities: ['example responsibility 1', 'example responsibility 2', 'example responsibility 3']
    }]
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const j=["ExampleExperienceSection"];export{t as ExampleExperienceSection,j as __namedExportsOrder,y as default};
