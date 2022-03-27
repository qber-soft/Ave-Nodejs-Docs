---
id: picture
title: Picture
---

## Examples {#examples}

### Basic {#example-basic}

```ts {4-5,8}
import { Window, Picture, ResourceSource, AppPath } from 'ave-ui';

export function main(window: Window) {
    const picture = new Picture(window);
    const source = ResourceSource.FromFilePath(
        AppPath.AppPath + '_Debug\\AppRes\\Icon\\Clock#6.png',
    );
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
    // path separator must be \\, this is convension of Ave Lib
    FilePath: string = '';

    static FromFilePath(s: string): ResourceSource;
}

export enum ResourceSourceType {
    Resource,
    FilePath,
}
```
