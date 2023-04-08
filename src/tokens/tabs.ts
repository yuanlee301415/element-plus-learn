import type { Ref, InjectionKey } from "vue";
import type { Tab, TabName } from "@/components/LeTabs";

export interface TabsContext {
  activeName: Ref<TabName>;
  regTab: (tab: Tab) => void;
}

export const tabsContextKey: InjectionKey<TabsContext> = Symbol("tabs");
