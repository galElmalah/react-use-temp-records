import * as React from 'react';

export const useListAnimation = (position: number, delay: number) => {
  const [startAnimation, setStateAnimation] = React.useState(false);
  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setStateAnimation(true);
    }, delay * (position + 1));
    return () => clearTimeout(timerId);
  }, []);

  return [startAnimation];
};
