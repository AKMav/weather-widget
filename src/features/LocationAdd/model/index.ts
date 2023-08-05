import { ref } from 'vue'
import { useWeatherList } from '@/entities/WeatherList'
import type { IResponse } from '@/shared/types'
import { getWeatherByQuery, getWeatherByCoordinate } from '@/shared/api/GetWeather'
import type { IFetchParams } from '../types'

const query = ref('')
const weatherItemData = ref<IResponse | null>(null)
const loading = ref(false)
const error = ref(false)
const { addWeatherItem, weatherList } = useWeatherList()

export const useSearchLocation = () => {
  const fetchWeather = async ({ query, coordinate }: IFetchParams) => {
    if (!query?.length && !coordinate) {
      return
    }

    loading.value = true

    // search by input a location query
    try {
      if (!coordinate && query) {
        const res = await getWeatherByQuery(query)
        if (res.ok) {
          const data: IResponse = await res.json()
          weatherItemData.value = data
          error.value = false
        } else if (res.status > 400) {
          error.value = true
        }
      }

      // search by coordinate
      if (!query && coordinate) {
        const res = await getWeatherByCoordinate(coordinate)
        if (res.ok) {
          const data: IResponse = await res.json()
          weatherItemData.value = data
        }
      }
    } catch (_error) {
      // default log of error, in real project here may be a toasts or other alerts
      console.error(_error)
    } finally {
      loading.value = false
    }
  }

  const addFetchedItem = (payload: IResponse | null) => {
    if (payload && weatherList.value.findIndex((item) => item.id === payload.id) === -1) {
      addWeatherItem(payload)
      weatherItemData.value = null
      query.value = ''
    }
  }

  return {
    query,
    weatherItemData,
    loading,
    error,
    fetchWeather,
    addFetchedItem
  }
}
