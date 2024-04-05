import{f as O,w as j,e as c}from"./index-DnFGxCq3.js";import{B as q}from"./Badge-Dt2hSKKy.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const J={title:"Portfolio/Badge",component:q,parameters:{layout:"centered"},tags:["autodocs"]},a=async(e,g,C)=>{const d=j(e);await c(d.getByText(g)).toBeInTheDocument(),C&&await c(d.getByLabelText("Close")).toBeInTheDocument()},t={args:{text:"small main badge text",size:"sm"},play:({canvasElement:e})=>a(e,"small main badge text")},n={args:{text:"large main badge text",size:"lg"},play:({canvasElement:e})=>a(e,"large main badge text")},s={args:{text:"small pink badge text",variant:"pink",size:"sm"},play:({canvasElement:e})=>a(e,"small pink badge text")},r={args:{text:"large pink badge text",variant:"pink",size:"lg"},play:({canvasElement:e})=>a(e,"large pink badge text")},o={args:{text:"small main badge with remove button text",size:"sm",handleRemove:()=>{O()}},play:({args:e,canvasElement:g})=>a(g,"small main badge with remove button text",e.handleRemove)},m={args:{text:"large main badge with remove button text",size:"lg",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"large main badge with remove button text")},i={args:{text:"small pink badge with remove button text",variant:"pink",size:"sm",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"small pink badge with remove button text")},l={args:{text:"large pink badge with remove button text",variant:"pink",size:"lg",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"large pink badge with remove button text")};var p,v,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'small main badge text',
    size: 'sm'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small main badge text')
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'large main badge text',
    size: 'lg'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large main badge text')
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,B,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small pink badge text')
}`,...(w=(B=s.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var y,R,E;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large pink badge text')
}`,...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var z,S,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: () => {
      fn();
    }
  },
  play: ({
    args,
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small main badge with remove button text', args.handleRemove)
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,P,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large main badge with remove button text')
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var f,M,W;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small pink badge with remove button text')
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var D,I,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large pink badge with remove button text')
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const K=["SmallMainBadge","LargeMainBadge","SmallPinkBadge","LargePinkBadge","SmallMainBadgeWithRemoveButton","LargeMainBadgeWithRemoveButton","SmallPinkBadgeWithRemoveButton","LargePinkBadgeWithRemoveButton"];export{n as LargeMainBadge,m as LargeMainBadgeWithRemoveButton,r as LargePinkBadge,l as LargePinkBadgeWithRemoveButton,t as SmallMainBadge,o as SmallMainBadgeWithRemoveButton,s as SmallPinkBadge,i as SmallPinkBadgeWithRemoveButton,K as __namedExportsOrder,J as default};
