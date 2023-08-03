import { HTTPClient } from '@/shared/utils/httpClient'

export const getWeatherByQuery = (query: string) => {
  return new HTTPClient().get(
    `${import.meta.env.VITE_HOST}?q=${query}&appid=${import.meta.env.VITE_API_KEY}`
  )
}
