(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[340],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||c;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4517:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),i=["components"],a={id:"picture",title:"Picture"},u=void 0,s={unversionedId:"picture",id:"picture",isDocsHomePage:!1,title:"Picture",description:"Examples",source:"@site/docs/picture.md",sourceDirName:".",slug:"/picture",permalink:"/Ave-Nodejs-Docs/picture",version:"current",frontMatter:{id:"picture",title:"Picture"},sidebar:"components",previous:{title:"Tree",permalink:"/Ave-Nodejs-Docs/tree"},next:{title:"Icon",permalink:"/Ave-Nodejs-Docs/icon"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],l={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("h3",{id:"example-basic"},"Basic"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4-5,8}","{4-5,8}":!0},"import { Window, Picture, ResourceSource, AppPath } from 'ave-ui';\n\nexport function main(window: Window) {\n    const picture = new Picture(window);\n    const source = ResourceSource.FromFilePath(\n        AppPath.AppPath + '_Debug\\\\AppRes\\\\Icon\\\\Clock#6.png',\n    );\n    picture.SetPicture(source);\n\n    const container = getControlDemoContainer(window, 1, 300, 300);\n    container.ControlAdd(picture).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"Usage:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"picture basic",src:n(1582).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPicture extends IVisual {\n    //\n    SetPicture(rs: ResourceSource): Picture;\n}\n\nexport class ResourceSource {\n    Type: ResourceSourceType = ResourceSourceType.Resource;\n    ResourceId: number = 0;\n    // path separator must be \\\\, this is convension of Ave Lib\n    FilePath: string = '';\n\n    static FromFilePath(s: string): ResourceSource;\n}\n\nexport enum ResourceSourceType {\n    Resource,\n    FilePath,\n}\n")))}f.isMDXComponent=!0},1582:function(e,t,n){"use strict";t.Z=n.p+"assets/images/picture-basic-3da3350b11c0666a0bc9ebbfab965dbf.png"}}]);