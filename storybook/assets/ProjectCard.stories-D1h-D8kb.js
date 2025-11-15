import{j as a}from"./iframe-TJKnYeUA.js";import{B as C}from"./Badge-yXh07hiS.js";import{B as T}from"./Button-Dn9ZIjAp.js";import{T as B}from"./TooltipComponent-CwuQKY_p.js";import{m as f}from"./proxy-DSsJ0p75.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcO9DcuU.js";import"./index-DEg3GvMT.js";import"./floating-ui.react-dom-CtNXTNON.js";function x({title:r,description:t,badges:e,activeBadges:i,buttons:b,handleBadgeClick:j}){return a.jsxs(f.div,{"aria-label":"project-card",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[r?a.jsx("h3",{"aria-label":"project-card-title",className:"text-2xl font-bold tracking-tight text-white",children:r}):null,t?a.jsx("p",{"aria-label":"project-card-description",className:"font-normal text-slate-300",children:t}):null,e?a.jsx("div",{"aria-label":"project-card-skills",className:"flex flex-row gap-2 flex-wrap",children:e.map((o,m)=>a.jsx(B,{text:i?.includes(o)?"Click or press Enter key to remove this item from taglist":"Click or press Enter to add this item to taglist",children:a.jsx(C,{text:o,variant:i?.includes(o)?"pink":"main",handleClick:j?()=>j(o):()=>null})},m))}):null,b?a.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:b.map(({text:o,url:m,icon:y},h)=>a.jsx(T,{text:o,url:m,icon:y,variant:o==="Code"?"secondary":"primary"},h))}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},activeBadges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},handleBadgeClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(badgeName: string) => void",signature:{arguments:[{type:{name:"string"},name:"badgeName"}],return:{name:"void"}}},description:""}}};const{expect:n,within:s}=__STORYBOOK_MODULE_TEST__,W={title:"Portfolio/ProjectCard",component:x,tags:["autodocs"]},c=(r,t)=>{if(n(r).toBeInTheDocument(),t?.title){const e=s(r).getByLabelText("project-card-title");n(e).toBeInTheDocument(),n(e.textContent).toBe(t.title)}if(t?.description){const e=s(r).getByLabelText("project-card-description");n(e).toBeInTheDocument(),n(e.textContent).toBe(t.description)}if(t?.badges&&t?.badges.length>0){const e=s(r).getByLabelText("project-card-skills");n(e).toBeInTheDocument();const i=s(e).getAllByRole("badge");n(i).toHaveLength(t.badges.length)}if(t?.buttons&&t?.buttons.length>0){const e=s(r).getAllByRole("button");n(e).toHaveLength(t.buttons.length)}},d={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:r,args:t})=>{const e=r.getByLabelText("project-card");c(e,t)}},p={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:r,args:t})=>{const e=r.getByLabelText("project-card");c(e,t)}},l={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:r,args:t})=>{const e=r.getByLabelText("project-card");c(e,t)}},u={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]},play:async({canvas:r,args:t})=>{const e=r.getByLabelText("project-card");c(e,t)}},g={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]},play:async({canvas:r,args:t})=>{const e=r.getByLabelText("project-card");c(e,t)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  },
  play: async ({
    canvas,
    args
  }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  },
  play: async ({
    canvas,
    args
  }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  },
  play: async ({
    canvas,
    args
  }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  },
  play: async ({
    canvas,
    args
  }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  },
  play: async ({
    canvas,
    args
  }) => {
    const projectCard = canvas.getByLabelText('project-card');
    projectCardTestAssertions(projectCard, args);
  }
}`,...g.parameters?.docs?.source}}};const D=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{d as ExampleProjectCard,u as ProjectCardWithoutBadges,g as ProjectCardWithoutButtons,l as ProjectCardWithoutDescription,p as ProjectCardWithoutTitle,D as __namedExportsOrder,W as default};
