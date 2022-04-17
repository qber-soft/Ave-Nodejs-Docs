---
id: icon
title: Icon 图标
---

## 简介 {#introduction}

图标对象可以由以下方法创建：

```ts
export interface IWindow extends IControl {
    CreateManagedIcon(icon: IconSource): IIcon;
}

export class IconSource {
    constructor(resId: number, pixelSizeWhen100Percent: number);
}
```

### 资源 ID {#resId}

在使用图标之前，需要先创建 resource map 以获取资源 id：

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

然后它是这样用的：

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
