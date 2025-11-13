import{j as p}from"./iframe-D_r-YrxV.js";import{T as c}from"./TooltipComponent-CCQ_u355.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BG4Bh1pU.js";import"./index-Cekuol_m.js";import"./floating-ui.react-dom-CWErlC-b.js";const{expect:a,userEvent:n}=__STORYBOOK_MODULE_TEST__,l=async(t,o)=>{o?.defaultOpen&&(a(t).toHaveAttribute("data-state","instant-open"),await new Promise(e=>setTimeout(e,o.delayDuration)),await n.unhover(t),await new Promise(e=>setTimeout(e,o.delayDuration))),a(t).toBeInTheDocument(),a(t).toHaveAttribute("data-state","closed"),await n.hover(t),await new Promise(e=>setTimeout(e,o.delayDuration)),a(t).toHaveAttribute("data-state","delayed-open"),await n.unhover(t),await new Promise(e=>setTimeout(e,o.delayDuration)),a(t).toHaveAttribute("data-state","closed")},T={title:"Portfolio/TooltipComponent",component:c,tags:["autodocs"]},r={args:{text:"tooltip text",defaultOpen:!1,delayDuration:300,children:p.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"hover to see tooltip text"})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");l(e,o)}},s={args:{text:"tooltip text",defaultOpen:!1,delayDuration:0,children:p.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"hover to see tooltip text instantly"})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");l(e,o)}},i={args:{text:"tooltip text",defaultOpen:!0,delayDuration:300,children:p.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"tooltip open on mount, hover to toggle."})},play:async({canvas:t,args:o})=>{const e=t.getByTestId("tooltip-trigger");l(e,o)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'tooltip text',
    defaultOpen: false,
    delayDuration: 300,
    children: <p data-testid="tooltip-trigger" className="text-white underline cursor-pointer">\r
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'tooltip text',
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'tooltip text',
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
}`,...i.parameters?.docs?.source}}};const h=["BasicTooltipComponent","InstantOpenTooltipComponent","DefaultOpenTooltipComponent"];export{r as BasicTooltipComponent,i as DefaultOpenTooltipComponent,s as InstantOpenTooltipComponent,h as __namedExportsOrder,T as default};
