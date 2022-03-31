---
id: picture
title: Picture 图片
---

<!-- ## 简介 {#introduction}

TODO：以后添加对图片的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

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

这个例子演示了如何显示一张图片：

![picture basic](./assets/picture-basic.png)

#### API {#api-basic}

```ts
export interface IPicture extends IVisual {
    // 设置图片来源
    SetPicture(rs: ResourceSource): Picture;
}

export class ResourceSource {
    Type: ResourceSourceType = ResourceSourceType.Resource;
    ResourceId: number = 0;
    // 注意：文件路径需要使用\\, 这是这个UI库所要求的路径格式
    FilePath: string = '';

    static FromFilePath(s: string): ResourceSource;
}

export enum ResourceSourceType {
    Resource,
    FilePath,
}
```
