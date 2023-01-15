import useSWR from 'swr';
import api from '../api';

export const useFetch = ({ method, query }) => {
  const fetcher = () => api[method](query || '').then((res) => res.data);
  const { data, error } = useSWR(method, fetcher);
  return {
    data,
    error,
    loading: !error && !data,
  };
};
