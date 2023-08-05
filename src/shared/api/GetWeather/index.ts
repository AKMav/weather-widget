import { HTTPClient } from '@/shared/utils/httpClient'
const client = new HTTPClient()

import type { ICoordinate } from '@/shared/types'

export const getWeatherByQuery = async (query: string) => {
  return client.get(
    `${import.meta.env.VITE_HOST}?q=${query}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
  )
}

export const getWeatherByCoordinate = ({ lon, lat }: ICoordinate) => {
  return client.get(
    `${import.meta.env.VITE_HOST}?lon=${lon}&lat=${lat}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  )
}
