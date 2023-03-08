import {computed, ref} from "vue";
import {props} from "@/components/_Template/src/typing";

export const usePanel = (props, emit) => {
    const _keys = ref([])

    const keys = computed({
        get() {
            return props.modelValue
        },
        set() {

        }
    })

    function setKeys() {

    }

    return {
        keys,
        setKeys
    }
}