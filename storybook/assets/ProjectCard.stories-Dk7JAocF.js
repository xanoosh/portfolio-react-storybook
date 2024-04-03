import{j as t}from"./jsx-runtime-BnIj46N_.js";import{B as q}from"./Badge-BO_T4Dt-.js";import{B as E}from"./Button-CEkA5tLD.js";import"./index-CsdIBAqE.js";function B({title:k,description:y,badges:W,buttons:N}){return t.jsxs("div",{className:"flex flex-col gap-4 backdrop-blur-sm max-w-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700",children:[t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-slate-900 dark:text-white",children:k}),t.jsx("p",{className:"font-normal text-slate-700 dark:text-slate-400",children:y}),t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:W.map((n,d)=>t.jsx(q,{text:n},d))}),t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:N.map(({text:n,url:d,icon:T},S)=>t.jsx(E,{text:n,url:d,icon:T},S))})]})}B.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ProjectButton"}],raw:"ProjectButton[]"},description:""}}};const I={title:"Portfolio/ProjectCard",component:B,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},e={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},r={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,b,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,h,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,P,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...(C=(P=s.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const O=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{e as ExampleProjectCard,o as ProjectCardWithoutBadges,s as ProjectCardWithoutButtons,a as ProjectCardWithoutDescription,r as ProjectCardWithoutTitle,O as __namedExportsOrder,I as default};
