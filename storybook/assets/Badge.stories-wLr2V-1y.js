import{f as j,w as k,e as d}from"./index-DnFGxCq3.js";import{B as q}from"./Badge-Ct53i7EW.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const J={title:"Portfolio/Badge",component:q,parameters:{layout:"centered"},tags:["autodocs"]},a=async(e,g,P)=>{const i=k(e);await d(i.getByText(g)).toBeInTheDocument(),P&&await d(i.getByLabelText("Close")).toBeInTheDocument()},t={args:{text:"small main badge text",size:"sm"},play:({canvasElement:e})=>a(e,"small main badge text")},s={args:{text:"large main badge text",size:"lg"},play:({canvasElement:e})=>a(e,"large main badge text")},n={args:{text:"small success badge text",variant:"success",size:"sm"},play:({canvasElement:e})=>a(e,"small success badge text")},r={args:{text:"large success badge text",variant:"success",size:"lg"},play:({canvasElement:e})=>a(e,"large success badge text")},o={args:{text:"small main badge with remove button text",size:"sm",handleRemove:()=>{j()}},play:({args:e,canvasElement:g})=>a(g,"small main badge with remove button text",e.handleRemove)},c={args:{text:"large main badge with remove button text",size:"lg",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"large main badge with remove button text")},m={args:{text:"small success badge with remove button text",variant:"success",size:"sm",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"small success badge with remove button text")},l={args:{text:"large success badge with remove button text",variant:"success",size:"lg",handleRemove:()=>console.log("remove")},play:({canvasElement:e})=>a(e,"large success badge with remove button text")};var u,v,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'small main badge text',
    size: 'sm'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small main badge text')
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var p,x,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'large main badge text',
    size: 'lg'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large main badge text')
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var B,S,w;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'small success badge text',
    variant: 'success',
    size: 'sm'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small success badge text')
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,R,E;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'large success badge text',
    variant: 'success',
    size: 'lg'
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large success badge text')
}`,...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var z,T,L;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var U,f,M;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large main badge with remove button text')
}`,...(M=(f=c.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var W,D,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: 'small success badge with remove button text',
    variant: 'success',
    size: 'sm',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'small success badge with remove button text')
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,C,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'large success badge with remove button text',
    variant: 'success',
    size: 'lg',
    handleRemove: () => console.log('remove')
  },
  play: ({
    canvasElement
  }) => badgeUnitTests(canvasElement, 'large success badge with remove button text')
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const K=["SmallMainBadge","LargeMainBadge","SmallSuccessBadge","LargeSuccessBadge","SmallMainBadgeWithRemoveButton","LargeMainBadgeWithRemoveButton","SmallSuccessBadgeWithRemoveButton","LargeSuccessBadgeWithRemoveButton"];export{s as LargeMainBadge,c as LargeMainBadgeWithRemoveButton,r as LargeSuccessBadge,l as LargeSuccessBadgeWithRemoveButton,t as SmallMainBadge,o as SmallMainBadgeWithRemoveButton,n as SmallSuccessBadge,m as SmallSuccessBadgeWithRemoveButton,K as __namedExportsOrder,J as default};
