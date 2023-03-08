import type { SetupContext } from 'vue'
import type { PanelProps, PanelEmit, TransferKey } from "@/components/LeTransfer/src/typing";

import {computed, ref} from "vue";

export const usePanel = (props: PanelProps, emit: SetupContext<PanelEmit>['emit']) => {
    const _keys = ref<TransferKey[]>()

    const keys = computed<TransferKey[]>({
        get() {
            return _keys.value || props.modelValue || []
        },
        set(value) {
            _keys.value = value
        }
    })

    function change(key: TransferKey, checked: boolean): void {
        const idx = keys.value?.indexOf(key)
        if (checked && idx === -1) {
            // keys.value = [...keys.value, key]
            keys.value.push(key)
            return
        }
        if (checked === false && idx !== -1) {
            keys.value.splice(idx, 1)
        }
    }

    return {
        keys,
        change
    }
}