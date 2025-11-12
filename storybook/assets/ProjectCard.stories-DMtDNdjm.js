import{j as t}from"./jsx-runtime-u17CrQMm.js";import{B as h}from"./Badge-CF6qT1Yy.js";import{B as j}from"./Button-C6kxfyDy.js";import{T as f}from"./TooltipComponent-CUlPndMh.js";import{m as w}from"./proxy-5K3fY4FM.js";import"./iframe-DRxYy-bc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXeWM2jz.js";import"./index-CPNP41RN.js";import"./floating-ui.react-dom-B59u3z2S.js";function g({title:d,description:c,badges:p,activeBadges:l,buttons:u,handleBadgeClick:m}){return t.jsxs(w.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[d?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:d}):null,c?t.jsx("p",{className:"font-normal text-slate-300",children:c}):null,p?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:p.map((e,i)=>t.jsx(f,{text:l?.includes(e)?"Click or press Enter key to remove this item from taglist":"Click or press Enter to add this item to taglist",children:t.jsx(h,{text:e,variant:l?.includes(e)?"pink":"main",handleClick:m?()=>m(e):()=>null})},i))}):null,u?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:u.map(({text:e,url:i,icon:b},x)=>t.jsx(j,{text:e,url:i,icon:b,variant:e==="Code"?"secondary":"primary"},x))}):null]})}g.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},activeBadges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},handleBadgeClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(badgeName: string) => void",signature:{arguments:[{type:{name:"string"},name:"badgeName"}],return:{name:"void"}}},description:""}}};const E={title:"Portfolio/ProjectCard",component:g,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},r={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},n={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...n.parameters?.docs?.source}}};const S=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{r as ExampleProjectCard,s as ProjectCardWithoutBadges,n as ProjectCardWithoutButtons,o as ProjectCardWithoutDescription,a as ProjectCardWithoutTitle,S as __namedExportsOrder,E as default};
