import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyFlightsContainer, LazyNotFoundPage } from './utils/lazyComponents';
import FallbackLoader from './components/common/fallback-loader/FallbackLoader';

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<FallbackLoader />}>
    <Routes>
      <Route path="/" element={<LazyFlightsContainer />} />
      <Route path="*" element={<LazyNotFoundPage />} />
    </Routes>
  </Suspense>
);
