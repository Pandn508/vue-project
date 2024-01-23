import type { CreateAxiosDefaults, AxiosRequestConfig, ResponseType as AxiosResponseType } from 'axios';

export interface ResponseType<T> {
  code: number; // 具体业务报错， code 为 0 表示没有问题，其它值表示有错误信息，用于具体的服务器返回错误信息展示， 此时 httpcode 为 200
  data: T;
  message: string;
}

export interface CreateAxiosConfig extends CreateAxiosDefaults<any> {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface RequestConfigType extends AxiosRequestConfig {
  showError?: boolean; // default: true 自动提示错误信息 通过 body 内的 code
}

export interface RequestBlobConfigType extends AxiosRequestConfig {
  showError?: boolean;
  responseType: AxiosResponseType; // default: true 自动提示错误信息 通过 body 内的 code
}
