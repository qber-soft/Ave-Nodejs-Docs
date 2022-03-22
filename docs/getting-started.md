---
id: getting-started
title: Getting Started
---

## Usage

```bash
> npm i ave-ui
```

## Hello Window {#hello-window}

This project is designed to let us get a glimpse of Ave:

> [docs/getting-started](https://github.com/qber-soft/Ave-Nodejs-Template/tree/docs/getting-started) branch of the template project

```ts title="https://github.com/qber-soft/Ave-Nodejs-Template/blob/docs/getting-started/src/index.ts"
import { App, WindowCreation, Window, WindowFlag, Grid, Vec4 } from 'ave-ui';

const app = new App();
globalThis.app = app;

const cpWindow = new WindowCreation();
cpWindow.Title = 'Window';
cpWindow.Flag |= WindowFlag.Layered;

const window = new Window(cpWindow);
globalThis._window = window;

window.OnCreateContent((sender) => {
    const grid = new Grid(sender);
    grid.SetBackColor(new Vec4(0, 146, 255, 255 * 0.75));
    sender.SetContent(grid);
    return true;
});

if (!window.CreateWindow()) process.exit(-1);

window.SetVisible(true);
window.Activate();
```

You will get a light blue window:

![grid background](./assets/grid-background.png)

First, create an instance of App:

```ts {4}
import { App, WindowCreation, Window, WindowFlag, Grid, Vec4 } from 'ave-ui';

const app = new App();
globalThis.app = app;
```

Assign it to global to avoid GC, and then create an instance of Window:

```ts {2,6}
// cp: creation param
const cpWindow = new WindowCreation();
cpWindow.Title = 'Window';
cpWindow.Flag |= WindowFlag.Layered;

const window = new Window(cpWindow);
globalThis._window = window;
```

In `OnCreateContent`, we create content of this simple application: just a grid with background

```ts
window.OnCreateContent((sender) => {
    const grid = new Grid(sender);
    grid.SetBackColor(new Vec4(0, 146, 255, 255 * 0.75));
    sender.SetContent(grid);
    return true;
});
```

Boilerplate code about window creation:

```ts
if (!window.CreateWindow()) process.exit(-1);

window.SetVisible(true);
window.Activate();
```

## Template Project {#template-project}

Repo: [Ave-Nodejs-Template](https://github.com/qber-soft/Ave-Nodejs-Template).

This template project shows how to play with a single button:

<video src={require('./assets/getting-started-template-project.mp4').default} controls autoplay style={{width: 800}}/>
