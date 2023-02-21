import type { InjectionKey, Ref } from "vue";
import type {
  CollapseActiveName,
  CollapseModelValue,
} from "@/components/LeCollapse/src/typing";

export interface CollapseContext {
  activeNames: Ref<CollapseModelValue>;
  handleItemClick: (name: CollapseActiveName) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
