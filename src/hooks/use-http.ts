import { useState } from 'react';

import { IUseHttp } from '../interfaces';

const useHttp: IUseHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { url, method, headers, body } = requestConfig;

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method ? method : 'GET',
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError((err as Error).message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
