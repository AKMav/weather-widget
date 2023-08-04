import { ref } from 'vue'
import type { IResponse } from '@/shared/types'

const weatherList = ref<IResponse[]>([
  {
    coord: {
      lon: -0.1257,
      lat: 51.5085
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 20.39,
      feels_like: 20,
      temp_min: 18.39,
      temp_max: 22.6,
      pressure: 1006,
      humidity: 58
    },
    visibility: 10000,
    wind: {
      speed: 2.06,
      deg: 320
    },
    clouds: {
      all: 100
    },
    dt: 1691074988,
    sys: {
      type: 2,
      id: 2075535,
      country: 'GB',
      sunrise: 1691036795,
      sunset: 1691092005
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200
  }
])

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
