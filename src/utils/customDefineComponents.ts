import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  type Component
} from 'vue'

const nearestElement = (el: HTMLElement | null) => {
  while (el?.nodeType !== 1 && el) {
    el = el.parentElement
  }
  return el
}

export const defineCustomElement = (component: Component) =>
  VueDefineCustomElement({
    setup() {
      const app = createApp({})

      app.mixin({
        mounted() {
          const insertStyles = (styles: any) => {
            if (styles?.length) {
              this.__style = document.createElement('style')
              this.__style.innerText = styles.join().replace(/\n/g, '')
              if (nearestElement) {
                nearestElement(this.$el)?.prepend(this.__style)
              }
            }
          }

          insertStyles(this.$?.type.styles)
          if (this.$options.components) {
            for (const comp of Object.values<any>(this.$options.components)) {
              insertStyles(comp.styles)
            }
          }
        },
        unmounted() {
          this.__style?.remove()
        }
      })

      const inst = getCurrentInstance()
      if (inst) {
        Object.assign(inst.appContext, app._context)
      }

      return () => h(component)
    }
  })
