---
id: icon
title: Icon 图标
---

## 简介 {#introduction}

图标对象可以由以下方法创建：

```ts
export interface IWindow extends IControl {
    CreateManagedIcon(icon: IconSource): IIcon;
}

export class IconSource {
    constructor(resId: number, pixelSizeWhen100Percent: number);
}
```

### 资源 ID {#resId}

使用图标，需要加载资源包。资源包则由专门的编译工具创建，同时还会生成资源索引文件，比如：

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

我们通过`ResId`中的枚举值来引用相应资源，例如：[设置按钮图标](/button#example-set-icon)。
