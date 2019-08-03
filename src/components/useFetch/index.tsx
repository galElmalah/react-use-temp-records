import * as React from 'react';
import axios, { AxiosResponse, AxiosError, Method } from 'axios';
import { App } from '../App/AppMarketWidgetView/types';

interface FetchStates {
  response?: AxiosResponse<App> | null;
  error: AxiosError | null;
  isFetching: boolean;
}

interface UseFetchOptions {
  method?: Method;
  data?: any;
}

export function useFetch(url: string): FetchStates;
export function useFetch(
  url: string,
  options: UseFetchOptions = { method: 'GET' },
): FetchStates {
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(true);
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    axios
      .request({ url, method: options.method, data: options.data })
      .then(res => {
        setResponse(res);
        setIsFetching(false);
      })
      .catch(err => {
        setError(err);
        setIsFetching(false);
      });
  }, []);

  return { isFetching, error, response };
}
