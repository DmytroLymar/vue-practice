import { useToggle } from './useToggle'

export function useModal() {
  const { state: isOpen, open, close, toggle } = useToggle(false)

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
