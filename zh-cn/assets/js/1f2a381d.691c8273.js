(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[286],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),b=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3311:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return b},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"tab",title:"Tab \u6807\u7b7e\u9875"},s=void 0,b={unversionedId:"tab",id:"tab",isDocsHomePage:!1,title:"Tab \u6807\u7b7e\u9875",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tab.md",sourceDirName:".",slug:"/tab",permalink:"/Ave-Nodejs-Docs/zh-cn/tab",version:"current",frontMatter:{id:"tab",title:"Tab \u6807\u7b7e\u9875"},sidebar:"components",previous:{title:"HyperLink \u8d85\u94fe\u63a5",permalink:"/Ave-Nodejs-Docs/zh-cn/hyper-link"},next:{title:"RadioBox \u5355\u9009\u6846",permalink:"/Ave-Nodejs-Docs/zh-cn/radio-box"}},l=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]},{value:"\u8bbe\u7f6e\u5185\u5bb9",id:"set-content",children:[]}]}],u={toc:l};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,o.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4,6,9}","{4,6,9}":!0},"import { Window, Tab, TabItem } from 'ave-ui';\n\nexport function main(window: Window) {\n    const tab = new Tab(window);\n\n    const tabItem1 = new TabItem();\n    tabItem1.Id = 1;\n    tabItem1.Text = 'tab1';\n    tab.TabInsert(tabItem1);\n\n    const tabItem2 = new TabItem();\n    tabItem2.Id = 2;\n    tabItem2.Text = 'tab2';\n    tab.TabInsert(tabItem2);\n\n    const container = getControlDemoContainer(window, 1, 300, 150);\n    container.ControlAdd(tab).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u6807\u7b7e\u9875\u7684\u57fa\u672c\u7528\u6cd5\uff1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"tab1")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"tab2")," \u4e4b\u95f4\u6765\u56de\u5207\u6362\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tab basic",src:n(6831).Z})),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITab extends IControl {\n    // \u65b0\u589e\u4e00\u4e2atab\uff0c\u8fd4\u56de\u662f\u5426\u65b0\u589e\u6210\u529f\n    // \u65b0\u589etab\u7684\u4fe1\u606f\u7531TabItem\u63cf\u8ff0\n    TabInsert(tabItem: TabItem): boolean;\n}\n\nexport class TabItem {\n    // 0\u662f\u65e0\u6548id\uff0c\u81ea\u5df1\u521b\u5efa\u6765\u7528\u7684\u8bdd\uff0c\u4e0d\u8981\u8bbe\u7f6e\u4e3a0\n    Id: number = 0;\n    Order: number = 0;\n    Icon: IconCache = 0;\n    // \u6807\u7b7e\u4e0a\u7684\u6587\u5b57\u5185\u5bb9\n    Text: string = '';\n    StackGroup: string = '';\n    StackText: string = '';\n    GroupId: number = 0;\n    Misc: TabItemMisc = TabItemMisc.None;\n    ButtonMask: number = 0;\n    Color: Vec4 = new Vec4();\n}\n")),(0,o.kt)("h3",{id:"set-content"},"\u8bbe\u7f6e\u5185\u5bb9"),(0,o.kt)("p",null,"\u6807\u7b7e\u5185\u53ef\u4ee5\u8bbe\u7f6e\u4efb\u610f\u63a7\u4ef6\uff0c\u6211\u4eec\u4ee5 Grid \u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11-15}","{11-15}":!0},"import { Window, Tab, TabItem, Grid, Vec4 } from 'ave-ui';\n\nexport function main(window: Window) {\n    const tab = new Tab(window);\n\n    const tabItem1 = new TabItem();\n    tabItem1.Id = 1;\n    tabItem1.Text = 'tab1';\n    tab.TabInsert(tabItem1);\n\n    {\n        const grid = new Grid(window);\n        grid.SetBackColor(new Vec4(0, 146, 255, 255 * 0.75));\n        tab.ContentSet(1, grid);\n    }\n\n    const tabItem2 = new TabItem();\n    tabItem2.Id = 2;\n    tabItem2.Text = 'tab2';\n    tab.TabInsert(tabItem2);\n\n    {\n        const grid = new Grid(window);\n        grid.SetBackColor(new Vec4(238, 39, 70, 255));\n        tab.ContentSet(2, grid);\n    }\n\n    const container = getControlDemoContainer(window, 1, 300, 150);\n    container.ControlAdd(tab).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tab 1"),"\u4e2d\u91c7\u7528\u84dd\u8272\u80cc\u666f\u7684 Grid\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"tab 2"),"\u4e2d\u4f7f\u7528\u7ea2\u8272\u7684\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tab set content",src:n(3070).Z})),(0,o.kt)("h4",{id:"api-set-content"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITab extends IControl {\n    ContentSet(index: number, control: IControl);\n}\n")))}d.isMDXComponent=!0},6831:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tab-basic-becd78bbfa3db6ff445ad9790db5b2e8.gif"},3070:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tab-set-content-19c0a7f38dc413116a6187130f9d507e.gif"}}]);