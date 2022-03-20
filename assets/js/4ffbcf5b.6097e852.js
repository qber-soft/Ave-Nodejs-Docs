(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[236],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||l[f]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),i=["components"],u={id:"picture",title:"Picture \u56fe\u7247"},a=void 0,p={unversionedId:"picture",id:"picture",isDocsHomePage:!1,title:"Picture \u56fe\u7247",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/picture.md",sourceDirName:".",slug:"/picture",permalink:"/Ave-Nodejs-Docs/picture",version:"current",frontMatter:{id:"picture",title:"Picture \u56fe\u7247"},sidebar:"components",previous:{title:"Tree \u6811\u5f62\u63a7\u4ef6",permalink:"/Ave-Nodejs-Docs/tree"},next:{title:"Icon \u56fe\u6807",permalink:"/Ave-Nodejs-Docs/icon"}},s=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],l={toc:s};function d(e){var t=e.components,u=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4-5,8}","{4-5,8}":!0},"import { Window, Picture, ResourceSource, AppPath } from 'ave-ui';\n\nexport function main(window: Window) {\n    const picture = new Picture(window);\n    const source = ResourceSource.FromFilePath(\n        AppPath.AppPath + '_Debug\\\\AppRes\\\\Icon\\\\Clock#6.png',\n    );\n    picture.SetPicture(source);\n\n    const container = getControlDemoContainer(window, 1, 300, 300);\n    container.ControlAdd(picture).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u663e\u793a\u4e00\u5f20\u56fe\u7247\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"picture basic",src:n(6808).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPicture extends IVisual {\n    // \u8bbe\u7f6e\u56fe\u7247\u6765\u6e90\n    SetPicture(rs: ResourceSource): Picture;\n}\n\nexport class ResourceSource {\n    Type: ResourceSourceType = ResourceSourceType.Resource;\n    ResourceId: number = 0;\n    // \u6ce8\u610f\uff1a\u6587\u4ef6\u8def\u5f84\u9700\u8981\u4f7f\u7528\\\\, \u8fd9\u662f\u8fd9\u4e2aUI\u5e93\u6240\u8981\u6c42\u7684\u8def\u5f84\u683c\u5f0f\n    FilePath: string = '';\n\n    static FromFilePath(s: string): ResourceSource;\n}\n\nexport enum ResourceSourceType {\n    Resource,\n    FilePath,\n}\n")))}d.isMDXComponent=!0},6808:function(e,t,n){"use strict";t.Z=n.p+"assets/images/picture-basic-3da3350b11c0666a0bc9ebbfab965dbf.png"}}]);