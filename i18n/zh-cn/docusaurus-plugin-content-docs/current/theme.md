---
id: theme
title: 主题
---

<!-- ## 简介 {#introduction}

TODO：以后添加对主题的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```ts {15,17}
import { Window, Button, ThemeImage, ThemePredefined_Dark } from 'ave-ui';

export interface IThemeManager {
    theme: ThemeImage;
    themeDark: ThemePredefined_Dark;
}

export function main(window: Window, themeManager: IThemeManager) {
    const button = new Button(window);
    button.SetText('Toggling Themes');

    let isDark = false;
    button.OnClick((sender) => {
        if (!isDark) {
            themeManager.themeDark.SetStyle(themeManager.theme, 0); // 切换为暗色主题
        } else {
            themeManager.theme.ResetTheme(); // 重置，切换成明亮主题
        }
        isDark = !isDark;
    });

    const container = getControlDemoContainer(window);
    container.ControlAdd(button).SetGrid(1, 1);
    window.SetContent(container);
}
```

这个例子演示了如何切换主题，各组件的明/暗主题是内置的，只需要整体切换即可：

![toggle theme](./assets/toggle-theme.gif)

其中的`themeManager`是这样创建的：

```ts {3,7,9-10,16}
export function run(main: Function) {
    // ...
    const theme = new ThemeImage();
    if (!theme) process.exit(-1);

    cpWindow.Theme = theme;
    globalThis.theme = theme; // 避免垃圾回收

    const themeDark = new ThemePredefined_Dark();
    globalThis.themeDark = themeDark; // 避免垃圾回收

    const window = new Window(cpWindow);
    globalThis.window = window;

    window.OnCreateContent((sender) => {
        const themeManager = { theme, themeDark };
        main(window, themeManager);
        return true;
    });
    // ...
}
```

<!-- TODO: 完善类型定义 -->

#### API {#api-basic}

```ts
export interface IThemePredefined_Dark {
    SetStyle(theme: IThemeImage, nStyle: number): void;
}

export interface IThemeImage {
    ResetTheme(): void;
}
```
