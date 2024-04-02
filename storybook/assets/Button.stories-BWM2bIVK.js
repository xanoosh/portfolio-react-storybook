import{w as k,e as q}from"./index-DnFGxCq3.js";import{B as z}from"./Button-CEkA5tLD.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const L={title:"Portfolio/Button",component:z,parameters:{layout:"centered"},tags:["autodocs"]},A=async(i,O)=>{const j=k(i).getByText(O);await q(j).toBeInTheDocument()},e={args:{text:"example primary button text",url:"#",variant:"primary"},play:({canvasElement:i})=>A(i,"example primary button text")},r={args:{text:"example secondary button text",url:"#",variant:"secondary"}},t={args:{text:"example disabled primary button text",url:"#",variant:"primary",disabled:!0}},a={args:{text:"example disabled secondary button text",url:"#",variant:"secondary",disabled:!0}},n={args:{text:"example primary button with web icon",url:"#",variant:"primary",icon:"webIcon"}},o={args:{text:"example primary button with web icon",url:"#",variant:"primary",icon:"codeIcon"}},s={args:{text:"example secondary button with web icon",url:"#",variant:"secondary",icon:"webIcon"}},c={args:{text:"example secondary button with web icon",url:"#",variant:"secondary",icon:"codeIcon"}};var m,u,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary'
  },
  play: ({
    canvasElement
  }) => buttonUnitTests(canvasElement, 'example primary button text')
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,l,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary'
  }
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var b,x,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,B,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true
  }
}`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var I,S,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon'
  }
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var P,D,f;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon'
  }
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var C,T,W;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon'
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var E,U,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon'
  }
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const M=["ButtonPrimary","ButtonSecondary","DisabledButtonPrimary","DisabledButtonSecondary","ButtonPrimaryWebIcon","ButtonPrimaryCodeIcon","ButtonSecondaryWebIcon","ButtonSecondaryCodeIcon"];export{e as ButtonPrimary,o as ButtonPrimaryCodeIcon,n as ButtonPrimaryWebIcon,r as ButtonSecondary,c as ButtonSecondaryCodeIcon,s as ButtonSecondaryWebIcon,t as DisabledButtonPrimary,a as DisabledButtonSecondary,M as __namedExportsOrder,L as default};
