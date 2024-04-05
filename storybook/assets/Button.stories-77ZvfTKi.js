import{w as q,e as z}from"./index-DnFGxCq3.js";import{B as A}from"./Button-B9t1e12Z.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const L={title:"Portfolio/Button",component:A,parameters:{layout:"centered"},tags:["autodocs"]},t=async(e,j)=>{const k=q(e).getByText(j);await z(k).toBeInTheDocument()},a={args:{text:"example primary button text",url:"#",variant:"primary"},play:({canvasElement:e})=>t(e,"example primary button text")},n={args:{text:"example secondary button text",url:"#",variant:"secondary"},play:({canvasElement:e})=>t(e,"example secondary button text")},r={args:{text:"example disabled primary button text",url:"#",variant:"primary",disabled:!0},play:({canvasElement:e})=>t(e,"example disabled primary button text")},o={args:{text:"example disabled secondary button text",url:"#",variant:"secondary",disabled:!0},play:({canvasElement:e})=>t(e,"example disabled secondary button text")},s={args:{text:"example primary button with web icon",url:"#",variant:"primary",icon:"webIcon"},play:({canvasElement:e})=>t(e,"example primary button with web icon")},c={args:{text:"example primary button with code icon",url:"#",variant:"primary",icon:"codeIcon"},play:({canvasElement:e})=>t(e,"example primary button with code icon")},i={args:{text:"example secondary button with web icon",url:"#",variant:"secondary",icon:"webIcon"},play:({canvasElement:e})=>t(e,"example secondary button with web icon")},m={args:{text:"example secondary button with code icon",url:"#",variant:"secondary",icon:"codeIcon"},play:({canvasElement:e})=>t(e,"example secondary button with code icon")};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example primary button text')
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,y,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example secondary button text')
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,v,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example disabled primary button text')
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var g,B,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example disabled secondary button text')
}`,...(h=(B=o.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var E,I,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example primary button with web icon')
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,P,U;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with code icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example primary button with code icon')
}`,...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var D,f,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example secondary button with web icon')
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var W,_,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with code icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example secondary button with code icon')
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const M=["ButtonPrimary","ButtonSecondary","DisabledButtonPrimary","DisabledButtonSecondary","ButtonPrimaryWebIcon","ButtonPrimaryCodeIcon","ButtonSecondaryWebIcon","ButtonSecondaryCodeIcon"];export{a as ButtonPrimary,c as ButtonPrimaryCodeIcon,s as ButtonPrimaryWebIcon,n as ButtonSecondary,m as ButtonSecondaryCodeIcon,i as ButtonSecondaryWebIcon,r as DisabledButtonPrimary,o as DisabledButtonSecondary,M as __namedExportsOrder,L as default};
