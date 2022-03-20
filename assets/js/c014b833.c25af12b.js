(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[608],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||c;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5124:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),i=["components"],a={id:"color-picker",title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668"},l=void 0,u={unversionedId:"color-picker",id:"color-picker",isDocsHomePage:!1,title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/Ave-Nodejs-Docs/color-picker",version:"current",frontMatter:{id:"color-picker",title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668"},sidebar:"components",previous:{title:"Input \u8f93\u5165\u6846",permalink:"/Ave-Nodejs-Docs/input"},next:{title:"ScrollBar \u6eda\u52a8\u6761",permalink:"/Ave-Nodejs-Docs/scroll-bar"}},p=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],s={toc:p};function f(e){var n=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-9}","{7-9}":!0},"import { Window, Button, Vec4 } from 'ave-ui';\n\nexport function main(window: Window) {\n    const button = new Button(window);\n    button.SetText('Button');\n    button.OnClick((sender) => {\n        const commonUi = window.GetCommonUi();\n        const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n        sender.SetTextColor(result);\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u989c\u8272\u9009\u62e9\u5668\u7684\u57fa\u672c\u7528\u6cd5: \u83b7\u53d6\u7528\u6237\u9009\u62e9\u7684\u989c\u8272\uff0c\u7136\u540e\u7528\u5b83\u8bbe\u7f6e\u6309\u94ae\u4e0a\u7684\u6587\u5b57\u989c\u8272\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker basic",src:t(499).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICommonUi {\n    PickColor(defaultColor: Vec4, allowAlpha: boolean): Vec4;\n}\n")),(0,c.kt)("p",null,"\u5728\u4f8b\u5b50\u4e2d\u6211\u4eec\u8bbe\u7f6e\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"defaultColor"),"\uff08\u6bcf\u6b21\u6253\u5f00\u53d6\u8272\u5668\u65f6\u5019\u7684\u9ed8\u8ba4\u989c\u8272\uff09\u662f\u767d\u8272\uff08",(0,c.kt)("inlineCode",{parentName:"p"},"new Vec4(255, 255, 255, 255)"),"\uff09:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color",src:t(3235).Z})),(0,c.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u6bcf\u6b21\u6253\u5f00\u53d6\u8272\u5668\u90fd\u662f\u4e0a\u4e00\u6b21\u7684\u989c\u8272\uff0c\u53ef\u4ee5\u8fd9\u6837\u4fee\u6539\u4ee3\u7801\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"-   const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n+   const result = commonUi.PickColor(sender.GetTextColor(), false);\n")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color 2",src:t(7249).Z})),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"allowAlpha")," \u5219\u63a7\u5236\u662f\u5426\u80fd\u9009\u62e9\u989c\u8272 alpha \u503c\uff0c\u503c\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"false")," \u7684\u65f6\u5019\u6700\u540e\u8fd4\u56de\u7684\u989c\u8272 alpha \u59cb\u7ec8\u662f 255\u3002"))}f.isMDXComponent=!0},499:function(e,n,t){"use strict";n.Z=t.p+"assets/images/color-picker-basic-27f07e5aa52242c6098dec199a5228ef.gif"},7249:function(e,n,t){"use strict";n.Z=t.p+"assets/images/color-picker-default-color-2-9a20e42c688cb7a07e9ab3d63b486aaf.gif"},3235:function(e,n,t){"use strict";n.Z=t.p+"assets/images/color-picker-default-color-4c1ee8d1ce7e8813ed7058f85bb06ca5.png"}}]);