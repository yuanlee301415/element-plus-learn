import type { SetupContext} from "vue";
import type { TransferKey, TransferProps, TransferEmit, TransferDataItem } from "@/components/LeTransfer/src/typing";

import {computed, ref, watch} from "vue";
import {UPDATE_MODEL_EVENT} from "@/constants/event";

export const useTransfer = (props: TransferProps, emit: SetupContext<TransferEmit>['emit']) => {
    // const leftItems = ref<Option[]>([]) // 数组中的各项 key 不包含在父组件的 modelValue 中
    const leftItems = computed(() => {
        return props.data?.filter(item => !props.modelValue?.includes(item.key)) ?? []
    })

    // const rightItems = ref<Option[]>([]) // 数组中的各项 key 包含在父组件的 modelValue 中
    const rightItems = computed(() => {
        return props.data?.filter(item => props.modelValue?.includes(item.key)) ?? []
    })

    const leftSelectedKeysModelValue = ref<TransferKey[]>([]) // 左侧面板选中项的 key
    const rightSelectedKeysModelValue = ref<TransferKey[]>([]) // 右侧面板选中项的 key

    watch(leftSelectedKeysModelValue, (value) => {
        console.log('watch>leftSelectedKeysModelValue:', value)
    })
    watch(rightSelectedKeysModelValue, (value) => {
        console.log('watch>rightSelectedKeysModelValue:', value)
    })

    function toRight() {
        const _keys = props.modelValue.concat(leftSelectedKeysModelValue.value)
/*
        console.log('toRight:', {
            leftSelectedKeysModelValue: leftSelectedKeysModelValue.value,
            'latest modelValue': props.modelValue,
            'new modelValue': _keys
        })
*/
        emit(UPDATE_MODEL_EVENT, _keys)
        leftSelectedKeysModelValue.value = []
    }

    function toLeft() {
        const _keys = props.modelValue?.filter(_ => !rightSelectedKeysModelValue.value.includes(_))
/*
        console.log('toLeft:', {
            rightSelectedKeysModelValue: rightSelectedKeysModelValue.value,
            'latest modelValue': props.modelValue,
            'new modelValue': _keys
        })
*/
        emit(UPDATE_MODEL_EVENT, _keys)
        rightSelectedKeysModelValue.value = []
    }

    return {
        leftSelectedKeysModelValue,
        rightSelectedKeysModelValue,
        leftItems,
        rightItems,
        toLeft,
        toRight
    }
}