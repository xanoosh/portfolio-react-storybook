import{j as t,w as _,r as v}from"./jsx-runtime-BchKLOxq.js";import{m as A,B as D}from"./Badge-BW-gNpTz.js";import{B as I}from"./Button-Dk32a1-V.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CsdIBAqE.js";function q({title:c,description:p,badges:l,activeBadges:i,buttons:u,handleBadgeClick:m}){return t.jsxs(A.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[c?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:c}):null,p?t.jsx("p",{className:"font-normal text-slate-300",children:p}):null,l?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:l.map((e,d)=>t.jsx(D,{text:e,variant:i!=null&&i.includes(e)?"pink":"main",handleClick:m?()=>m(e):()=>null},d))}):null,u?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:u.map(({text:e,url:d,icon:S},E)=>t.jsx(I,{text:e,url:d,icon:S},E))}):null]})}q.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},activeBadges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},handleBadgeClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(badgeName: string) => void",signature:{arguments:[{type:{name:"string"},name:"badgeName"}],return:{name:"void"}}},description:""}}};const H={title:"Portfolio/ProjectCard",component:q,parameters:{layout:"centered",backgrounds:{default:"dark"}},decorators:[_({results:v})],tags:["autodocs"]},r={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},n={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};var g,b,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,j,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,y,P;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var C,T,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var W,B,k;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...(k=(B=n.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const J=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{r as ExampleProjectCard,o as ProjectCardWithoutBadges,n as ProjectCardWithoutButtons,s as ProjectCardWithoutDescription,a as ProjectCardWithoutTitle,J as __namedExportsOrder,H as default};
