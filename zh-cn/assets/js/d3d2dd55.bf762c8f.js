(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[489],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9443:function(e,n,r){"use strict";var t=(0,r(7294).createContext)(void 0);n.Z=t},2240:function(e,n,r){"use strict";r.r(n),r.d(n,{contentTitle:function(){return w},default:function(){return x},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return y}});var t=r(2122),a=r(9756),o=r(7294),s=r(3905),i=r(9443);var c=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var m=37,d=39;var g=function(e){var n=e.lazy,r=e.block,t=e.defaultValue,a=e.values,s=e.groupId,i=e.className,g=c(),f=g.tabGroupChoices,b=g.setTabGroupChoices,v=(0,o.useState)(t),w=v[0],k=v[1],y=o.Children.toArray(e.children),h=[];if(null!=s){var x=f[s];null!=x&&x!==w&&a.some((function(e){return e.value===x}))&&k(x)}var S=function(e){var n=e.currentTarget,r=h.indexOf(n),t=a[r].value;k(t),null!=s&&(b(s,t),setTimeout((function(){var e,r,t,a,o,s,i,c;(e=n.getBoundingClientRect(),r=e.top,t=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,r>=0&&o<=c&&a<=i&&t>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},P=function(e){var n,r;switch(e.keyCode){case d:var t=h.indexOf(e.target)+1;r=h[t]||h[0];break;case m:var a=h.indexOf(e.target)-1;r=h[a]||h[h.length-1]}null==(n=r)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},i)},a.map((function(e){var n=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":w===n}),key:n,ref:function(e){return h.push(e)},onKeyDown:P,onFocus:S,onClick:S},r)}))),n?(0,o.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))};var f=function(e){var n=e.children,r=e.hidden,t=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:t},n)},b=["components"],v={id:"progress",title:"Progress \u8fdb\u5ea6\u6761"},w=void 0,k={unversionedId:"progress",id:"progress",isDocsHomePage:!1,title:"Progress \u8fdb\u5ea6\u6761",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/progress.mdx",sourceDirName:".",slug:"/progress",permalink:"/Ave-Nodejs-Docs/zh-cn/progress",version:"current",frontMatter:{id:"progress",title:"Progress \u8fdb\u5ea6\u6761"},sidebar:"components",previous:{title:"RichListBox \u591a\u683c\u5f0f\u5217\u8868\u6846",permalink:"/Ave-Nodejs-Docs/zh-cn/rich-list-box"},next:{title:"CheckBox \u591a\u9009\u6846",permalink:"/Ave-Nodejs-Docs/zh-cn/check-box"}},y=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]},{value:"\u72b6\u6001",id:"example-state",children:[]},{value:"\u6b65\u957f\uff08\u6bcf\u6b21\u589e\u52a0\u591a\u5c11\uff09",id:"example-step",children:[]}]}],h={toc:y};function x(e){var n=e.components,o=(0,a.Z)(e,b);return(0,s.kt)("wrapper",(0,t.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,s.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5-6}","{5-6}":!0},"import { Window, ProgressBar, Grid } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n    progressBar.SetValue(75);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n\nfunction getControlDemoContainer(window: Window, count = 1) {\n    const container = new Grid(window);\n    container.ColAddSlice(1);\n    container.ColAddDpx(...Array.from<number>({ length: count }).fill(240));\n    container.ColAddSlice(1);\n\n    container.RowAddSlice(1);\n    container.RowAddDpx(...Array.from<number>({ length: count }).fill(32));\n    container.RowAddSlice(1);\n    return container;\n}\n")),(0,s.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u8fdb\u5ea6\u6761\u7684\u57fa\u672c\u7528\u6cd5\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress basic",src:r(1881).Z})),(0,s.kt)("p",null,"\u5176\u4e2d",(0,s.kt)("inlineCode",{parentName:"p"},"SetAnimation"),"\u8bbe\u7f6e\u7684\u52a8\u753b\u662f\u8fdb\u5ea6\u6761\u4e2d\u5149\u5f71\u7684\u6d41\u52a8\u3002"),(0,s.kt)("h4",{id:"api-basic"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetMaximum(value: number): ProgressBar;\n    GetMaximum(): number;\n\n    SetValue(value: number): ProgressBar;\n    GetValue(): number;\n\n    SetAnimation(enableAnimation: boolean): ProgressBar;\n\n    // \u662f\u5426\u542f\u7528\u4e86\u52a8\u753b\u6548\u679c\n    GetAnimation(): boolean;\n}\n")),(0,s.kt)("h3",{id:"example-state"},"\u72b6\u6001"),(0,s.kt)("p",null,"\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"SetState")," \u53ef\u4ee5\u8bbe\u7f6e\u8fdb\u5ea6\u6761\u72b6\u6001:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { Window, ProgressBar, Grid, ProgressBarState } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n    progressBar.SetValue(75);\n    progressBar.SetState(ProgressBarState.Normal);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,s.kt)(g,{defaultValue:"normal",values:[{label:"Normal",value:"normal"},{label:"Paused",value:"paused"},{label:"Error",value:"error"},{label:"Pulse",value:"pulse"}],mdxType:"Tabs"},(0,s.kt)(f,{value:"normal",mdxType:"TabItem"},(0,s.kt)("img",{src:r(8991).Z})),(0,s.kt)(f,{value:"paused",mdxType:"TabItem"},(0,s.kt)("img",{src:r(1868).Z})),(0,s.kt)(f,{value:"error",mdxType:"TabItem"},(0,s.kt)("img",{src:r(5274).Z})),(0,s.kt)(f,{value:"pulse",mdxType:"TabItem"},(0,s.kt)("img",{src:r(3399).Z}))),(0,s.kt)("h4",{id:"api-state"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetState(state: ProgressBarState): ProgressBar;\n    GetState(): ProgressBarState;\n}\n\nexport enum ProgressBarState {\n    Normal,\n    Paused,\n    Error,\n    Pulse,\n    None,\n}\n")),(0,s.kt)("h3",{id:"example-step"},"\u6b65\u957f\uff08\u6bcf\u6b21\u589e\u52a0\u591a\u5c11\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Window, ProgressBar, Grid } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n\n    // \u4ece0\u5f00\u59cb\u589e\u957f\n    progressBar.SetValue(0);\n\n    // \u6bcf\u6b21\u589e\u52a01\n    progressBar.SetStep(1);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n\n    const id = setInterval(() => {\n        if (progressBar.GetValue() < 100) {\n            // \u6bcf\u9694100ms\u5c31\u589e\u957f\u4e00\u6b21\n            progressBar.Step();\n        } else {\n            clearInterval(id);\n        }\n    }, 100);\n}\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u600e\u6837\u5b9e\u73b0\u901a\u5e38\u6211\u4eec\u770b\u5230\u7684\u201c\u8fdb\u5ea6\u6761\u4e0d\u65ad\u589e\u957f\u201d\u7684\u6548\u679c\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress step",src:r(3478).Z})),(0,s.kt)("h4",{id:"api-step"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetStep(value: number): ProgressBar;\n    GetStep(): number;\n    Step(): ProgressBar;\n}\n")))}x.isMDXComponent=!0},6010:function(e,n,r){"use strict";function t(e){var n,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(a&&(a+=" "),a+=r);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(a&&(a+=" "),a+=n);return a}r.d(n,{Z:function(){return a}})},8991:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},5274:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-error-969ca51d1b1d99b07553cdc67b358bf7.gif"},1868:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-paused-85c2c5391e3882f83584b8bc0405cb83.gif"},3399:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-pulse-620f86cb311ca951061e394ecb4f5c6f.gif"},1881:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},3478:function(e,n,r){"use strict";n.Z=r.p+"assets/images/progress-step-6fd79aa2e3c081bd6beb4b74f290041c.gif"}}]);