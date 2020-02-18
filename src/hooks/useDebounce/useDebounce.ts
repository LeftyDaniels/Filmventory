import * as React from 'react';

export type TUseDebounce = () => (delay: number, callback: Function) => void;

export const useDebounce: TUseDebounce = () => {
  let { current: timer } = React.useRef<number | undefined>();

  return (delay, callback) => {
    clearTimeout(timer);
    timer = window.setTimeout(callback, delay);
  };
};

export default useDebounce;
