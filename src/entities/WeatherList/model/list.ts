import { ref } from 'vue'
import type { IResponse } from '@/shared/types'

const weatherList = ref<IResponse[]>([])

export const useWeatherList = () => {
  const addWeatherItem = (payload: IResponse) => {
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
