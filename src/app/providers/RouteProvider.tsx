import React, { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FLOW_ROUTE, FORM_ROUTE } from 'src/widgets';

const Forms = lazy(() => import('src/pages/Forms'));
const Flows = lazy(() => import('src/pages/Flows'));

export const RouteProvider: FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path={FORM_ROUTE} Component={Forms} />
        <Route path={FLOW_ROUTE} Component={Flows} />
      </Routes>
    </Suspense>
  );
};
