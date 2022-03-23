(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[89],{3905:function(A,I,B){"use strict";B.d(I,{Zo:function(){return w},kt:function(){return z}});var E=B(7294);function C(A,I,B){return I in A?Object.defineProperty(A,I,{value:B,enumerable:!0,configurable:!0,writable:!0}):A[I]=B,A}function g(A,I){var B=Object.keys(A);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(A);I&&(E=E.filter((function(I){return Object.getOwnPropertyDescriptor(A,I).enumerable}))),B.push.apply(B,E)}return B}function j(A){for(var I=1;I<arguments.length;I++){var B=null!=arguments[I]?arguments[I]:{};I%2?g(Object(B),!0).forEach((function(I){C(A,I,B[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(B)):g(Object(B)).forEach((function(I){Object.defineProperty(A,I,Object.getOwnPropertyDescriptor(B,I))}))}return A}function Q(A,I){if(null==A)return{};var B,E,C=function(A,I){if(null==A)return{};var B,E,C={},g=Object.keys(A);for(E=0;E<g.length;E++)B=g[E],I.indexOf(B)>=0||(C[B]=A[B]);return C}(A,I);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);for(E=0;E<g.length;E++)B=g[E],I.indexOf(B)>=0||Object.prototype.propertyIsEnumerable.call(A,B)&&(C[B]=A[B])}return C}var n=E.createContext({}),e=function(A){var I=E.useContext(n),B=I;return A&&(B="function"==typeof A?A(I):j(j({},I),A)),B},w=function(A){var I=e(A.components);return E.createElement(n.Provider,{value:I},A.children)},t={inlineCode:"code",wrapper:function(A){var I=A.children;return E.createElement(E.Fragment,{},I)}},r=E.forwardRef((function(A,I){var B=A.components,C=A.mdxType,g=A.originalType,n=A.parentName,w=Q(A,["components","mdxType","originalType","parentName"]),r=e(B),z=C,R=r["".concat(n,".").concat(z)]||r[z]||t[z]||g;return B?E.createElement(R,j(j({ref:I},w),{},{components:B})):E.createElement(R,j({ref:I},w))}));function z(A,I){var B=arguments,C=I&&I.mdxType;if("string"==typeof A||C){var g=B.length,j=new Array(g);j[0]=r;var Q={};for(var n in I)hasOwnProperty.call(I,n)&&(Q[n]=I[n]);Q.originalType=A,Q.mdxType="string"==typeof A?A:C,j[1]=Q;for(var e=2;e<g;e++)j[e]=B[e];return E.createElement.apply(null,j)}return E.createElement.apply(null,B)}r.displayName="MDXCreateElement"},632:function(A,I,B){"use strict";B.r(I),B.d(I,{frontMatter:function(){return Q},contentTitle:function(){return n},metadata:function(){return e},toc:function(){return w},default:function(){return r}});var E=B(2122),C=B(9756),g=(B(7294),B(3905)),j=["components"],Q={id:"window",title:"Window"},n=void 0,e={unversionedId:"window",id:"window",isDocsHomePage:!1,title:"Window",description:"Examples",source:"@site/docs/window.md",sourceDirName:".",slug:"/window",permalink:"/Ave-Nodejs-Docs/en/window",version:"current",frontMatter:{id:"window",title:"Window"},sidebar:"components",previous:{title:"Components",permalink:"/Ave-Nodejs-Docs/en/components"},next:{title:"Layout",permalink:"/Ave-Nodejs-Docs/en/layout"}},w=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-window-basic",children:[]},{value:"Transparency",id:"example-window-opacity",children:[]}]}],t={toc:w};function r(A){var I=A.components,Q=(0,C.Z)(A,j);return(0,g.kt)("wrapper",(0,E.Z)({},t,Q,{components:I,mdxType:"MDXLayout"}),(0,g.kt)("h2",{id:"examples"},"Examples"),(0,g.kt)("h3",{id:"example-window-basic"},"Basic"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-ts"},"import { App, WindowCreation, WindowFlag, Window } from 'ave-ui';\n\n// create Ave app instance, assign it to global to avoid GC\nconst app = new App();\nglobalThis.app = app;\n\n// cp:creation param\nconst cpWindow = new WindowCreation();\ncpWindow.Title = 'Window';\ncpWindow.Flag |= WindowFlag.Layered;\n\nconst window = new Window(cpWindow);\n// avoid GC\nglobalThis._window = window;\n\n// set callback\nwindow.OnCreateContent((sender) => {\n    // and create window content here\n    return true;\n});\n\n// boilerplate code\nif (!window.CreateWindow()) process.exit(-1);\n\nwindow.SetVisible(true);\nwindow.Activate();\n")),(0,g.kt)("p",null,"Run, and get this basic window:"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"window basic",src:B(4793).Z})),(0,g.kt)("h4",{id:"api-window-basic"},"API"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindow extends IControl {\n    // callback:return true for success, or return false\n    OnCreateContent(callback: (sender: Window) => boolean): Window;\n\n    // success: true, fail: false\n    CreateWindow(): boolean;\n\n    SetVisible(visible: boolean): IControl;\n\n    // activate it, or you will get gray window\n    Activate(): Window;\n\n    // enable/disable background of window\n    SetBackground(useBackground: boolean): Window;\n}\n\nexport class WindowCreation {\n    Title: string = '';\n    Flag: WindowFlag = WindowFlag.Default;\n}\n\nexport enum WindowFlag {\n    MainWindow /**/ = 0x00000001, // program will terminate when window created with this flag closed\n    Sizable /**/ = 0x00000004,\n    Minimum /**/ = 0x00000008,\n    Layered /**/ = 0x00000040, // enable transparency\n    Default /**/ = MainWindow | Sizable | Minimum,\n}\n")),(0,g.kt)("p",null,"Inactive window:"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"window not active",src:B(3649).Z})),(0,g.kt)("h3",{id:"example-window-opacity"},"Transparency"),(0,g.kt)("p",null,(0,g.kt)("inlineCode",{parentName:"p"},"Layered")," flag controls transparency feature:"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"window opacity",src:B(4270).Z})),(0,g.kt)("p",null,"You can implement it this way:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{24,33}","{24,33}":!0},"import {\n    App,\n    WindowCreation,\n    WindowFlag,\n    Window,\n    Grid,\n    Vec4,\n    DockMode,\n} from 'ave-ui';\n\nexport function run() {\n    const app = new App();\n    globalThis.app = app;\n\n    const cpWindow = new WindowCreation();\n    cpWindow.Title = 'Window';\n    cpWindow.Flag |= WindowFlag.Layered;\n\n    const window = new Window(cpWindow);\n    globalThis._window = window;\n\n    window.OnCreateContent((sender) => {\n        // by default we get white background, to enable transparency, we disable it here\n        sender.SetBackground(false);\n\n        const grid = new Grid(sender);\n        {\n            const gridChild = new Grid(sender);\n            grid.ControlAdd(gridChild).SetDock(DockMode.Fill);\n            const color = new Vec4(100, 149, 237, 255);\n            gridChild.SetBackColor(color);\n            // the opacity of gridChild will be the opacity of the content of window\n            gridChild.SetOpacity(0.5);\n        }\n        window.SetContent(grid);\n        return true;\n    });\n\n    if (!window.CreateWindow()) process.exit(-1);\n\n    window.SetVisible(true);\n    window.Activate();\n}\n")),(0,g.kt)("p",null,"About grid opacity, see ",(0,g.kt)("a",{parentName:"p",href:"layout#example-grid-opacity"},"Transparent Grid"),"."))}r.isMDXComponent=!0},4793:function(A,I){"use strict";I.Z="data:image/png;base64,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AAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAwMsw7bczu4LjzicBAAAAAK6EOxwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAAB4SUajUb+3bU9w3O8kAAAAAICDcIcjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAAPCSjUajfm9mR3Dc/SQAAAAAwJVwhyMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAvy2g06vfmguP8JAAAAADAS+EORwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAF6mab/dERy3JwEAAAAAXgp3OAIAAAAAMYIjAAAAABAjOAIAAAAAMXuD49R3OQIAAAAAB7BPS+yD4+yJ8agb9QEAAAAA4DJqS9zOiX1jrA+j0eyJcRmVI4IjAAAAAHAAtSXWpliTYm2M1bgPj+2JhXEpi4IjAAAAAHAAtSXWpljbYjMd7nCsFbLGxoVRObKw93PXAAAAAAC71ZZYm2Jti7UxVn1wnJZuvhzpjq5fbFMAAAAAAC+qtsTaFGtbrI2x6g6nZTyqtz6OytHu2evrGQAAAAAAl1FbYm2KtS3Wxlhb42jaWd+clLXNUlYuTspz3fj82Y3yubPdBAAAAADAPt55aqG849SRcsPRcTnejaWF+pWN41lw3JxOy/rmtFxcn5bV9UlZXZuWZy5Mync2utEdb2yOyvpkWja6MemGb3kEAACAV6/hl2QBLms6LePxqP0adf2BmPqdjfVj1PXOxhPXjcvy0qgsd8dHF7vnF0Zlofv/lxYcJ92Fm5NpWZ+Usr4xLRe68UI3Lm5MSvdPi5Gb3XZSpqU7ra4DAAAA1zj/8QuHQfB+9Rl3/5PVX6Guv0bdfnS629aPUR87MirXdWOxjvo9jv3Hqltw7LSQ2MJjt61xca1FxtnxZC42VoIjAAAAAK8V13YkPVjoG6Jj/TXq+gMxNS4u1Tsa++MaGus59d9VC471orqpO3W0j01PRy1ATtvvy8wWnp16Lf8LBgAAAAB2mm5F11H7M/sR6tFo9nHr+kwbwzlDcNxtT1yc2wUAAAAAXmN2VMTtCLlTKf8PODtsbP9Rm1AAAAAASUVORK5CYII="},3649:function(A,I){"use strict";I.Z="data:image/png;base64,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3XzhyJHy2/feK0996Uvli1/8YnniiSfK4cOHy759+9rqygdc4QgAAAAAH66av4ajrbhr/au+jKNYHTt23H/0166/b3yf2WfMjuG1D+2ZNSiurpa1bvSBsW37+cjo7eMxehn/dcjxqMeG883G8PzsteP9bm/0zH5lY/1s/edqY/B5ZtV7AAAAAMAja3Xt3jH8u4dt/oCjva+7z0b332i094627b2De213tPd199no/vXkZCXjcD7SQmXdzoyh4f7sdcNRbTTv96u230XR/vPcMzbhK9UAAAAAPNJe/eH4K9UbGoSvzRPYumFUa0sENzD8SvWGHtIz//rCf5RPHT/eHdnCFrEvYpPPOPTb998vn3jllQ2/Ui04AgAAAPBIe/WHb3azrbUVgffRvtoclHzm3/zhZ93s/4envvxlwREAAAAAyLh27r/9aAwAAAAA8HAJjgAAAABAzKZfqf67v/+H7hIAAAAAgGn/8s/f9ZVqAAAAAODhEhwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACImQqOc3Nz3QwAAAAA4MFZ4QgAAAAA/NFmFzEKjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMQIjgAAAABAjOAIAAAAAMTcExzn5ua6GQAAAADA5jZqiVPBsV4gOAIAAAAA27FRT5wEx/7kjh2+ZQ0AAAAA3F9tibPRsdXFYWzcuXNnOwEAAAAAsJXaEmej4z0rHHft2tUdAQAAAADYXG2Jw9hYTQXHeoHgCAAAAABsR98T7wmO9UD/derdu3e3EwAAAAAAW6ktcfi16mpubWR1dbXcvXu33Llzp9y+fbucPn26vPXWW+0CAAAAAIBZL730UnnhhRfKnj17psNjDY4jLTjWsby83MLjrVu32nZlZaWNeq6GyXptHQAAAADA462uWhx+O7r/CnUNjHv37m3b+fn5dq6Odn3LjV1E7Fc61sBYw2M/78/119UBAAAA5PVfSQR4VAyjY93W4FjjYg2N/bw/18ZaVw/7kNiHxdkVjf0AAAAAAD5eJjGxG/2Kx37eH2/Xrg0qYj/t4+LglNgIAAAAAB9jfVCs+sA4iYzDc2tKIgAAAAAQUcr/AZtjtmvQ1btWAAAAAElFTkSuQmCC"},4270:function(A,I,B){"use strict";I.Z=B.p+"assets/images/window-opacity-d765b7e4ec30d9cf550d9682c974102a.png"}}]);