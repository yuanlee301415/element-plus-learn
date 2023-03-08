Transfer:
```
    type Item = 数据列表里的单个项目对象
    modelValue 属性: 穿梭到右侧的 Item key 列表
    data<Item[]> 属性: 全部 Item 列表
    
```
   

Panel:
```
type PanelItem = extends Item {
    __checked: boolean // 是否已选中
}

data 属性: 父组件传入的其 data 属性的值
panelItems: PanelItem[] 计算属性：
根据父组件的 modelValue 判断当前 PanelItem 的 key 是否包含在父组件的 modelValue 中

```        