---
id: keyboard
title: Keyboard
---

## Examples {#examples}

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

This example shows how to echo `wsad` when you press it, in console:

```bash
press w
press s
press a
press d
```

#### API {#api-hot-key}

Register hotkey and get ref number to it:

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

Use ref number in callback:

```ts
export type IWindow<T> = {
    OnWindowHotkey(
        fn: (sender: T, nId: number, key: KbKey, n: InputModifier) => void,
    ): T;
};
```
