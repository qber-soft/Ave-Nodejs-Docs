---
id: development
title: 开发
---

## App

-   平台：Windows
-   运行环境：Node
-   模板项目：[Ave-Nodejs-Template](https://github.com/qber-soft/Ave-Nodejs-Template)
-   组件文档：[组件总览](https://qber-soft.github.io/Ave-Nodejs-Docs/components)

## 库

库 包含两部分：

-   使用 Visual Studio 开发，产出 node 插件
-   使用 TypeScript 开发，封装 node 插件导出的 API，产出 npm 包

### Node 插件

-   使用代码仓库：[https://github.com/qber-soft/Ave-Nodejs](https://github.com/qber-soft/Ave-Nodejs)
-   下载 Avernakis SDK：在 [https://github.com/qber-soft/Ave-SDK/releases](https://github.com/qber-soft/Ave-SDK/releases) 下载`SDK.7z`，然后解压缩，将`Avernakis`和`Avernakis-Tiny`复制到`Code\External`。
-   构建 Ave 的 Node 插件：打开`Code\Avernakis Nodejs\Avernakis Nodejs.sln`，构建环境选 `Release、x64`（默认可能是 Any CPU），然后构建`Avernakis-Nodejs`项目。预期多出`_BuildOutput\x64_Release`文件夹，里面有`Avernakis-Nodejs.node`文件。
-   使用 Node 插件：将`Avernakis-Nodejs.node`文件复制到`Code\Avernakis Nodejs\Test-Nodejs\lib`。
-   开发 NPM 包：切到`Code\Avernakis Nodejs\Test-Nodejs`，先`npm install`，然后运行`npm run dev:unit` 或 `npm run dev:app`。
