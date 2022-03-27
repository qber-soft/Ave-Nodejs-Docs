(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6661:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={id:"date-picker",title:"DatePicker"},l=void 0,s={unversionedId:"date-picker",id:"date-picker",isDocsHomePage:!1,title:"DatePicker",description:"Examples",source:"@site/docs/date-picker.md",sourceDirName:".",slug:"/date-picker",permalink:"/Ave-Nodejs-Docs/date-picker",version:"current",frontMatter:{id:"date-picker",title:"DatePicker"},sidebar:"components",previous:{title:"Calendar",permalink:"/Ave-Nodejs-Docs/calendar"},next:{title:"Knob",permalink:"/Ave-Nodejs-Docs/knob"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Set Date",id:"example-set",children:[]}]}],d={toc:p};function u(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-basic"},"Basic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5-8}","{5-8}":!0},"import { Window, DatePicker } from 'ave-ui';\n\nexport function main(window: Window) {\n    const datePicker = new DatePicker(window);\n    datePicker.OnChange((sender) => {\n        const timePoint = sender.GetDate();\n        console.log(\n            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,\n        );\n    });\n\n    const container = getControlDemoContainer(window, 1, 230);\n    container.ControlAdd(datePicker).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,i.kt)("p",null,"In this example, we demonstrate the basic usage of date picker: pick a date :)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"date picker basic",src:n(2870).Z})),(0,i.kt)("p",null,"In console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Date: 2022-3-27\nDate: 2022-3-28\n")),(0,i.kt)("h4",{id:"api-basic"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IDatePicker extends IControl {\n    GetDate(): TimePoint;\n    OnChange(callback: (sender: DatePicker) => void): DatePicker;\n}\n")),(0,i.kt)("h3",{id:"example-set"},"Set Date"),(0,i.kt)("p",null,"Just like that in ",(0,i.kt)("a",{parentName:"p",href:"./calendar#example-set"},"Calendar: Set Date"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10-11}","{10-11}":!0},"import { Window, DatePicker } from 'ave-ui';\n\nexport function main(window: Window) {\n    const datePicker = new DatePicker(window);\n    datePicker.OnChange((sender) => {\n        const timePoint = sender.GetDate();\n        console.log(\n            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,\n        );\n        datePicker.SetDate(timePoint);\n        datePicker.SetDateMark(timePoint);\n    });\n\n    const container = getControlDemoContainer(window, 1, 230);\n    container.ControlAdd(datePicker).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,i.kt)("p",null,"Display the last selected date:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"date picker set",src:n(1019).Z})),(0,i.kt)("h4",{id:"api-set"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IDatePicker extends IControl {\n    SetDate(timePoint: TimePoint): DatePicker;\n    GetDate(): TimePoint;\n\n    SetDateMark(timePoint: TimePoint): DatePicker;\n    GetDateMark(): TimePoint;\n}\n")))}u.isMDXComponent=!0},2870:function(e,t,n){"use strict";t.Z=n.p+"assets/images/date-picker-basic-71371f0451455f29392e99fa2f2d8b73.gif"},1019:function(e,t,n){"use strict";t.Z=n.p+"assets/images/date-picker-set-ad3506ead0d62f4ec43055643c308320.gif"}}]);