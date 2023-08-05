export class HTTPClient {
  async get<T extends RequestInit>(url: string = import.meta.env.VITE_HOST, ...args: T[]) {
    return await fetch(url, { ...args, method: 'GET' })
  }
}
