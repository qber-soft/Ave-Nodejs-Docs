---
id: icon
title: Icon
---

## Introduction {#introduction}

Icon object can be created in this way:

```ts
export interface IWindow extends IControl {
    CreateManagedIcon(icon: IconSource): IIcon;
}

export class IconSource {
    constructor(resId: number, pixelSizeWhen100Percent: number);
}
```

### Resource ID {#resId}

Before using icon, we should create resource map, which is created in this way:

> [examples/unit/app/app-resource](https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/app/app-resource.ts)

```ts {4}
const iconDataMap = {
    Open: [path.resolve(__dirname, './FileOpen#0.png')],
};
const resMap = app.CreateResourceMap(
    app,
    [16] /* icon size list */,
    iconDataMap,
);
```

then icon can be created using resource id:

```ts {6-8}
window.OnCreateContent((sender) => {
    const button = new Button(window);
    button.SetText('Open');
    button.SetVisualTextLayout(VisualTextLayout.HorzVisualText);

    const iconSource = new IconSource(resMap.Open, 16);
    const icon = window.CreateManagedIcon(iconSource);
    button.SetVisual(icon);
    ...
    return true;
});
```
