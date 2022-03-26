---
id: rich-list-box
title: RichListBox
---

## Examples {#examples}

### Basic {#example-basic}

```ts
import {
    Window,
    RichListBoxItemVirtual,
    Grid,
    RichListBox,
    HeaderItem,
    HeaderItemFormat,
    DpiSize,
} from 'ave-ui';

export function main(window: Window) {
    const richListBox = new RichListBox(window);

    // create columns
    const headers = [
        {
            name: 'ID',
            align: HeaderItemFormat.Center,
            size: DpiSize.FromPixelScaled(200),
        },
        {
            name: 'Name',
            align: HeaderItemFormat.Center,
            size: DpiSize.FromPixelScaled(200),
        },
    ];
    headers.forEach((header) => {
        const headerItem = new HeaderItem(
            header.align,
            header.name,
            header.size,
        );
        richListBox.GetHeader().Add(headerItem);
    });

    // set data
    const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
        { id: 5, name: 'e' },
        { id: 6, name: 'f' },
    ];
    richListBox.SetVirtual((sender, rowIndex, headerIndex) => {
        const item = new RichListBoxItemVirtual();
        const itemData = data[rowIndex];
        switch (headerIndex) {
            case 0:
                item.String = itemData.id.toString();
                break;
            case 1:
                item.String = itemData.name;
                break;
        }
        return item;
    });
    richListBox.ItemSetCount(data.length);

    // handle event
    richListBox.OnSelectionEnd((sender) => {
        const itemIndex = sender.ItemGetSelection();
        console.log(itemIndex);
    });

    //
    const container = getControlDemoContainer(window);
    container.ControlAdd(richListBox).SetGrid(1, 1);
    window.SetContent(container);
}

function getControlDemoContainer(window: Window, count = 1) {
    const container = new Grid(window);
    container.ColAddSlice(1);
    container.ColAddDpx(...Array.from<number>({ length: count }).fill(410));
    container.ColAddSlice(1);

    container.RowAddSlice(1);
    container.RowAddDpx(...Array.from<number>({ length: count }).fill(300));
    container.RowAddSlice(1);
    return container;
}
```

This example shows the basic usage of rich list box:

![rich list box basic](./assets/rich-list-box-basic.gif)

In console:

```bash
0
2
4
```

This example is a bit complex, however, the skeleton is clear.

Create columns and you can see the basic structure of the list:

```ts {17}
...
const headers = [
  {
	name: 'ID',
	align: HeaderItemFormat.Center,
	size: DpiSize.FromPixelScaled(200),
  },
  {
	name: 'Name',
	align: HeaderItemFormat.Center,
	size: DpiSize.FromPixelScaled(200),
  },
];

headers.forEach((header) => {
  const headerItem = new HeaderItem(header.align, header.name, header.size);
  richListBox.GetHeader().Add(headerItem);
});
...
```

Prepare data for columns you add, in this example, they are `ID` and `Name`.

```ts {11,25}
...
const data = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'},
  {id: 4, name: 'd'},
  {id: 5, name: 'e'},
  {id: 6, name: 'f'},
];

richListBox.SetVirtual((sender, rowIndex /* index of row */, headerIndex /* index of column */) => {
  const item = new RichListBoxItemVirtual();
  const itemData = data[rowIndex];
  switch (headerIndex) {
	case 0:
	  item.String = itemData.id.toString();
	  break;
	case 1:
	  item.String = itemData.name;
	  break;
  }
  return item;
});

richListBox.ItemSetCount(data.length);
...
```

Note: index is 0-based.

Set data in callback and use `ItemSetCount` to set number of rows you want to display.

Print selected row index in console:

```ts
...
richListBox.OnSelectionEnd((sender) => {
  const itemIndex = sender.ItemGetSelection();
  console.log(itemIndex);
});
...
```

#### API {#api-basic}

Add `HeaderItem`:

```ts
export interface IRichListBox extends IControl {
    GetHeader(): Header;
}

export class Header extends (AveLib.UiHeader as IHeader) {}
export interface IHeader extends IControl {
    Add(item: HeaderItem): Header;
}
```

Set data:

```ts
export interface IRichListBox extends IControl {
    // use row index and column index(headerIndex) to find and set data of each item
    SetVirtual(
        callback: (
            sender: RichListBox,
            rowIndex: number,
            headerIndex: number,
        ) => RichListBoxItemVirtual,
    ): RichListBox;

    //
    ItemSetCount(rowCount: number): RichListBox;
}

export class RichListBoxItemVirtual {
    // text content of list item
    String: string = '';
}
```

Handle event:

```ts
export interface IRichListBox extends IControl {
    OnSelectionEnd(callback: (sender: RichListBox) => void): RichListBox;
}
```
