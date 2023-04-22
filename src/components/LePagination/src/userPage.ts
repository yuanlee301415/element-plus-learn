import type { SetupContext } from 'vue'
import type { PageProps, PageEmit } from './typing'

import { reactive, ref, watchEffect } from 'vue'
import { LAYOUTS } from './typing'

type Page = {
  first: number
  prev: boolean
  pages: number[]
  next: boolean
  last: number
}

export const usePage = (props: PageProps, emit: SetupContext<PageEmit>['emit']) => {
  const currentPage = ref(props.currentPage)
  const currentPageSize = ref(props.pageSize || props.defaultPageSize)
  const jumper = ref(props.currentPage)
  const page = reactive<Page>({
    first: 0,
    prev: false,
    pages: [],
    next: false,
    last: 0
  })
  const layouts = props.layout?.split(',')
  const layout = {
    total: layouts?.includes(LAYOUTS.TOTAL as unknown as string),
    sizes: layouts?.includes(LAYOUTS.SIZES as unknown as string),
    prev: layouts?.includes(LAYOUTS.PREV as unknown as string),
    pager: layouts?.includes(LAYOUTS.PAGER as unknown as string),
    next: layouts?.includes(LAYOUTS.NEXT as unknown as string),
    jumper: layouts?.includes(LAYOUTS.JUMPER as unknown as string)
  }

  function updatePage(current: number, total = props.total, pagerCount = props.pagerCount) {
    const _total = Number(props.total)
    console.log('_total:', _total)
    if (Number.isNaN(total) || _total <= 0) return

    let _current = Number(current)
    if (Number.isNaN(_current)) {
      _current = 1
    } else if (_current > _total) {
      _current = _total
    } else if (_current < 1) {
      _current = 1
    }

    const _pagerCount = Number(pagerCount) - 2
    if (Number.isNaN(_pagerCount)) return

    if (page.first === _total) return
    page.first = 1
    page.last = _total

    if (_current < page.first || _current > page.last) return

    const pages: number[] = []
    let cursor = _current - ((_pagerCount / 2) | 0)
    while (cursor < page.last) {
      if (cursor > page.first) {
        pages.push(cursor)
      }
      if (pages.length >= _pagerCount) break
      cursor++
    }

    let diff = pages.length - _pagerCount
    cursor = pages[0]
    while (diff < 0) {
      cursor--
      if (cursor > page.first) {
        pages.unshift(cursor)
      }
      if (pages.length >= _pagerCount) break
      diff++
    }

    page.prev = pages[0] > page.first + 1
    page.next = pages[pages.length - 1] < page.last - 1
    page.pages = pages

    currentPage.value = _current
    emit('update:currentPage', currentPage.value)
  }

  function handlePage(current: number) {
    if (props.disabled) return
    updatePage(current)
  }

  function handlePrev() {
    handlePage(currentPage.value - 1)
  }

  function handleNext() {
    handlePage(currentPage.value + 1)
  }

  function handleChangePageSize(event: Event) {
    console.log(event)
    currentPageSize.value = Number((event.target as HTMLSelectElement).value)
    emit('update:pageSize', currentPageSize.value)
  }

  function handleJumper(event: Event) {
    const value = Number((event.target as HTMLInputElement).value)
    if (Number.isNaN(value)) return

    jumper.value = value
    currentPage.value = value
    emit('update:currentPage', currentPage.value)
  }

  watchEffect(() => {
    console.log('watchEffect:', {
      total: props.total,
      currentPage: props.currentPage
    })
    updatePage(props.currentPage, props.total, props.pagerCount)
  })

  return {
    page,
    currentPage,
    handlePage,
    handlePrev,
    handleNext,
    currentPageSize,
    handleChangePageSize,
    layout,
    jumper,
    handleJumper
  }
}
