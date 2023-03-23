import type {TreeNodeData} from "./TreeNode";

import {TreeNode} from "./TreeNode";



export type TreeData = TreeNodeData[]

export type TreeKey = string | number

export type TreeOptions = {
    key?: TreeKey
    data: TreeData
}

export class TreeStore {
    key?: TreeKey
    data: TreeData

    currentNode: TreeNode | null
    currentNodeKey: TreeKey | undefined
    root: TreeNode
    nodesMap: Map<TreeKey, TreeNode>
    constructor(options: TreeOptions) {
        this.key = options.key
        this.data = options.data
        this.currentNode = null
        this.currentNodeKey = void 0
        this.nodesMap = new Map()
        this.root = new TreeNode({
            data: this.data,
            store: this
        })
    }
}