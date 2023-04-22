import type { CollapseItemProps, CollapseActiveName } from './typing'

import { ref, computed, inject, unref } from 'vue'
import { generateId } from '@/utils'
import { collapseContextKey } from '@/tokens/collapse'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)

  const id = ref(generateId())

  const isActive = computed(() =>
    (collapse?.activeNames.value as Array<CollapseActiveName>).includes(props.name)
  )

  function handleItemClick() {
    if (props.disabled) return
    collapse?.handleItemClick(props.name)
  }

  return {
    id,
    isActive,
    handleItemClick
  }
}

export const useCollapseItemDOM = (
  props: CollapseItemProps,
  { isActive, id }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const itemKls = computed(() => ({
    'is-active': unref(isActive),
    'is-disabled': props.disabled
  }))
  const buttonKls = computed(() => ({ 'is-active': unref(isActive) }))
  const iconKls = computed(() => ({ 'is-active': unref(isActive) }))
  const scopedHeadId = `collapse-head--${unref(id)}`
  const scopedContentId = `collapse-content--${unref(id)}`

  return {
    itemKls,
    buttonKls,
    iconKls,
    scopedHeadId,
    scopedContentId
  }
}
