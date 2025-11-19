import{j as o}from"./iframe-BxORhZbL.js";import{T as d}from"./TooltipComponent-nBTyQAqO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrPK7041.js";import"./index-B0WSsUJ0.js";import"./floating-ui.react-dom-uPjxiykp.js";const{expect:s,userEvent:r}=__STORYBOOK_MODULE_TEST__,p=async(t,a)=>{const e=()=>new Promise(c=>setTimeout(c,600));a?.defaultOpen?(await e(),s(t).toHaveAttribute("data-state","instant-open"),await r.unhover(t),await e(),s(t).toHaveAttribute("data-state","closed"),await e(),await r.hover(t),await e(),s(t).toHaveAttribute("data-state","delayed-open")):(s(t).toBeInTheDocument(),await e(),s(t).toHaveAttribute("data-state","closed"),await r.hover(t),await e(),s(t).toHaveAttribute("data-state","delayed-open"),await r.unhover(t),await e(),s(t).toHaveAttribute("data-state","closed"))},T={title:"Portfolio/TooltipComponent",component:d,tags:["autodocs"],decorators:[t=>o.jsx("div",{className:"flex flex-col gap-4 backdrop-blur-sm p-6 h-60 w-90 rounded-lg shadow bg-slate-800/50 justify-center items-center",children:o.jsx(t,{})})]},n={args:{title:"Title",content:o.jsx("span",{children:"Example tooltip text"}),defaultOpen:!1,delayDuration:300,children:o.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"hover to see tooltip text"})},play:async({canvas:t,args:a})=>{const e=t.getByTestId("tooltip-trigger");p(e,a)}},i={args:{title:"Title",content:o.jsx("span",{children:"Example tooltip text"}),defaultOpen:!1,delayDuration:0,children:o.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"hover to see tooltip text instantly"})},play:async({canvas:t,args:a})=>{const e=t.getByTestId("tooltip-trigger");p(e,a)}},l={args:{title:"Title",content:o.jsx("span",{children:"Example tooltip text"}),defaultOpen:!0,delayDuration:300,children:o.jsx("p",{"data-testid":"tooltip-trigger",className:"text-white underline cursor-pointer",children:"tooltip open on mount, hover to toggle."})},play:async({canvas:t,args:a})=>{const e=t.getByTestId("tooltip-trigger");p(e,a)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    content: <span>Example tooltip text</span>,
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const v=["BasicTooltipComponent","InstantOpenTooltipComponent","DefaultOpenTooltipComponent"];export{n as BasicTooltipComponent,l as DefaultOpenTooltipComponent,i as InstantOpenTooltipComponent,v as __namedExportsOrder,T as default};
