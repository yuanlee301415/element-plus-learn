import type { SetupContext } from 'vue'
import type { PanelProps, PanelEmit, TransferKey } from "@/components/LeTransfer/src/typing";

import {computed, ref} from "vue";

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

    function change(key: TransferKey, checked: boolean): void {
        const idx = keys.value?.indexOf(key)
        if (checked && idx === -1) {
            keys.value = [...keys.value, key]
            // keys.value.push(key)
            console.log('change>push>key:', key)
            return
        }
        if (checked === false && idx !== -1) {
            keys.value = keys.value.filter((_, index) => index !== idx)
            console.log('change>remove>key:', key)
            return;
        }
    }

    return {
        keys,
        change
    }
}