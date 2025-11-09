import{B as l}from"./Badge-c-fpZVDn.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Co8dphWk.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,x={title:"Portfolio/Badge",component:l,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{text:"small pink badge text",variant:"pink",size:"sm"},play:async({canvas:i})=>{const g=i.getByText("small pink badge text");c(g).toBeInTheDocument()}},a={args:{text:"large pink badge text",variant:"pink",size:"lg"}},t={args:{text:"small main badge text",size:"sm"}},n={args:{text:"large main badge text",size:"lg"}},r={args:{text:"small pink badge with remove button text",variant:"pink",size:"sm",handleRemove:()=>console.log("remove")}},o={args:{text:"large pink badge with remove button text",variant:"pink",size:"lg",handleRemove:()=>console.log("remove")}},s={args:{text:"small main badge with remove button text",size:"sm",handleRemove:()=>console.log("remove")}},m={args:{text:"large main badge with remove button text",size:"lg",handleRemove:()=>console.log("remove")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm'
  },
  play: async ({
    canvas
  }) => {
    const badge = canvas.getByText('small pink badge text');
    expect(badge).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small main badge text',
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large main badge text',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: () => console.log('remove')
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: () => console.log('remove')
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: () => console.log('remove')
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: () => console.log('remove')
  }
}`,...m.parameters?.docs?.source}}};const B=["SmallPinkBadge","LargePinkBadge","SmallMainBadge","LargeMainBadge","SmallPinkBadgeWithRemoveButton","LargePinkBadgeWithRemoveButton","SmallMainBadgeWithRemoveButton","LargeMainBadgeWithRemoveButton"];export{n as LargeMainBadge,m as LargeMainBadgeWithRemoveButton,a as LargePinkBadge,o as LargePinkBadgeWithRemoveButton,t as SmallMainBadge,s as SmallMainBadgeWithRemoveButton,e as SmallPinkBadge,r as SmallPinkBadgeWithRemoveButton,B as __namedExportsOrder,x as default};
