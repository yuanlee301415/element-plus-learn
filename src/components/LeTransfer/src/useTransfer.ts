import type { SetupContext } from "vue";
import type { TransferKey, TransferProps, TransferEmit } from "./typing";

import { computed, ref } from "vue";
import { UPDATE_MODEL_EVENT } from "@/constants/event";
import { Direction } from "./typing";

export const useTransfer = (
  props: TransferProps,
  emit: SetupContext<TransferEmit>["emit"]
) => {
  // 数组中的各项 key 不包含在父组件的 modelValue 中
  const leftItems = computed(() => {
    return (
      props.data?.filter((item) => !props.modelValue?.includes(item.key)) ?? []
    );
  });

  // 数组中的各项 key 包含在父组件的 modelValue 中
  const rightItems = computed(() => {
    return (
      props.data?.filter((item) => props.modelValue?.includes(item.key)) ?? []
    );
  });

  // 左侧面板选中项的 key
  const leftSelectedKeysModelValue = ref<TransferKey[]>([]);

  // 右侧面板选中项的 key
  const rightSelectedKeysModelValue = ref<TransferKey[]>([]);

  function toRight() {
    const _keys = props.modelValue.concat(leftSelectedKeysModelValue.value);

    emit(UPDATE_MODEL_EVENT, _keys);
    emit("change", _keys, Direction.Right, leftSelectedKeysModelValue.value);
    leftSelectedKeysModelValue.value = [];
  }

  function toLeft() {
    const _keys = props.modelValue?.filter(
      (_) => !rightSelectedKeysModelValue.value.includes(_)
    );

    emit(UPDATE_MODEL_EVENT, _keys);
    emit("change", _keys, Direction.Left, rightSelectedKeysModelValue.value);
    rightSelectedKeysModelValue.value = [];
  }

  return {
    leftSelectedKeysModelValue,
    rightSelectedKeysModelValue,
    leftItems,
    rightItems,
    toLeft,
    toRight,
  };
};
