import {ref} from "vue";
import {UPDATE_MODEL_EVENT} from "@/constants/event";

export const useTransfer = (props, emit) => {
    const leftItems = ref([]) // 数组中的各项 key 不包含在父组件的 modelValue 中
    const rightItems = ref([]) // 数组中的各项 key 包含在父组件的 modelValue 中

    const leftSelectedKeys = ref([]) // 左侧面板选中项的 key
    const rightSelectedKeys = ref([]) // 右侧面板选中项的 key

    function toRight() {
        emit(UPDATE_MODEL_EVENT, props.modelValue.concat(leftSelectedKeys.value))
        leftSelectedKeys.value = []
    }

    function toLeft() {
        const _keys = props.modelValue.filter(_ => !rightSelectedKeys.value.includes(_))
        emit(UPDATE_MODEL_EVENT, _keys)
        rightSelectedKeys.value = []
    }
    return {
        leftSelectedKeys,
        rightSelectedKeys,
        leftItems,
        rightItems,
        toLeft,
        toRight
    }
}