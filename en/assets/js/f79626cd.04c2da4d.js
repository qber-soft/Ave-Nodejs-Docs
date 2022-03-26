(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[914],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,f=p["".concat(c,".").concat(g)]||p[g]||m[g]||s;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9103:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=t(2122),r=t(9756),s=(t(7294),t(3905)),a=["components"],i={id:"message-box",title:"MessageBox"},c=void 0,l={unversionedId:"message-box",id:"message-box",isDocsHomePage:!1,title:"MessageBox",description:"Examples",source:"@site/docs/message-box.md",sourceDirName:".",slug:"/message-box",permalink:"/Ave-Nodejs-Docs/en/message-box",version:"current",frontMatter:{id:"message-box",title:"MessageBox"},sidebar:"components",previous:{title:"CheckBox",permalink:"/Ave-Nodejs-Docs/en/check-box"},next:{title:"Input",permalink:"/Ave-Nodejs-Docs/en/input"}},u=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],m={toc:u};function p(e){var n=e.components,i=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-basic"},"Basic"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-14}","{7-14}":!0},"import { Window, MessageIcon, MessageButton, Button } from 'ave-ui';\n\nexport function main(window: Window) {\n    const button = new Button(window);\n    button.SetText('Button');\n    button.OnClick((sender) => {\n        const commonUi = window.GetCommonUi();\n        const result = commonUi.Message(\n            'Message',\n            'This is a message',\n            MessageIcon.Infomation,\n            MessageButton.YesNo,\n            'Title',\n        );\n        console.log(`message result: ${result}(${MessageResult[result]})`);\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,s.kt)("p",null,"Usage:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"message box basic",src:t(151).Z})),(0,s.kt)("p",null,"In console:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"message result: 2(Yes)\nmessage result: 3(No)\nmessage result: 0(Default)\n")),(0,s.kt)("h4",{id:"api-basic"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindow extends IControl {\n    GetCommonUi(): ICommonUi;\n}\n\nexport interface ICommonUi {\n    /**\n     * main: summary of message\n     * detail\n     * icon\n     * buttonType\n     * title\n     */\n    Message(\n        main: string,\n        detail: string,\n        icon: MessageIcon,\n        buttonType: MessageButton,\n        title: string,\n    ): MessageResult;\n}\n\nexport enum MessageIcon {\n    None,\n    Infomation,\n    Warning,\n    Error,\n}\n\nexport enum MessageButton {\n    Ok = 0x01,\n    Yes = 0x02,\n    No = 0x04,\n    Retry = 0x08,\n    Cancel = 0x10,\n    Close = 0x20,\n    OkCancel = Ok | Cancel,\n    YesNo = Yes | No,\n    YesNoCancel = Yes | No | Cancel,\n    RetryCancel = Retry | Cancel,\n}\n\nexport enum MessageResult {\n    Failed,\n    Ok,\n    Yes,\n    No,\n    Retry,\n    Cancel,\n    Close,\n    Button,\n    Default = Failed,\n}\n")))}p.isMDXComponent=!0},151:function(e,n,t){"use strict";n.Z=t.p+"assets/images/message-box-basic-7e713ad08e169f399c1f9ef12a1ab572.gif"}}]);