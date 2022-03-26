---
id: message-box
title: MessageBox
---

## Examples {#examples}

### Basic {#example-basic}

```ts {7-14}
import { Window, MessageIcon, MessageButton, Button } from 'ave-ui';

export function main(window: Window) {
    const button = new Button(window);
    button.SetText('Button');
    button.OnClick((sender) => {
        const commonUi = window.GetCommonUi();
        const result = commonUi.Message(
            'Message',
            'This is a message',
            MessageIcon.Infomation,
            MessageButton.YesNo,
            'Title',
        );
        console.log(`message result: ${result}(${MessageResult[result]})`);
    });

    const container = getControlDemoContainer(window);
    container.ControlAdd(button).SetGrid(1, 1);
    window.SetContent(container);
}
```

Usage:

![message box basic](./assets/message-box-basic.gif)

In console:

```bash
message result: 2(Yes)
message result: 3(No)
message result: 0(Default)
```

#### API {#api-basic}

```ts
export interface IWindow extends IControl {
    GetCommonUi(): ICommonUi;
}

export interface ICommonUi {
    /**
     * main: summary of message
     * detail
     * icon
     * buttonType
     * title
     */
    Message(
        main: string,
        detail: string,
        icon: MessageIcon,
        buttonType: MessageButton,
        title: string,
    ): MessageResult;
}

export enum MessageIcon {
    None,
    Infomation,
    Warning,
    Error,
}

export enum MessageButton {
    Ok = 0x01,
    Yes = 0x02,
    No = 0x04,
    Retry = 0x08,
    Cancel = 0x10,
    Close = 0x20,
    OkCancel = Ok | Cancel,
    YesNo = Yes | No,
    YesNoCancel = Yes | No | Cancel,
    RetryCancel = Retry | Cancel,
}

export enum MessageResult {
    Failed,
    Ok,
    Yes,
    No,
    Retry,
    Cancel,
    Close,
    Button,
    Default = Failed,
}
```
