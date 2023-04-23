import type {InputEmit, InputProps} from './input'
import type {SetupContext} from "vue";
import {ref} from "vue";
import {UPDATE_MODEL_EVENT} from "@/constants/event";

export const useInput = (props: InputProps, emit: SetupContext<InputEmit>['emit']) => {
    const value = ref('')

    const handleInput = (event: Event) => {
        value.value = (event.target as HTMLInputElement).value
        emit(UPDATE_MODEL_EVENT, value.value)
    }

    return {
        handleInput
    }
}