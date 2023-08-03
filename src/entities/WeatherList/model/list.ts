import { ref } from 'vue'
import type { IWeatherItem } from '@/shared/types'

const weatherList = ref<IWeatherItem[]>([
  {
    id: 1,
    city: 'City',
    country: 'Country',
    temp: 20
  },
  {
    id: 2,
    city: 'City',
    country: 'Country',
    temp: 20
  },
  {
    id: 3,
    city: 'City',
    country: 'Country',
    temp: 20
  }
])

export const useWeatherList = () => {
  const addWeatherItem = (payload: IWeatherItem) => {
    weatherList.value = [...weatherList.value, payload]
  }

  const removeWeatherItem = (id: number) => {
    weatherList.value = [...weatherList.value].filter((item) => item.id !== id)
  }

  return {
    weatherList,
    addWeatherItem,
    removeWeatherItem
  }
}
