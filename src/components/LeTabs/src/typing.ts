import type { ExtractPropTypes, PropType } from 'vue'
import type Tabs from './index.vue'
import type TabPane from './tab-pane.vue'

import { UPDATE_MODEL_EVENT } from '@/constants/event'

export type TabName = string | number
export type TabLabel = string | number
export type Tab = { name: TabName; label: TabLabel }

export const tabsProps = {
  modelValue: {
    type: String as PropType<TabName>,
    default: ''
  },
  type: {
    type: String as PropType<string | 'card' | 'border-card'>,
    default: ''
  },
  tabPosition: {
    type: String as PropType<string | 'left' | 'right' | 'top' | 'bottom'>,
    default: ''
  }
}

export type TabsProps = ExtractPropTypes<typeof tabsProps>

export const tabsEmit = {
  'tab-click': (tab: Tab, event: Event) => tab.name && event.target,
  [UPDATE_MODEL_EVENT]: (tabName: TabName) => !!tabName
}

export type TabsEmit = typeof tabsEmit

export const tabPaneProps = {
  name: {
    type: [String, Number] as PropType<TabName>,
    default: ''
  },
  label: {
    type: [String, Number] as PropType<TabLabel>,
    default: ''
  }
}

export type TanPaneProps = ExtractPropTypes<typeof tabPaneProps>

export type TabsInstance = InstanceType<typeof Tabs>
export type TabPaneInstance = InstanceType<typeof TabPane>
