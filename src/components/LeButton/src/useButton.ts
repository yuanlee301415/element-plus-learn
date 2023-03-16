import type { SetupContext } from 'vue'
import type { ButtonProps, ButtonEmit } from "@/components/LeButton";

import {computed, inject} from "vue";
import {buttonGroupContextKey} from "@/tokens/button";

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmit>['emit']) => {
    const buttonGroupCtx: Pick<ButtonProps, 'type' | 'size'> = inject(buttonGroupContextKey, {
        type: "",
        size: "",
    });
    console.log('buttonGroupCtx:', buttonGroupCtx)

    const _type = computed(() => props.type || buttonGroupCtx.type);
    const _size = computed(() => props.size || buttonGroupCtx.size);

    const handleClick = (e: Event) => emit("click", e);

    return {
        _type,
        _size,
        handleClick
    }
}