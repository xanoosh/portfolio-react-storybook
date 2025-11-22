import{B as b}from"./Badge-DH9E6f6h.js";import{g as v}from"./react.esm-CFOfkyxd.js";import"./iframe-yTIVT2wp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg4jEMDB.js";import"./index-C6VnWIEk.js";import"./client-Cfwi_hWk.js";const{expect:s,fireEvent:y,fn:B}=__STORYBOOK_MODULE_TEST__,T={title:"Portfolio/Badge",component:b,tags:["autodocs"]},o=B(),t=(e,a)=>{if(s(e).toBeInTheDocument(),s(e.textContent).toBe(a.text),s(e).toHaveClass(a.variant==="pink"?"bg-pink-600 text-white":"bg-slate-900 text-slate-400"),s(e).toHaveClass(a.size==="lg"?"text-sm font-lg px-4 py-1.5":"text-xs font-medium px-2.5 py-1"),a.handleRemove){const n=v(e).getByLabelText("close");s(n).toBeInTheDocument(),s(o).not.toHaveBeenCalled(),y.click(n),s(o).toHaveBeenCalledTimes(1)}},r={args:{text:"small pink badge text",variant:"pink",size:"sm"},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},g={args:{text:"large pink badge text",variant:"pink",size:"lg"},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},i={args:{text:"small main badge text",size:"sm"},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},c={args:{text:"large main badge text",size:"lg"},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},d={args:{text:"small pink badge with remove button text",variant:"pink",size:"sm",handleRemove:o},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},l={args:{text:"large pink badge with remove button text",variant:"pink",size:"lg",handleRemove:o},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},m={args:{text:"small main badge with remove button text",size:"sm",handleRemove:o},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}},p={args:{text:"large main badge with remove button text",size:"lg",handleRemove:o},play:async({canvas:e,args:a})=>{const n=e.getByRole("badge");t(n,a)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge text',
    variant: 'pink',
    size: 'sm'
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge text',
    variant: 'pink',
    size: 'lg'
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small main badge text',
    size: 'sm'
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large main badge text',
    size: 'lg'
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small pink badge with remove button text',
    variant: 'pink',
    size: 'sm',
    handleRemove: onClickMockFn
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large pink badge with remove button text',
    variant: 'pink',
    size: 'lg',
    handleRemove: onClickMockFn
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'small main badge with remove button text',
    size: 'sm',
    handleRemove: onClickMockFn
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'large main badge with remove button text',
    size: 'lg',
    handleRemove: onClickMockFn
  },
  play: async ({
    canvas,
    args
  }) => {
    const badge = canvas.getByRole('badge');
    badgeTestAssertions(badge, args);
  }
}`,...p.parameters?.docs?.source}}};const M=["SmallPinkBadge","LargePinkBadge","SmallMainBadge","LargeMainBadge","SmallPinkBadgeWithRemoveButton","LargePinkBadgeWithRemoveButton","SmallMainBadgeWithRemoveButton","LargeMainBadgeWithRemoveButton"];export{c as LargeMainBadge,p as LargeMainBadgeWithRemoveButton,g as LargePinkBadge,l as LargePinkBadgeWithRemoveButton,i as SmallMainBadge,m as SmallMainBadgeWithRemoveButton,r as SmallPinkBadge,d as SmallPinkBadgeWithRemoveButton,M as __namedExportsOrder,T as default};
