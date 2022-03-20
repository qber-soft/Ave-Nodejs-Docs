---
id: input
title: Input 输入框
---

<!-- ## 简介 {#introduction}

TODO：以后添加对输入框的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {7,13}
import { Window, Button } from 'ave-ui';

export function main(window: Window) {
    const button = new Button(window);
    button.SetText('Button');
    button.OnClick((sender) => {
        const commonUi = window.GetCommonUi();
        const label = 'Please input:';
        const placeHolder = 'input here';
        const title = 'Title';
        const value = 'default input';
        const fallback = 'input cancelled';
        const result = commonUi.Input(
            fallback,
            label,
            value,
            placeHolder,
            title,
        );
        console.log(`input result: "${result}"`);
    });

    const container = getControlDemoContainer(window);
    container.ControlAdd(button).SetGrid(1, 1);
    window.SetContent(container);
}
```

在这个例子中，我们演示了输入框的基本用法: 获取用户输入内容。

![input basic](./assets/input-basic.gif)

视频中，点击确认按钮后，控制台有如下输出：

```bash
input result: "default"
```

这正是最终输入框中留下的内容。当我们点击关闭按钮后，控制台有如下输出：

```bash
input result: "input cancelled"
```

这个结果是我们在代码中设置的`fallback`的值，这可以让我们在用户取消输入的时候，获得一个合理的输入内容作为`commonUi.Input`的返回值。

#### API {#api-basic}

```ts
export interface ICommonUi {
    Input(
        fallback: string,
        label: string,
        value: string,
        placeHolder: string,
        title: string,
    ): string;
}
```
