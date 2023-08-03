export class HTTPClient {
  post<T extends RequestInit>(url: string = import.meta.env.VITE_HOST, ...args: T[]) {
    return fetch(url, { ...args, method: 'POST' })
  }
  get<T extends RequestInit>(url: string = import.meta.env.VITE_HOST, ...args: T[]) {
    return fetch(url, { ...args, method: 'GET' })
  }
}
