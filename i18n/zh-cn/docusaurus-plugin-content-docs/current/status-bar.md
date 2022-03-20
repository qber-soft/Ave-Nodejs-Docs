---
id: status-bar
title: StatusBar 状态栏
---

<!-- ## 简介 {#introduction}

TODO：以后添加对状态栏的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {7,12-14}
import { Window, StatusBar, DpiSize, Grid } from 'ave-ui';

export function main(window: Window) {
    const statusBar = new StatusBar(window);

    // 状态栏分为3部分：100、100、其余
    statusBar.SetPart([
        DpiSize.FromPixelScaled(100),
        DpiSize.FromPixelScaled(100),
        DpiSize.FromSlice(1),
    ]);
    statusBar.SetText(0, 'feature/status-bar').SetClickable(0, true);
    statusBar.SetText(1, 'Git Graph').SetClickable(1, true);
    statusBar.OnClick((sender, index) => {
        console.log(`index: ${index}`);
    });

    //
    const container = getControlDemoContainer(window);
    container.ControlAdd(statusBar).SetGrid(0, 1);
    window.SetContent(container);
}

export function getControlDemoContainer(window: Window) {
    const container = new Grid(window);
    container.ColAddSlice(1);

    container.RowAddSlice(1);
    container.RowAddDpx(32);
    return container;
}
```

在这个例子中，我们演示了状态栏的基本用法：在底部放置一些可点击的区块，并响应点击事件。

![status bar basic](./assets/status-bar-basic.gif)

同时，控制台将会有这样的输出：

```bash
index: 1
index: 0
```

#### API {#api-basic}

```ts
export interface IStatusBar extends IControl {
    // 设置状态栏布局（有多少区块，每块有多宽）
    SetPart(partWidthList: DpiSize[]): StatusBar;
    GetPart(): DpiSize[];

    SetText(index: number, text: string): StatusBar;
    GetText(index: number): string;

    OnClick(callback: (sender: StatusBar, index: number) => void): StatusBar;
}
```
