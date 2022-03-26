---
id: list-box
title: ListBox 列表框
---

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {5-10}
import { Window, ListBox } from 'ave-ui';

export function main(window: Window) {
    const listBox = new ListBox(window);
    listBox.Append('a');
    listBox.Append('b');
    listBox.Append('c');
    listBox.OnSelectionEnd((sender) => {
        console.log(sender.GetSelection());
    });

    const container = getControlDemoContainer(window, 1, 200, 300);
    container.ControlAdd(listBox).SetGrid(1, 1);
    window.SetContent(container);
}
```

在这个例子中，我们演示了列表框的基本用法：显示一系列可选项，点击，通过回调拿到选择项的索引（index）。

![list box basic](./assets/list-box-basic.gif)

控制台中有这样的输出：

```bash
0
1
2
```

#### API {#api-basic}

```ts
export interface IKnob extends IControl {
    Append(text: string): ListBox;
    OnSelectionEnd(callback: (sender: ListBox) => void): ListBox;
    GetSelection(): number;
}
```
