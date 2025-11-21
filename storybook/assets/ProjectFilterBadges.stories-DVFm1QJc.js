import{P as o}from"./ProjectFilterBadges-D4rldR9-.js";import"./iframe-DUhEumfg.js";import"./preload-helper-PPVm8Dsz.js";import"./store-pz3HR_Tn.js";import"./Badge-BMutQWYj.js";import"./proxy-DE6m3RHc.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,d={title:"Portfolio/ProjectFilter/ProjectFilterBadges",component:o,tags:["autodocs"]},a=t=>{s(t).toBeInTheDocument()},e={args:{},play:async({canvas:t})=>{const r=t.getByLabelText("project-filter-badges");a(r)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvas
  }) => {
    const projectFilterBadges = canvas.getByLabelText('project-filter-badges');
    projectFilterBadgesTestAssertions(projectFilterBadges);
  }
}`,...e.parameters?.docs?.source}}};const g=["ExampleProjectFilter"];export{e as ExampleProjectFilter,g as __namedExportsOrder,d as default};
