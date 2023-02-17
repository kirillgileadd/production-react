import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/configs/routerConfig/routerConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);
