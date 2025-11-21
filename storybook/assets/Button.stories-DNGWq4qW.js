import{B as b}from"./Button-DPRPYuR0.js";import{g as m}from"./react.esm-BeRmvHH-.js";import"./iframe-DUhEumfg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6iRSdE2.js";import"./index-C4ljA4wU.js";import"./client-D7LRoN4x.js";const{expect:o,fireEvent:g,fn:x}=__STORYBOOK_MODULE_TEST__,h={title:"Portfolio/Button",component:b,tags:["autodocs"]},p=x();window.open=p;const a=(n,t)=>{if(o(n).toBeInTheDocument(),o(n.textContent).toBe(t.text),o(n).toHaveClass(t.variant==="secondary"?"bg-slate-900 ring-pink-600 text-pink-600":"bg-sky-700 ring-sky-700 text-white"),o(p).not.toHaveBeenCalled(),g.click(n),o(p).toHaveBeenCalledTimes(t?.disabled?0:1),t?.disabled||o(window.open).toHaveBeenCalledWith(t.url,"_blank","noopener,noreferrer"),t.disabled&&(o(n).toHaveClass("cursor-not-allowed opacity-70"),o(window.open).not.toHaveBeenCalledWith(t?.url,"_blank","noopener,noreferrer")),t?.icon){const e=m(n).getByLabelText("icon");o(e).toBeInTheDocument(),o(e).toHaveAttribute("aria-hidden","true")}},r={args:{text:"example primary button text",url:"#",variant:"primary"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},s={args:{text:"example secondary button text",url:"#",variant:"secondary"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},c={args:{text:"example disabled primary button text",url:"#",variant:"primary",disabled:!0},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},i={args:{text:"example disabled secondary button text",url:"#",variant:"secondary",disabled:!0},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},u={args:{text:"example primary button with web icon",url:"#",variant:"primary",icon:"webIcon"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},l={args:{text:"example primary button with code icon",url:"#",variant:"primary",icon:"codeIcon"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},d={args:{text:"example secondary button with web icon",url:"#",variant:"secondary",icon:"webIcon"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}},y={args:{text:"example secondary button with code icon",url:"#",variant:"secondary",icon:"codeIcon"},play:async({canvas:n,args:t})=>{const e=n.getByRole("button");a(e,t)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example primary button text',
    url: '#',
    variant: 'primary'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button text',
    url: '#',
    variant: 'secondary'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled primary button text',
    url: '#',
    variant: 'primary',
    disabled: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example disabled secondary button text',
    url: '#',
    variant: 'secondary',
    disabled: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with web icon',
    url: '#',
    variant: 'primary',
    icon: 'webIcon'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example primary button with code icon',
    url: '#',
    variant: 'primary',
    icon: 'codeIcon'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with web icon',
    url: '#',
    variant: 'secondary',
    icon: 'webIcon'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'example secondary button with code icon',
    url: '#',
    variant: 'secondary',
    icon: 'codeIcon'
  },
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole('button');
    buttonTestAssertions(button, args);
  }
}`,...y.parameters?.docs?.source}}};const C=["ButtonPrimary","ButtonSecondary","DisabledButtonPrimary","DisabledButtonSecondary","ButtonPrimaryWebIcon","ButtonPrimaryCodeIcon","ButtonSecondaryWebIcon","ButtonSecondaryCodeIcon"];export{r as ButtonPrimary,l as ButtonPrimaryCodeIcon,u as ButtonPrimaryWebIcon,s as ButtonSecondary,y as ButtonSecondaryCodeIcon,d as ButtonSecondaryWebIcon,c as DisabledButtonPrimary,i as DisabledButtonSecondary,C as __namedExportsOrder,h as default};
