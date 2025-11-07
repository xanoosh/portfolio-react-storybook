import{j as t}from"./jsx-runtime-u17CrQMm.js";import{m as h,B as j}from"./Badge-BZ9In7AB.js";import{B as f}from"./Button-BK9k2_Oo.js";import{T as w}from"./TooltipComponent-fESvdxVp.js";import"./iframe-Dqgj_s_R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DstlC3JF.js";import"./index-VjGBPuah.js";import"./floating-ui.react-dom-b_PnQ8_U.js";function c({title:i,description:l,badges:p,activeBadges:u,buttons:m,handleBadgeClick:g}){return t.jsxs(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[i?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:i}):null,l?t.jsx("p",{className:"font-normal text-slate-300",children:l}):null,p?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:p.map((e,d)=>t.jsx(w,{text:u?.includes(e)?"Click or press Enter key to remove this item from taglist":"Click or press Enter to add this item to taglist",children:t.jsx(j,{text:e,variant:u?.includes(e)?"pink":"main",handleClick:g?()=>g(e):()=>null})},d))}):null,m?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:m.map(({text:e,url:d,icon:b},x)=>t.jsx(f,{text:e,url:d,icon:b},x))}):null]})}try{c.displayName="ProjectCard",c.__docgenInfo={description:"",displayName:"ProjectCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!0,type:{name:"string[]"}},activeBadges:{defaultValue:null,description:"",name:"activeBadges",required:!1,type:{name:"string[]"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonProps[]"}},handleBadgeClick:{defaultValue:null,description:"",name:"handleBadgeClick",required:!1,type:{name:"((badgeName: string) => void)"}}}}}catch{}const q={title:"Portfolio/ProjectCard",component:c,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},r={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},n={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const E=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{r as ExampleProjectCard,s as ProjectCardWithoutBadges,n as ProjectCardWithoutButtons,o as ProjectCardWithoutDescription,a as ProjectCardWithoutTitle,E as __namedExportsOrder,q as default};
