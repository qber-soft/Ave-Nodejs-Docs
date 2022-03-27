---
id: icon
title: Icon
---

## Introduction {#introduction}

Icon object can be created in this way:

```ts
export interface IWindow extends IControl {
    CreateManagedIcon(icon: IconSource): IIcon;
}

export class IconSource {
    constructor(resId: number, pixelSizeWhen100Percent: number);
}
```

### Resource ID {#resId}

Before using icon, we should load resource package, which is created using dedicated compile tool.

`ResId.ts` file will be generated alongside resource package, and each resource is assigned a unique id.

```ts title=ResId.ts
export enum ResId {
    // 126 files in 'Icon'
    Icon_Clock_png = 0x00000010, // Icon\Clock#0.png
    Icon_Copy_png = 0x00000020, // Icon\Copy#0.png
    Icon_Cut_png = 0x00000030, // Icon\Cut#0.png
    Icon_Delete_png = 0x00000040, // Icon\Delete#0.png
    Icon_Exit_png = 0x00000050, // Icon\Exit#0.png
    Icon_File_png = 0x00000060, // Icon\File#0.png
    ...
}
```

Usage: [Button: Set Icon](/button#example-set-icon)
