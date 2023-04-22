import type { StatisticProps } from '@/components/LeStatistic/src/typing'

import { computed } from 'vue'

export const useStatistic = (props: StatisticProps) => {
  const displayValue = computed(() => {
    if (typeof props.formatter === 'function') return props.formatter(props.value)

    if (Number.isNaN(Number(props.value))) return props.value

    let [integer = '', decimal = ''] = String(props.value).split('.')
    decimal = decimal.padEnd(props.precision, '0')
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, props.groupSeparator)

    return [integer, decimal].join(decimal ? '.' : '')
  })

  return {
    displayValue
  }
}
