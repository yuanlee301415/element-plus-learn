import type { SetupContext } from "vue";
import type {
  CountdownProps,
  CountdownEmit,
} from "@/components/LeCountdown/src/typing";

import { onUnmounted, ref, watchEffect } from "vue";

export const useCountdown = (
  props: CountdownProps,
  emit: SetupContext<CountdownEmit>["emit"]
) => {
  const displayValue = ref();
  let timer: number | undefined = void 0;

  watchEffect(() => {
    const now = Date.now();

    displayValue.value = (props.value ?? now) - now;
    clearInterval(timer);

    timer = setInterval(() => {
      displayValue.value -= 1000;
      emit("change", displayValue.value);

      if (displayValue.value <= 0) {
        clearInterval(timer);
        emit("finish");
      }
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return {
    displayValue,
  };
};
