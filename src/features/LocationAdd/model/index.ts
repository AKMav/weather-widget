import { ref } from 'vue'
import type { IResponse } from '@/shared/types'
import { getWeatherByQuery } from '@/shared/api/GetWeatherByQuery'

const query = ref('')
const weatherItemData = ref<IResponse>()
const loading = ref(false)

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

export const useSearchLocation = () => {
  return {
    query,
    weatherItemData,
    loading,
    fetchWeather
  }
}
