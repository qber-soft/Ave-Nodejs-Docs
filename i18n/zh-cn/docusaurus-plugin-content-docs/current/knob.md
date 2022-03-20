---
id: knob
title: Knob 旋钮
---

<!-- ## 简介 {#introduction}

TODO：以后添加对旋钮的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {5,7,8-10}
import { Window, Knob, Vec4 } from 'ave-ui';

export function main(window: Window) {
    const knob = new Knob(window);
    knob.SetText('volume');
    const lightBlue = new Vec4(0, 146, 255, 255 * 0.75);
    knob.RingSetColor(lightBlue);
    knob.OnChange((sender) => {
        console.log(`value: ${sender.ValueGet()}`);
    });

    const container = getControlDemoContainer(window, 1, 80, 80);
    container.ControlAdd(knob).SetGrid(1, 1);
    window.SetContent(container);
}
```

在这个例子中，我们演示了旋钮的基本用法，那就是扭它，通过回调获取对应值：

![knob basic](./assets/knob-basic.gif)

控制台有这样的输出：

```bash
value: 0.004
value: 0.013000000000000001
value: 0.019000000000000003
...
```

当旋钮处于默认状态的时候，值为 0，旋一周之后达到最大值 1。

#### API {#api-basic}

```ts
export interface IKnob extends IControl {
    SetText(text: string): Knob;
    GetText(): string;

    RingSetColor(color: Vec4): Knob;
    RingGetColor(): Vec4;

    OnChange(callback: (sender: Knob) => void): Knob;
}
```
