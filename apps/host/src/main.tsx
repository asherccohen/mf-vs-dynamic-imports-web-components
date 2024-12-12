import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './app/app';
import { ReactComponentToConsume } from './app/component-to-consume';

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
          <div className="flex flex-col gap-4">
            Dynamic Imports React Component (from MF remote)
            <div className="flex border-dashed border-2 border-rose-200 p-4">
              <Suspense fallback={<span>Loading...</span>}>
                {/* TODO: This is the the thing I need to fix */}
                <ReactComponentToConsume
                  locale={'en'}
                  onAddClick={() => console.log('add click')}
                />
              </Suspense>
            </div>
            Dynamic Imports Web Component (from MF remote)
            <div className="flex border-dashed border-2 border-rose-200 p-4">
              <Suspense fallback={<span>Loading...</span>}>
                {/* <WebComponentToConsume
                  locale={'en'}
                  onAddClick={() => console.log('add click')}
                /> */}
              </Suspense>
            </div>
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
