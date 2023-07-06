import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface CountingNumberProps {
  to: number;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ to }) => {
  const { number } = useSpring({
    number: to,
    from: { number: 0 },
    delay: 200,
    config: { duration: 800 },
  });

  useEffect(() => {
    if (to < 0) {
      console.warn('The "to" prop should be a positive number');
    }
  }, [to]);

  return (
    <div>
      <animated.span>{number.to((val:number) => Math.floor(val))}</animated.span>
    </div>
  );
};

export default CountingNumber;
