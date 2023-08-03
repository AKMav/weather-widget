import { HTTPClient } from '@/shared/utils/httpClient'
const client = new HTTPClient()

export const getWeatherByQuery = (query: string) => {
  return client.get(`${import.meta.env.VITE_HOST}?q=${query}&appid=${import.meta.env.VITE_API_KEY}`)
}
