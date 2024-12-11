import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './app/app';
// import { ComponentToConsumeProps } from './app/component-to-consume';

// import { LazyComponentToConsume } from './app/component-to-consume';

const router = createBrowserRouter([
  {
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: '/',
        errorElement: <>There was an error importing the component</>,
        element: (
          <div className="flex flex-col items-center justify-center gap-2 text-foreground">
            Dynamic Imports React Component
            <Suspense fallback={<span>Loading...</span>}>
              {/* <LazyComponentToConsume
                locale={'en'}
                onAddClick={() => console.log('add click')}
              /> */}
            </Suspense>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
