import{j as t,w as q,r as E}from"./jsx-runtime-DrvYMfA8.js";import{m as _,B as v}from"./Badge-BrYokXEw.js";import{B as A}from"./Button-C7ipuXly.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CsdIBAqE.js";function N({title:d,description:c,badges:p,buttons:l}){return t.jsxs(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[d?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:d}):null,c?t.jsx("p",{className:"font-normal text-slate-300",children:c}):null,p?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:p.map((n,i)=>t.jsx(v,{text:n},i))}):null,l?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:l.map(({text:n,url:i,icon:S},k)=>t.jsx(A,{text:n,url:i,icon:S},k))}):null]})}N.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""}}};const F={title:"Portfolio/ProjectCard",component:N,parameters:{layout:"centered",backgrounds:{default:"dark"}},decorators:[q({results:E})],tags:["autodocs"]},e={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},r={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};var u,m,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,x,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var h,f,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var P,C,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,W,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...(T=(W=s.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const G=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{e as ExampleProjectCard,o as ProjectCardWithoutBadges,s as ProjectCardWithoutButtons,a as ProjectCardWithoutDescription,r as ProjectCardWithoutTitle,G as __namedExportsOrder,F as default};
