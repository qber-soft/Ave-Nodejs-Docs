---
id: clipboard
title: Clipboard
---

## Examples {#examples}

### Basic {#example-basic}

> [examples/unit/clipboard/clipboard-basic.ts](https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/clipboard/clipboard-basic.ts)

This example shows how to read from clipboard:

![clipboard basic](./assets/clipboard-basic.gif)

```ts {7,13}
export function main(window: Window) {
    const clipboard = AveGetClipboard();

    const button = new Button(window);
    button.SetText('Inspect Clipboard');
    button.OnClick((sender) => {
        if (clipboard.HasImage()) {
            const aveImage = clipboard.GetImage();
            const imageData = aveImage.GetImage(0, 0, 0);
            console.log(
                `image found! width: ${imageData.Width} height: ${imageData.Height}`,
            );
        } else if (clipboard.HasFile()) {
            const [file] = clipboard.GetFile();
            console.log(`file found! path: ${file}`);
        } else {
            console.log(`nothing found in clipboard`);
        }
    });

    const container = getControlDemoContainer(window);
    container.ControlAdd(button).SetGrid(1, 1);
    window.SetContent(container);
}
```

When the clipboard is empty, inspect it(press button), you will get this in console:

```bash
nothing found in clipboard
```

After you copy image to clipboard:

```bash
# something like this:
image found! width: 413 height: 169
```

After you copy file:

```bash
file found! path: D:\GitHub\docs\xxx
```

#### API {#api-basic}

```ts
// get global clipboard instance
export function AveGetClipboard(): IClipboard;

export interface IClipboard {
    SetImage(img: AveImage): boolean;
    GetImage(): AveImage;
    HasImage(): boolean;

    SetFile(file: string[]): boolean;
    GetFile(): string[]; // return file paths
    HasFile(): boolean;
}
```

-   `AveImage`: see example in [examples/unit/picture/picture-codec.ts](https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/picture/picture-codec.ts)
