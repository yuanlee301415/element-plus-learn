import type { SetupContext } from 'vue'
import type { PanelProps, PanelEmit, TransferKey } from "@/components/LeTransfer/src/typing";

import {computed, ref, toRefs, watchEffect} from "vue";
import {UPDATE_MODEL_EVENT} from "@/constants/event";

export const usePanel = (props: PanelProps, emit: SetupContext<PanelEmit>['emit']) => {
/*
    const _keys = ref<TransferKey[]>()

    const keys = computed<TransferKey[]>({
        get() {
            return props.modelValue || []
        },
        set(value) {
            // console.log('set keys:', value)
            _keys.value = value
        }
    })
*/
    const keys = ref<TransferKey[]>()
    const selectedAll = ref(false)
    const query = ref('')

    const isEmpty = computed(() => !(props.items && props.items.length))
    const filteredItems = computed(() => (props.filterMethod ? props.items?.filter(_ => props.filterMethod?.(query.value, _)) : props.items) ?? [])

    watchEffect(() => {
        keys.value = props.modelValue
        selectedAll.value = !!props.modelValue?.length
    })


    function change(key: TransferKey, event: Event): void {
        const { checked } = event.target as HTMLInputElement
        const idx = keys.value?.indexOf(key)
        console.warn('change:', {
            key,
            checked,
            idx,
            keys: keys.value,
        })

        if (checked && idx === -1) {
            console.log('change>push>key:', key)
            keys.value = [...keys.value!, key]
        } else if (!checked && idx !== -1) {
            console.log('change>remove>key:', key)
            keys.value = keys.value!.filter((_, index) => index !== idx)
        }

        console.log('change>emit>keys:', keys.value)
        emit(UPDATE_MODEL_EVENT, keys.value!)
    }

    function changeAll(event: Event) {
        const { checked } = event.target as HTMLInputElement
        console.log('selectedAll.value:', selectedAll.value)
        if (checked) {
            keys.value = filteredItems.value.filter(_ => !_.disabled).map(_ => _.key)
        } else {
            keys.value = []
        }

        console.log('selectedAll>keys:', keys.value)
        selectedAll.value = !!keys.value?.length
        emit(UPDATE_MODEL_EVENT, keys.value!)
    }

    return {
        keys,
        isEmpty,
        selectedAll,
        change,
        changeAll,
        query,
        filteredItems
    }
}