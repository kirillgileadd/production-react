import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/configs/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAtuhData } from 'entities/User';

export const AppRouter = () => {
  const isAuth = useSelector(getUserAtuhData);

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
