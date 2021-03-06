import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div
        style={{
          width: '100vw',
          backgroundColor: 'black',
          height: '100vh',
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      </div>
    )
  );
};
