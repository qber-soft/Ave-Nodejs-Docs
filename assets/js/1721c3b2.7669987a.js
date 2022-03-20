(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[994],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3223:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),i=["components"],a={id:"icon",title:"Icon \u56fe\u6807"},u=void 0,p={unversionedId:"icon",id:"icon",isDocsHomePage:!1,title:"Icon \u56fe\u6807",description:"\u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/icon.md",sourceDirName:".",slug:"/icon",permalink:"/icon",version:"current",frontMatter:{id:"icon",title:"Icon \u56fe\u6807"},sidebar:"components",previous:{title:"Picture \u56fe\u7247",permalink:"/picture"},next:{title:"\u4e3b\u9898",permalink:"/theme"}},l=[{value:"\u7b80\u4ecb",id:"introduction",children:[{value:"\u8d44\u6e90 ID",id:"resId",children:[]}]}],s={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"introduction"},"\u7b80\u4ecb"),(0,c.kt)("p",null,"\u56fe\u6807\u5bf9\u8c61\u53ef\u4ee5\u7531\u4ee5\u4e0b\u65b9\u6cd5\u521b\u5efa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindow extends IControl {\n    CreateManagedIcon(icon: IconSource): IIcon;\n}\n\nexport class IconSource {\n    constructor(resId: number, pixelSizeWhen100Percent: number);\n}\n")),(0,c.kt)("h3",{id:"resId"},"\u8d44\u6e90 ID"),(0,c.kt)("p",null,"\u4f7f\u7528\u56fe\u6807\uff0c\u9700\u8981\u52a0\u8f7d\u8d44\u6e90\u5305\u3002\u8d44\u6e90\u5305\u5219\u7531\u4e13\u95e8\u7684\u7f16\u8bd1\u5de5\u5177\u521b\u5efa\uff0c\u540c\u65f6\u8fd8\u4f1a\u751f\u6210\u8d44\u6e90\u7d22\u5f15\u6587\u4ef6\uff0c\u6bd4\u5982\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=ResId.ts",title:"ResId.ts"},"export enum ResId {\n    // 126 files in 'Icon'\n    Icon_Clock_png = 0x00000010, // Icon\\Clock#0.png\n    Icon_Copy_png = 0x00000020, // Icon\\Copy#0.png\n    Icon_Cut_png = 0x00000030, // Icon\\Cut#0.png\n    Icon_Delete_png = 0x00000040, // Icon\\Delete#0.png\n    Icon_Exit_png = 0x00000050, // Icon\\Exit#0.png\n    Icon_File_png = 0x00000060, // Icon\\File#0.png\n    ...\n}\n")),(0,c.kt)("p",null,"\u6211\u4eec\u901a\u8fc7",(0,c.kt)("inlineCode",{parentName:"p"},"ResId"),"\u4e2d\u7684\u679a\u4e3e\u503c\u6765\u5f15\u7528\u76f8\u5e94\u8d44\u6e90\uff0c\u4f8b\u5982\uff1a",(0,c.kt)("a",{parentName:"p",href:"/button#example-set-icon"},"\u8bbe\u7f6e\u6309\u94ae\u56fe\u6807"),"\u3002"))}f.isMDXComponent=!0}}]);