---
id: tree
title: Tree
---

## Examples {#examples}

### Basic {#example-basic}

```ts {10-15,33,26,18}
import {
    Window,
    Tree,
    TreeInsert,
    TreeGenericHandle,
    TreeItemFlag,
} from 'ave-ui';

export function main(window: Window) {
    const tree = new Tree(window);
    tree.OnSelectionChange((sender) => {
        const handler = sender.ItemGetSelection();
        const treeItem = sender.ItemGet(handler);
        console.log(`select ${treeItem.Text}`);
    });

    const A = new TreeInsert();
    A.Parent = TreeGenericHandle.Root;
    A.After = TreeGenericHandle.Last;
    A.Item.Flag = TreeItemFlag.Text;
    A.Item.Text = 'A';
    const handlerA = tree.ItemInsert(A);

    const B = new TreeInsert();
    B.Parent = handlerA;
    B.After = TreeGenericHandle.Last;
    B.Item.Flag = TreeItemFlag.Text;
    B.Item.Text = 'B';
    tree.ItemInsert(B);

    const C = new TreeInsert();
    C.Parent = handlerA;
    C.After = TreeGenericHandle.First;
    C.Item.Flag = TreeItemFlag.Text;
    C.Item.Text = 'C';
    const handlerC = tree.ItemInsert(C);

    const D = new TreeInsert();
    D.Parent = handlerC;
    D.After = TreeGenericHandle.Last;
    D.Item.Flag = TreeItemFlag.Text;
    D.Item.Text = 'D';
    tree.ItemInsert(D);

    const container = getControlDemoContainer(window, 1, 500, 300);
    container.ControlAdd(tree).SetGrid(1, 1);
    window.SetContent(container);
}
```

Usage:

![tree basic](./assets/tree-basic.gif)

In console:

```bash
select A
select C
select D
select B
```

#### API {#api-basic}

```ts
export interface ITree extends IControl {
    //
    ItemInsert(pInsert: TreeInsert): TreeItemHandle;

    // use handle returned from "ItemInsert"
    ItemGet(pItem: TreeItemHandle): TreeItem;
    // get handle of selected node
    ItemGetSelection(): TreeItemHandle;

    OnSelectionChange(fn: (sender: Tree) => void): Tree;
}

// description of node to insert
export class TreeInsert {
    // parent node
    Parent: TreeItemHandle = 0;
    // about sort algorithm
    After: TreeItemHandle = 0;
    // data of tree node
    Item: TreeItem = new TreeItem();
}

//
export class TreeGenericHandle {
    // get handle of root
    static get Root(): TreeItemHandle;
    //
    // First: this node, ..., ..., ...
    // Last: ..., ..., ..., this node
    static get First(): TreeItemHandle;
    static get Last(): TreeItemHandle;
    static get Sort(): TreeItemHandle;
}

export class TreeItem {
    Flag: TreeItemFlag = TreeItemFlag.None;
    Icon: IconCache = 0;
    // text content of node
    Text: string = '';
    Item: TreeItemHandle = 0;
    Blank: boolean = false;
}
```
