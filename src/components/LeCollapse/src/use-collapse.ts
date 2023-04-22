import type { SetupContext } from 'vue'
import type { CollapseActiveName, CollapseProps, CollapseEmits } from './typing'

import { provide, ref, watch } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@/constants/event'
import { collapseContextKey } from '@/tokens/collapse'
import { ensureArray } from '@/utils'

export const useCollapse = (props: CollapseProps, emit: SetupContext<CollapseEmits>['emit']) => {
  const activeNames = ref(ensureArray(props.modelValue))

  function setActiveNames(_activeNames: CollapseActiveName[]) {
    const value = props.accordion ? _activeNames[0] : _activeNames
    activeNames.value = _activeNames
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  function handleItemClick(name: CollapseActiveName) {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
      return
    }

    const _activeNames = [...activeNames.value]
    const idx = _activeNames.indexOf(name)
    if (idx === -1) {
      _activeNames.push(name)
    } else {
      _activeNames.splice(idx, 1)
    }
    setActiveNames(_activeNames)
  }

  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  })

  watch(
    () => props.modelValue,
    (val) => {
      activeNames.value = ensureArray(val)
    }
  )

  return {
    activeNames,
    setActiveNames
  }
}
