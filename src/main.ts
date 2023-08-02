import { defineCustomElement } from './utils/customDefineComponents'
import App from './WeatherApp.ce.vue'

customElements.define('weather-widget', defineCustomElement(App))
