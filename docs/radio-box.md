---
id: radio-box
title: RadioBox
---

## Examples {#examples}

### Basic {#example-basic}

```ts {4-5,13}
import { Window, RadioBox } from 'ave-ui';

export function main(window: Window) {
    const radioBoxA = new RadioBox(window);
    radioBoxA.SetText('Option A');

    const radioBoxB = new RadioBox(window);
    radioBoxB.SetText('Option B');

    const handleCheck: Parameters<typeof RadioBox.OnCheck>[0] = (sender) => {
        console.log(`${sender.GetText()} onCheck`);
    };
    radioBoxA.OnCheck(handleCheck);
    radioBoxB.OnCheck(handleCheck);

    const container = getControlDemoContainer(window, 2);
    container.ControlAdd(radioBoxA).SetGrid(1, 1);
    container.ControlAdd(radioBoxB).SetGrid(2, 1);
    window.SetContent(container);
}
```

Usage:

![radio-box basic](./assets/radio-box-basic.gif)

In console:

```bash
Option A onCheck
Option B onCheck
Option A onCheck
```

#### API {#api-basic}

```ts
export interface IRadioBox extends IControl {
    // option text
    SetText(text: string): RadioBox;
    GetText(): string;

    // set status: checked or not checked
    SetValue(value: boolean): RadioBox;
    GetValue(): boolean;

    // invoked when checked
    OnCheck(fn: (sender: RadioBox) => void): RadioBox;
}
```
