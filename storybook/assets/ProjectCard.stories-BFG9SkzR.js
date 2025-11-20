import{j as n}from"./iframe-BexdEf_e.js";import{B as C}from"./Badge-DgQhnA9Y.js";import{B as T}from"./Button-Bg6gHphx.js";import{m as B}from"./proxy-BDSafEAj.js";import"./preload-helper-PPVm8Dsz.js";function x({title:a,description:t,badges:e,activeBadges:g,buttons:b,handleBadgeClick:j}){return n.jsxs(B.div,{"aria-label":"project-card",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[a?n.jsx("h3",{"aria-label":"project-card-title",className:"text-2xl font-bold tracking-tight text-white",children:a}):null,t?n.jsx("p",{"aria-label":"project-card-description",className:"font-normal text-slate-300",children:t}):null,e?n.jsx("div",{"aria-label":"project-card-skills",className:"flex flex-row gap-2 flex-wrap",children:e.map((o,m)=>n.jsx(C,{text:o,variant:g?.includes(o)?"pink":"main",handleClick:j?()=>j(o):()=>null},m))}):null,b?n.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:b.map(({text:o,url:m,icon:y},h)=>n.jsx(T,{text:o,url:m,icon:y,variant:o==="Code"?"secondary":"primary"},h))}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},activeBadges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},handleBadgeClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(badgeName: string) => void",signature:{arguments:[{type:{name:"string"},name:"badgeName"}],return:{name:"void"}}},description:""}}};const{expect:r,within:s}=__STORYBOOK_MODULE_TEST__,A={title:"Portfolio/ProjectCard",component:x,tags:["autodocs"]},c=(a,t)=>{if(r(a).toBeInTheDocument(),t?.title){const e=s(a).getByLabelText("project-card-title");r(e).toBeInTheDocument(),r(e.textContent).toBe(t.title)}if(t?.description){const e=s(a).getByLabelText("project-card-description");r(e).toBeInTheDocument(),r(e.textContent).toBe(t.description)}if(t?.badges&&t?.badges.length>0){const e=s(a).getByLabelText("project-card-skills");r(e).toBeInTheDocument();const g=s(e).getAllByRole("badge");r(g).toHaveLength(t.badges.length)}if(t?.buttons&&t?.buttons.length>0){const e=s(a).getAllByRole("button");r(e).toHaveLength(t.buttons.length)}},i={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:a,args:t})=>{const e=a.getByLabelText("project-card");c(e,t)}},d={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:a,args:t})=>{const e=a.getByLabelText("project-card");c(e,t)}},p={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]},play:async({canvas:a,args:t})=>{const e=a.getByLabelText("project-card");c(e,t)}},l={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]},play:async({canvas:a,args:t})=>{const e=a.getByLabelText("project-card");c(e,t)}},u={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]},play:async({canvas:a,args:t})=>{const e=a.getByLabelText("project-card");c(e,t)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{i as ExampleProjectCard,l as ProjectCardWithoutBadges,u as ProjectCardWithoutButtons,p as ProjectCardWithoutDescription,d as ProjectCardWithoutTitle,_ as __namedExportsOrder,A as default};
