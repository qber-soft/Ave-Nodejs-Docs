---
id: picture
title: Picture
---

## Examples {#examples}

### Basic {#example-basic}

```ts {6,8-9}
import { Window, Picture, ResourceSource } from 'ave-ui';
import * as fs from 'fs';
import * as path from 'path';

export function main(window: Window) {
    const picture = new Picture(window);
    const buffer = fs.readFileSync(path.resolve(__dirname, './Clock#6.png'));
    const source = ResourceSource.FromBuffer(buffer);
    picture.SetPicture(source);

    const container = getControlDemoContainer(window, 1, 300, 300);
    container.ControlAdd(picture).SetGrid(1, 1);
    window.SetContent(container);
}
```

Usage:

![picture basic](./assets/picture-basic.png)

#### API {#api-basic}

```ts
export interface IPicture extends IVisual {
    //
    SetPicture(rs: ResourceSource): Picture;
}

export class ResourceSource {
    Type: ResourceSourceType = ResourceSourceType.Resource;
    ResourceId: number = 0;
    InMemory: InMemoryData = new InMemoryData();

    static FromBuffer(
        buffer: Buffer,
        rowPitch: number = 0,
        slicePitch: number = 0,
    );
}

export enum ResourceSourceType {
    Resource,
    InMemory,
}
```
