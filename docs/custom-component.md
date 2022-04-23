---
id: custom-component
title: Custom Component
---

## Examples {#examples}

### Basic {#example-basic}

You can create your own component using `Placeholder` Component:

> [examples/unit/placeholder/placeholder-basic.ts](https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/placeholder/placeholder-basic.ts)

```ts {3}
export function main(window: Window) {
    const placeholder = new Placeholder(window);
    placeholder.OnPaintPost((sender, painter, rect) => {
        painter.SetPenColor(new Vec4(255, 0, 0, 255));
        painter.DrawRectangle(0, 0, rect.w, rect.h);
    });
    const container = getControlDemoContainer(window, 1, 500, 500);
    container.ControlAdd(placeholder).SetGrid(1, 1);
    window.SetContent(container);
}
```

This gives us a red rectangle:

![place holder basic](./assets/place-holder-basic.png)

Custom UI is achieved with painter API, which is similar to canvas API.

#### API {#api-basic}

```ts
export interface IControl extends IControlExtension {
    OnPaintPost(
        fn: (sender: IControl, painter: IPainter, rect: Rect) => void,
    ): IControl;
}

export interface IPainter {
    SetPenColor(vColor: Vec4): void;
    DrawRectangle(x: number, y: number, w: number, h: number): void;
}
```
