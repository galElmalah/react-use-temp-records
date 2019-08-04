import * as React from 'react';
import axios, { AxiosResponse, AxiosError, Method } from 'axios';

interface FetchStates<T> {
  response?: AxiosResponse<T>;
  error: AxiosError | null;
  isFetching: boolean;
}

interface UseFetchOptions<T> {
  method?: Method;
  data?: any;
  fakeData?: any;
  transformer?(data: T): any;
}

const transformDataIfNeeded = (transformer, data) =>
  transformer ? transformer(data) : data;
export function useFetch<T>(
  url: string,
  options: UseFetchOptions<T> = { method: 'GET' },
): FetchStates<T> | any {
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(true);
  const [response, setResponse] = React.useState({});
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      setTimeout(() => {
        setResponse(
          transformDataIfNeeded(options.transformer, options.fakeData),
        );
        setIsFetching(false);
        setError(false);
      }, Math.random() * 1000 + 1000);
    } else {
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
    }
  }, []);

  return { isFetching, error, response };
}
