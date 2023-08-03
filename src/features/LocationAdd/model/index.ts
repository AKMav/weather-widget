import { ref } from 'vue'
import { useWeatherList } from '@/entities/WeatherList'
import type { IResponse } from '@/shared/types'
import { getWeatherByQuery } from '@/shared/api/GetWeatherByQuery'

const query = ref('')
const weatherItemData = ref<IResponse | null>(null)
const loading = ref(false)
const { addWeatherItem } = useWeatherList()

export const useSearchLocation = () => {
  const fetchWeather = async (query: string) => {
    if (!query.length) {
      return
    }
    loading.value = true
    try {
      const res = await getWeatherByQuery(query)
      if (res.ok) {
        const data: IResponse = await res.json()
        weatherItemData.value = data
      }
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const addFetchedItem = (payload: IResponse | null) => {
    if (payload) {
      addWeatherItem(payload)
      weatherItemData.value = null
      query.value = ''
    }
  }

  return {
    query,
    weatherItemData,
    loading,
    fetchWeather,
    addFetchedItem
  }
}
