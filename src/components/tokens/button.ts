import type { InjectionKey } from "vue";
import type { ButtonType, ButtonSize } from "@/components/LeButton/button";

export interface ButtonGroupContext {
  type?: ButtonType;
  size?: ButtonSize;
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  "buttonGroupContextKey"
);
