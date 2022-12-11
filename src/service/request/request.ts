import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class stRequest{
    config: AxiosRequestConfig
    instance: AxiosInstance

    constructor(options){
        this.config =options;
        this.instance = axios.create(options)
        this.instance.interceptors.request.use((config)=>{
            const token = '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'
            if (token) {
                config!.headers!.Authorization = `Bearer ${token}`
            }
            return config
        })
    }

    request<T = any>(config: AxiosRequestConfig): Promise<T> {
        
        return new Promise((resolve, reject) => {
          this.instance
            .request<any, any>(config)
            .then((res) => {
              resolve(res.data)
            })
            .catch((err) => {
              reject(err)
            })
        })
      }
    
      get<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'GET' })
      }
    
      post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'POST' })
      }
    
      delete<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'DELETE' })
      }
    
      patch<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'PATCH' })
      }
}