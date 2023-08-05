import { ref, watch } from 'vue'
import type { IResponse } from '@/shared/types'
import { getStorageData, setDataToStorage } from '@/shared/utils/useStorage'

const weatherList = ref<IResponse[]>(getStorageData())

watch(weatherList, (newList) => {
  setDataToStorage(newList)
})

export const useWeatherList = () => {
  const addWeatherItem = (payload: IResponse) => {
    weatherList.value = [payload, ...weatherList.value]
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
