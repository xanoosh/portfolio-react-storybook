import{j as l}from"./jsx-runtime-CPoh4Ics.js";import{r as a}from"./index-CsdIBAqE.js";function d({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z",clipRule:"evenodd"}))}const p=a.forwardRef(d),f=p;function g({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M3.757 4.5c.18.217.376.42.586.608.153-.61.354-1.175.596-1.678A5.53 5.53 0 0 0 3.757 4.5ZM8 1a6.994 6.994 0 0 0-7 7 7 7 0 1 0 7-7Zm0 1.5c-.476 0-1.091.386-1.633 1.427-.293.564-.531 1.267-.683 2.063A5.48 5.48 0 0 0 8 6.5a5.48 5.48 0 0 0 2.316-.51c-.152-.796-.39-1.499-.683-2.063C9.09 2.886 8.476 2.5 8 2.5Zm3.657 2.608a8.823 8.823 0 0 0-.596-1.678c.444.298.842.659 1.182 1.07-.18.217-.376.42-.586.608Zm-1.166 2.436A6.983 6.983 0 0 1 8 8a6.983 6.983 0 0 1-2.49-.456 10.703 10.703 0 0 0 .202 2.6c.72.231 1.49.356 2.288.356.798 0 1.568-.125 2.29-.356a10.705 10.705 0 0 0 .2-2.6Zm1.433 1.85a12.652 12.652 0 0 0 .018-2.609c.405-.276.78-.594 1.117-.947a5.48 5.48 0 0 1 .44 2.262 7.536 7.536 0 0 1-1.575 1.293Zm-2.172 2.435a9.046 9.046 0 0 1-3.504 0c.039.084.078.166.12.244C6.907 13.114 7.523 13.5 8 13.5s1.091-.386 1.633-1.427c.04-.078.08-.16.12-.244Zm1.31.74a8.5 8.5 0 0 0 .492-1.298c.457-.197.893-.43 1.307-.696a5.526 5.526 0 0 1-1.8 1.995Zm-6.123 0a8.507 8.507 0 0 1-.493-1.298 8.985 8.985 0 0 1-1.307-.696 5.526 5.526 0 0 0 1.8 1.995ZM2.5 8.1c.463.5.993.935 1.575 1.293a12.652 12.652 0 0 1-.018-2.608 7.037 7.037 0 0 1-1.117-.947 5.48 5.48 0 0 0-.44 2.262Z",clipRule:"evenodd"}))}const b=a.forwardRef(g),w=b;function y({text:e,url:t,variant:n="primary",disabled:r=!1,icon:o}){const c=m=>{switch(m){case"primary":return r===!0?"bg-custom-blue ring-custom-blue":"bg-custom-blue hover:bg-opacity-90 ring-custom-blue";case"pink":return r===!0?"bg-custom-pink ring-custom-pink":"bg-custom-pink hover:bg-opacity-90 ring-custom-pink";case"secondary":return r===!0?"bg-slate-500 ring-slate-500":"bg-slate-500 hover:bg-opacity-90 ring-slate-500"}},i=r?"cursor-not-allowed opacity-70":"cursor-pointer",u="focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800",s="w-4 h-4";return e.length===0?null:l.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:t,className:`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${u} ${c(n)} ${i}`,children:[o==="codeIcon"?l.jsx(f,{className:s}):null,o==="webIcon"?l.jsx(w,{className:s}):null,l.jsx("span",{children:e})]})}y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'pink' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""}}};export{y as B};