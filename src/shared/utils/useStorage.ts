import type { IResponse } from '@/shared/types'

const STORAGE_KEY = 'weather-widget-data'

export const getStorageData = (): IResponse[] => {
  const jsonData = localStorage.getItem(STORAGE_KEY)
  return jsonData ? JSON.parse(jsonData) : []
}

export const setDataToStorage = (data: IResponse[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
