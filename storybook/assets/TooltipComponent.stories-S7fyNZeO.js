import{j as a}from"./iframe-G9SpaKp7.js";import{T as c}from"./TooltipComponent-C6ibFhZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9bbRDQZ.js";import"./index-C-Gr7dVa.js";const{expect:r,userEvent:s}=__STORYBOOK_MODULE_TEST__,p=async(t,o)=>{o?.defaultOpen&&(r(t).toHaveAttribute("data-state","instant-open"),await new Promise(e=>setTimeout(e,o.delayDuration)),await s.unhover(t),await new Promise(e=>setTimeout(e,o.delayDuration))),r(t).toBeInTheDocument(),r(t).toHaveAttribute("data-state","closed"),await s.hover(t),await new Promise(e=>setTimeout(e,o.delayDuration)),r(t).toHaveAttribute("data-state","delayed-open"),await s.unhover(t),await new Promise(e=>setTimeout(e,o.delayDuration)),r(t).toHaveAttribute("data-state","closed"),o?.defaultOpen&&await s.hover(t)},T={title:"Portfolio/TooltipComponent",component:c,tags:["autodocs"]},i={args:{title:"Title",content:a.jsx("span",{children:"Example tooltip text"}),defaultOpen:!1,delayDuration:300,children:a.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer hover:text-pink-600",children:"hover to see tooltip text"})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");p(e,o)}},n={args:{title:"Title",content:a.jsx("span",{children:"Example tooltip text"}),defaultOpen:!1,delayDuration:0,children:a.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"hover to see tooltip text instantly"})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");p(e,o)}},l={args:{title:"Title",content:a.jsx("span",{children:"Example tooltip text"}),defaultOpen:!0,delayDuration:300,children:a.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"tooltip open on mount, hover to toggle."})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");p(e,o)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    content: <span>Example tooltip text</span>,
    defaultOpen: false,
    delayDuration: 300,
    children: <p data-testid="tooltip-trigger" className="text-white underline cursor-pointer hover:text-pink-600">\r
        hover to see tooltip text\r
      </p>
  },
  play: async ({
    canvas,
    args
  }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    content: <span>Example tooltip text</span>,
    defaultOpen: false,
    delayDuration: 0,
    children: <p data-testid="tooltip-trigger" className="text-white underline cursor-pointer">\r
        hover to see tooltip text instantly\r
      </p>
  },
  play: async ({
    canvas,
    args
  }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    content: <span>Example tooltip text</span>,
    defaultOpen: true,
    delayDuration: 300,
    children: <p data-testid="tooltip-trigger" className="text-white underline cursor-pointer">\r
        tooltip open on mount, hover to toggle.\r
      </p>
  },
  play: async ({
    canvas,
    args
  }) => {
    const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
    tooltipTestAssertions(tooltipTrigger, args);
  }
}`,...l.parameters?.docs?.source}}};const y=["BasicTooltipComponent","InstantOpenTooltipComponent","DefaultOpenTooltipComponent"];export{i as BasicTooltipComponent,l as DefaultOpenTooltipComponent,n as InstantOpenTooltipComponent,y as __namedExportsOrder,T as default};
