import { Dispatch, SetStateAction, useEffect, useState } from 'react';
export const getValueFromLocalStorage = (
  key: string,
  defaultValue = undefined
) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};
function usePersistedExistState<T>(
  state: T,
  key: string,
) {
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
}

export { usePersistedExistState };
