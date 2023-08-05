import { ref } from 'vue'

const isVisible = ref(false)

export const useVisibility = () => {
  const close = () => (isVisible.value = false)
  const toggle = () => (isVisible.value = !isVisible.value)

  return {
    isVisible,
    toggle,
    close
  }
}
