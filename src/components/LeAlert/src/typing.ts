export type AlertProps = {
    title?: string
    type?: 'success' | 'info' | 'warning' | 'error'
    description?: string
    closable?: boolean
    center?: boolean
    closeText?: string
    showIcon?: boolean
    effect?: 'light' | 'dark'
}

