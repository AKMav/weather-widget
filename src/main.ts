import { defineCustomElement } from 'vue'
import App from './WeatherApp.ce.vue'

customElements.define('weather-widget', defineCustomElement(App))
