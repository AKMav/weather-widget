import { defineCustomElement } from '@/shared/utils/customDefineComponents'
import App from './WeatherApp.ce.vue'
import '@/shared/styles/theme.scss'

customElements.define('weather-widget', defineCustomElement(App))
