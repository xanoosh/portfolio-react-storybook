import{j as a}from"./jsx-runtime-BnIj46N_.js";import{r as s}from"./index-CsdIBAqE.js";function o({title:e,titleId:n,...r},t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},r),e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const u=s.forwardRef(o),m=u;function d({text:e,variant:n="main",size:r="sm",handleRemove:t}){const l=n==="main"?"bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300":"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",i=r==="sm"?"text-xs font-medium px-2.5 py-1":"text-sm font-lg px-4 py-1.5";return e.length===0?null:a.jsxs("div",{className:`${l} ${i} rounded-full flex flex-row gap-2 items-center`,children:[a.jsx("span",{className:"",children:e}),t?a.jsx(c,{onClick:t}):null]})}function c({onClick:e}){return e?a.jsx("button",{className:"h-4 w-4 appearance-none items-center justify-center rounded-full focus:outline-none hover:opacity-50","aria-label":"Close",onClick:e,children:a.jsx(m,{})}):null}d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'main' | 'success'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'main'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},handleRemove:{required:!1,tsType:{name:"union",raw:"undefined | (() => void)",elements:[{name:"undefined"},{name:"unknown"}]},description:""}}};export{d as B};
