import { lazy } from 'react';

export const LazyFlightsContainer = lazy(() => 
  import('../components/flight-container/FlightsContainer')
);

export const LazyNotFoundPage = lazy(() => 
  import('../components/common/not-found/NotFoundPage')
);
