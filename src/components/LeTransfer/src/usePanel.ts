import type { SetupContext } from 'vue'
import type { PanelProps, PanelEmit, TransferKey } from "@/components/LeTransfer/src/typing";

import {computed, ref} from "vue";
import {UPDATE_MODEL_EVENT} from "@/constants/event";

export const usePanel = (props: PanelProps, emit: SetupContext<PanelEmit>['emit']) => {
    const _keys = ref<TransferKey[]>()

    const keys = computed<TransferKey[]>({
        get() {
            console.log('get keys:', {
                '_keys.value': _keys.value,
                'props.modelValue': props.modelValue
            })
            return _keys.value || props.modelValue || []
        },
        set(value) {
            console.log('set keys:', value)
            _keys.value = value
        }
    })

    function change(key: TransferKey, event: Event): void {
        const { checked } = event.target as HTMLInputElement
        const idx = keys.value?.indexOf(key)
        console.warn('change:', {
            key,
            checked,
            idx
        })

        if (checked && idx === -1) {
            keys.value = [...keys.value, key]
            console.log('change>push>key:', key)
        } else if (!checked && idx !== -1) {
            keys.value = keys.value.filter((_, index) => index !== idx)
            console.log('change>remove>key:', key)
        }

        console.log('change>keys:', keys.value)
        emit(UPDATE_MODEL_EVENT, keys.value)
    }

    return {
        keys,
        change
    }
}