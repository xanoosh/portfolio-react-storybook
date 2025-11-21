import{P as o}from"./ProjectFilterSelect-B8nX0kg0.js";import"./iframe-BNcmbH1O.js";import"./preload-helper-PPVm8Dsz.js";import"./store-PSpuG9Jh.js";import"./index-CVVx8Ork.js";import"./index-CdoorZtI.js";import"./floating-ui.react-dom-DdizJRo3.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,F={title:"Portfolio/ProjectFilter/ProjectFilterSelect",component:o,tags:["autodocs"]},s=t=>{c(t).toBeInTheDocument()},e={args:{},play:async({canvas:t})=>{const r=t.getByLabelText("project-filter-select");s(r)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvas
  }) => {
    const projectFilterSelect = canvas.getByLabelText('project-filter-select');
    projectFilterSelectTestAssertions(projectFilterSelect);
  }
}`,...e.parameters?.docs?.source}}};const S=["ExampleProjectFilter"];export{e as ExampleProjectFilter,S as __namedExportsOrder,F as default};
