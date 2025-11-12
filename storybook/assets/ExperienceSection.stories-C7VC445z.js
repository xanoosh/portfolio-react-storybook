import{r as o,j as i}from"./iframe-B5vKKn3F.js";import"./preload-helper-PPVm8Dsz.js";function v({title:l,titleId:e,...t},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},t),l?o.createElement("title",{id:e},l):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))}const b=o.forwardRef(v);function x({title:l,text:e,list:t}){return i.jsxs("div",{className:"flex flex-col gap-6 text-white","aria-label":"experience-section",children:[l&&l.length>0?i.jsx("h1",{className:"text-2xl font-semibold","aria-label":"experience-title",children:l}):null,e&&e.length>0?i.jsx("p",{"aria-label":"experience-description",children:e}):null,i.jsx("hr",{className:"border-slate-400"}),t&&t.length>0?i.jsx("ol",{reversed:!0,className:"list-decimal pl-8","aria-label":"experience-list",children:t.map(({title:n,date:m,responsibilities:c},p)=>i.jsx("li",{"aria-label":"experience-list-element",className:"marker:text-2xl marker:font-semibold mb-6",children:i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsx("h2",{className:"text-2xl font-semibold",children:n}),i.jsxs("div",{className:"flex gap-2 items-center",children:[i.jsx(b,{className:"h-4 w-4 text-slate-400"}),i.jsx("h3",{className:"text-slate-400 font-semibold",children:m})]}),c.length>0?i.jsx("ul",{className:" pl-4 list-square",children:c.map((d,h)=>i.jsx("li",{className:"marker:text-base mb-1",children:d},h))}):null]})},p))}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"ExperienceSection",props:{title:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},list:{required:!1,tsType:{name:"Array",elements:[{name:"ExperienceListElement"}],raw:"ExperienceListElement[]"},description:""}}};const{expect:s,within:a}=__STORYBOOK_MODULE_TEST__,y={title:"Portfolio/ExperienceSection",component:x,tags:["autodocs"]},f=(l,e)=>{if(s(l).toBeInTheDocument(),s(l).toHaveClass("flex flex-col gap-6 text-white"),e.title&&e?.title.length>0){const t=a(l).getByLabelText("experience-title");s(t).toBeInTheDocument(),s(t.textContent).toBe(e.title)}if(e.text&&e?.text.length>0){const t=a(l).getByLabelText("experience-description");s(t).toBeInTheDocument(),s(t.textContent).toBe(e.text)}if(e.list&&e?.list.length>0){const t=a(l).getByLabelText("experience-list");s(t).toBeInTheDocument();const n=a(t).getAllByLabelText("experience-list-element");s(n).toHaveLength(e.list.length)}},r={args:{title:"example title",text:"example ExperienceSection text",list:[{title:"example list title",date:"example date string",responsibilities:["example responsibility 1","example responsibility 2","example responsibility 3"]}]},play:async({canvas:l,args:e})=>{const t=await l.findByLabelText("experience-section");f(t,e)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // decorators: [
  //   (Story) => (
  //     <div className="bg-slate-800 absolute inset-0 bg-pattern bg-no-repeat bg-center bg-cover bg-fixed w-full flex justify-center items-center">
  //       <Story />
  //     </div>
  //   ),
  // ],
  args: {
    title: 'example title',
    text: 'example ExperienceSection text',
    list: [{
      title: 'example list title',
      date: 'example date string',
      responsibilities: ['example responsibility 1', 'example responsibility 2', 'example responsibility 3']
    }]
  },
  play: async ({
    canvas,
    args
  }) => {
    const experienceSection = await canvas.findByLabelText('experience-section');
    experienceSectionAssertions(experienceSection, args);
  }
}`,...r.parameters?.docs?.source}}};const E=["ExampleExperienceSection"];export{r as ExampleExperienceSection,E as __namedExportsOrder,y as default};
