import React from 'react';
import { useInView } from 'react-intersection-observer';

const withScrollAnimation = (WrappedComponent, animationClass) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={inView ? animationClass : 'opacity-0'}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollAnimation;
