import type {ExtractPropTypes, PropType} from "vue";

type TransferKey = keyof any

type Option = {
    key: TransferKey
    label: TransferKey
    disabled: boolean
}

export const transferProps = {
    modelValue: {
        type: Array as PropType<TransferKey[]>
    },
    data: {
        type: Array as PropType<Option[]>
    }
}

export type TransferProps = ExtractPropTypes<typeof transferProps>
