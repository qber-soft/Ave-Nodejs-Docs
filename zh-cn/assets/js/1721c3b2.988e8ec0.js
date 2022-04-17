(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[994],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||c;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3223:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),a=["components"],i={id:"icon",title:"Icon \u56fe\u6807"},u=void 0,p={unversionedId:"icon",id:"icon",isDocsHomePage:!1,title:"Icon \u56fe\u6807",description:"\u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/icon.md",sourceDirName:".",slug:"/icon",permalink:"/Ave-Nodejs-Docs/zh-cn/icon",version:"current",frontMatter:{id:"icon",title:"Icon \u56fe\u6807"},sidebar:"components",previous:{title:"Picture \u56fe\u7247",permalink:"/Ave-Nodejs-Docs/zh-cn/picture"},next:{title:"\u4e3b\u9898",permalink:"/Ave-Nodejs-Docs/zh-cn/theme"}},s=[{value:"\u7b80\u4ecb",id:"introduction",children:[{value:"\u8d44\u6e90 ID",id:"resId",children:[]}]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"introduction"},"\u7b80\u4ecb"),(0,c.kt)("p",null,"\u56fe\u6807\u5bf9\u8c61\u53ef\u4ee5\u7531\u4ee5\u4e0b\u65b9\u6cd5\u521b\u5efa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindow extends IControl {\n    CreateManagedIcon(icon: IconSource): IIcon;\n}\n\nexport class IconSource {\n    constructor(resId: number, pixelSizeWhen100Percent: number);\n}\n")),(0,c.kt)("h3",{id:"resId"},"\u8d44\u6e90 ID"),(0,c.kt)("p",null,"\u5728\u4f7f\u7528\u56fe\u6807\u4e4b\u524d\uff0c\u9700\u8981\u5148\u521b\u5efa resource map \u4ee5\u83b7\u53d6\u8d44\u6e90 id\uff1a"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/app/app-resource.ts"},"examples/unit/app/app-resource"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"const iconDataMap = {\n    Open: [path.resolve(__dirname, './FileOpen#0.png')],\n};\nconst resMap = app.CreateResourceMap(\n    app,\n    [16] /* icon size list */,\n    iconDataMap,\n);\n")),(0,c.kt)("p",null,"\u7136\u540e\u5b83\u662f\u8fd9\u6837\u7528\u7684\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6-8}","{6-8}":!0},"window.OnCreateContent((sender) => {\n    const button = new Button(window);\n    button.SetText('Open');\n    button.SetVisualTextLayout(VisualTextLayout.HorzVisualText);\n\n    const iconSource = new IconSource(resMap.Open, 16);\n    const icon = window.CreateManagedIcon(iconSource);\n    button.SetVisual(icon);\n    ...\n    return true;\n});\n")))}d.isMDXComponent=!0}}]);