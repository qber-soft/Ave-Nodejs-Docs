(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[236],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),s=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(a,".").concat(m)]||f[m]||l[m]||c;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<c;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9712:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var t=r(2122),o=r(9756),c=(r(7294),r(3905)),i=["components"],u={id:"picture",title:"Picture \u56fe\u7247"},a=void 0,s={unversionedId:"picture",id:"picture",isDocsHomePage:!1,title:"Picture \u56fe\u7247",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/picture.md",sourceDirName:".",slug:"/picture",permalink:"/Ave-Nodejs-Docs/zh-cn/picture",version:"current",frontMatter:{id:"picture",title:"Picture \u56fe\u7247"},sidebar:"components",previous:{title:"Tree \u6811\u5f62\u63a7\u4ef6",permalink:"/Ave-Nodejs-Docs/zh-cn/tree"},next:{title:"Icon \u56fe\u6807",permalink:"/Ave-Nodejs-Docs/zh-cn/icon"}},p=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],l={toc:p};function f(e){var n=e.components,u=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},l,u,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4-5,8}","{4-5,8}":!0},"import { Window, Picture, ResourceSource } from 'ave-ui';\nimport * as fs from 'fs';\nimport * as path from 'path';\n\nexport function main(window: Window) {\n    const picture = new Picture(window);\n    const buffer = fs.readFileSync(path.resolve(__dirname, './Clock#6.png'));\n    const source = ResourceSource.FromBuffer(buffer);\n    picture.SetPicture(source);\n\n    const container = getControlDemoContainer(window, 1, 300, 300);\n    container.ControlAdd(picture).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u663e\u793a\u4e00\u5f20\u56fe\u7247\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"picture basic",src:r(6808).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPicture extends IVisual {\n    // \u8bbe\u7f6e\u56fe\u7247\u6765\u6e90\n    SetPicture(rs: ResourceSource): Picture;\n}\n\nexport class ResourceSource {\n    Type: ResourceSourceType = ResourceSourceType.Resource;\n    ResourceId: number = 0;\n    InMemory: InMemoryData = new InMemoryData();\n\n    static FromBuffer(\n        buffer: Buffer,\n        rowPitch: number = 0,\n        slicePitch: number = 0,\n    );\n}\n\nexport enum ResourceSourceType {\n    Resource,\n    InMemory,\n}\n")))}f.isMDXComponent=!0},6808:function(e,n,r){"use strict";n.Z=r.p+"assets/images/picture-basic-3da3350b11c0666a0bc9ebbfab965dbf.png"}}]);