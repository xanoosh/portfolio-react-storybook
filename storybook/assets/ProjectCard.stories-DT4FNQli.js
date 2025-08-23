import{j as t,w as T,r as B}from"./jsx-runtime-3DwAYmJI.js";import{m as D,B as I}from"./Badge-2VD_32wh.js";import{B as O}from"./Button-CdUwAqcR.js";import{T as R}from"./TooltipComponent-D4UqkZBl.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CsdIBAqE.js";import"./index-D1uLUWWR.js";import"./index-CpXDz0sX.js";function c({title:d,description:p,badges:u,activeBadges:e,buttons:m,handleBadgeClick:g}){return t.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50",children:[d?t.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:d}):null,p?t.jsx("p",{className:"font-normal text-slate-300",children:p}):null,u?t.jsx("div",{className:"flex flex-row gap-2 flex-wrap",children:u.map((r,l)=>t.jsx(R,{text:e!=null&&e.includes(r)?"Click or press Enter key to remove this item from taglist":"Click or press Enter to add this item to taglist",children:t.jsx(I,{text:r,variant:e!=null&&e.includes(r)?"pink":"main",handleClick:g?()=>g(r):()=>null})},l))}):null,m?t.jsx("div",{className:"flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4",children:m.map(({text:r,url:l,icon:V},S)=>t.jsx(O,{text:r,url:l,icon:V},S))}):null]})}try{c.displayName="ProjectCard",c.__docgenInfo={description:"",displayName:"ProjectCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!0,type:{name:"string[]"}},activeBadges:{defaultValue:null,description:"",name:"activeBadges",required:!1,type:{name:"string[]"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonProps[]"}},handleBadgeClick:{defaultValue:null,description:"",name:"handleBadgeClick",required:!1,type:{name:"((badgeName: string) => void)"}}}}}catch{}const M={title:"Portfolio/ProjectCard",component:c,parameters:{layout:"centered",backgrounds:{default:"dark"}},decorators:[T({results:B})],tags:["autodocs"]},a={args:{title:"example title",description:"example project card description",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},o={args:{title:"",description:"project card without title",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},s={args:{title:"project card without description",description:"",badges:["badge1","badge2"],buttons:[{text:"example button",url:""}]}},n={args:{title:"project card without badges",description:"this is project card without badges",badges:[],buttons:[{text:"example button",url:""}]}},i={args:{title:"project card without buttons",description:"this is project card without buttons",badges:["badge1","badge2"],buttons:[]}};var b,x,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'example title',
    description: 'example project card description',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'project card without title',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,P,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'project card without description',
    description: '',
    badges: ['badge1', 'badge2'],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var k,_,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'project card without badges',
    description: 'this is project card without badges',
    badges: [],
    buttons: [{
      text: 'example button',
      url: ''
    }]
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var W,q,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'project card without buttons',
    description: 'this is project card without buttons',
    badges: ['badge1', 'badge2'],
    buttons: []
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Q=["ExampleProjectCard","ProjectCardWithoutTitle","ProjectCardWithoutDescription","ProjectCardWithoutBadges","ProjectCardWithoutButtons"];export{a as ExampleProjectCard,n as ProjectCardWithoutBadges,i as ProjectCardWithoutButtons,s as ProjectCardWithoutDescription,o as ProjectCardWithoutTitle,Q as __namedExportsOrder,M as default};
