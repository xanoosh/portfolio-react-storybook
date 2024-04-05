import{j as t}from"./jsx-runtime-BnIj46N_.js";import{m as q,B as E}from"./Badge-Bp3FMCAN.js";import{B as _}from"./Button-DQQHWeRp.js";import"./index-CsdIBAqE.js";function T({title:d,description:c,badges:p,buttons:u}){return t.jsxs(q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm max-w-sm p-6 border rounded-lg shadow bg-slate-800/50 border-slate-700",children:[d?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:d}):null,c?t.jsx("p",{className:"font-normal text-slate-300",children:c}):null,p?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:p.map((n,i)=>t.jsx(E,{text:n},i))}):null,u?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:u.map(({text:n,url:i,icon:S},k)=>t.jsx(_,{text:n,url:i,icon:S},k))}):null]})}T.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""}}};const O={title:"Portfolio/ProjectCard",component:T,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},e={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},r={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},a={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var h,w,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var P,C,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,W,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...(N=(W=s.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const R=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{e as ExampleProjectCard,o as ProjectCardWithoutBadges,s as ProjectCardWithoutButtons,a as ProjectCardWithoutDescription,r as ProjectCardWithoutTitle,R as __namedExportsOrder,O as default};
