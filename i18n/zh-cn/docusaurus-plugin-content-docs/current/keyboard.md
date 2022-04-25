---
id: keyboard
title: 键盘
---

## 例子 {#examples}

### WSAD {#example-wsad}

> [examples/unit/keyboard-event/event-basic.ts](https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/keyboard-event/event-basic.ts)

```ts {3,10}
export function main(window: Window) {
    // hk: hot key
    const hkW = window.HotkeyRegister(KbKey.W, 0);
    const hkS = window.HotkeyRegister(KbKey.S, 0);
    const hkA = window.HotkeyRegister(KbKey.A, 0);
    const hkD = window.HotkeyRegister(KbKey.D, 0);

    window.OnWindowHotkey((sender, nId, key, n) => {
        switch (nId) {
            case hkW:
                console.log('press w');
                break;
            case hkS:
                console.log('press s');
                break;
            case hkA:
                console.log('press a');
                break;
            case hkD:
                console.log('press d');
                break;
        }
    });

    const container = getControlDemoContainer(window);
    window.SetContent(container);
}
```

这个例子演示了对键盘事件的响应：按 wsad，然后输出对应按键到控制台：

```bash
press w
press s
press a
press d
```

#### API {#api-hot-key}

注册快捷键（hotkey），然后获取一个数字来指代这个快捷键：

```ts
export type IWindow<T> = {
	HotkeyRegister(key: KbKey, n: InputModifier): number;
}

export enum KbKey {
	None,

	// Function
	Escape,
	F1,
	F2,
	F3,
	...

	A,
	B,
	C,
	D,
	E,
	F,
	G,
	H,
	I,
	J,
	K,
	L,
	M,
	...
}

export enum InputModifier {
	// Keyboard
	LControl /**/ = 0x00000001,
	LShift /**/ = 0x00000002,
	LMenu /**/ = 0x00000004,
	LSys /**/ = 0x00000008,
	RControl /**/ = 0x00000010,
	...

	// Pointer
	Button1 /**/ = 0x00000100,
	Button2 /**/ = 0x00000200,
	...
}
```

这里`nId`的值都是之前调用`HotkeyRegister`返回的数字。

```ts
export type IWindow<T> = {
    OnWindowHotkey(
        fn: (sender: T, nId: number, key: KbKey, n: InputModifier) => void,
    ): T;
};
```
