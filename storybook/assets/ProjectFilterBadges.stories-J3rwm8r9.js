import{P as o}from"./ProjectFilterBadges-ClnHdP55.js";import"./iframe-BexdEf_e.js";import"./preload-helper-PPVm8Dsz.js";import"./store-DzpEKuG5.js";import"./Badge-DgQhnA9Y.js";import"./proxy-BDSafEAj.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,d={title:"Portfolio/ProjectFilter/ProjectFilterBadges",component:o,tags:["autodocs"]},a=t=>{s(t).toBeInTheDocument()},e={args:{},play:async({canvas:t})=>{const r=t.getByLabelText("project-filter-badges");a(r)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvas
  }) => {
    const projectFilterBadges = canvas.getByLabelText('project-filter-badges');
    projectFilterBadgesTestAssertions(projectFilterBadges);
  }
}`,...e.parameters?.docs?.source}}};const g=["ExampleProjectFilter"];export{e as ExampleProjectFilter,g as __namedExportsOrder,d as default};
