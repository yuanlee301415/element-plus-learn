import type {TreeStore} from "./tree-store";

export type TreeNodeData = {
    [key: string]: any
}

export type TreeNodeOptions = {
    data: TreeNodeData,
    store: TreeStore
}

export class TreeNode {
    data: TreeNodeData
    store: TreeStore
    constructor(options: TreeNodeOptions) {
        this.data = options.data
        this.store = options.store
    }
}