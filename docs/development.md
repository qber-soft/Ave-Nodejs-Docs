---
id: development
title: Development
---

## App

-   Platform: Windows
-   Runtime: Node
-   Template Project: [Ave-Nodejs-Template](https://github.com/qber-soft/Ave-Nodejs-Template)
-   Docs: [Components](https://qber-soft.github.io/Ave-Nodejs-Docs/components)

## Lib

Ave Lib consists of two parts:

-   Use Visual Studio to build node addon
-   Use TypeScript to build npm package based on API exported from node addon

### Node Addon

-   Clone repo: [https://github.com/qber-soft/Ave-Nodejs](https://github.com/qber-soft/Ave-Nodejs)
-   Download Avernakis SDK: Download `SDK.7z` from [https://github.com/qber-soft/Ave-SDK/releases](https://github.com/qber-soft/Ave-SDK/releases), unzip it, copy `Avernakis` to `Code\External`.
-   Build node addon: Open `Code\Avernakis Nodejs\Avernakis Nodejs.sln`, select `Release x64`, build `Avernakis-Nodejs` project. `Avernakis-Nodejs.node` will be available in `_BuildOutput\x64_Release`.
-   Use node addon: copy `Avernakis-Nodejs.node` to `Code\Avernakis Nodejs\Test-Nodejs\lib`.
-   NPM package development: goto `Code\Avernakis Nodejs\Test-Nodejs`, run `npm install`, then `npm run dev:unit` or `npm run dev:app`.
