---
id: hyper-link
title: HyperLink 超链接
---

<!-- ## 简介 {#introduction}

TODO：以后添加对超链接的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {5-8}
import { Window, Hyperlink } from 'ave-ui';

export function main(window: Window) {
    const hyperLink = new Hyperlink(window);
    hyperLink.SetText(`<https://github.com/>`);
    hyperLink.OnClick((sender, id) => {
        console.log('hyper link clicked');
    });

    const container = getControlDemoContainer(window);
    container.ControlAdd(hyperLink).SetGrid(1, 1);
    window.SetContent(container);
}
```

在这个例子中，我们演示了超链接的基本用法，通常就是一个网络链接，点击它会跳转到对应网页。当然，在例子中我们只是简单输出了 log。

![hyper link basic](./assets/hyper-link-basic.gif)

控制台中有这样的输出：

```bash
hyper link clicked
```

#### API {#api-basic}

```ts
export interface IHyperlink extends IControl {
    // text的格式: 超链接内容需要包裹在<>之中，如<https://github.com/>
    SetText(text: string): Hyperlink;
    GetText(): string;

    OnClick(callback: (sender: Hyperlink, id: number) => void): Hyperlink;
}
```
