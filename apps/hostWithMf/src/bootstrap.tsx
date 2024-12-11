import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import App from './app/app';

const RemoteReactComponent = lazy(
  () => import('remoteModuleFederation/Module')
);

const router = createBrowserRouter([
  {
    element: (
      <App>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/remoteModuleFederation">remoteModuleFederation</Link>
          </li> */}
        </ul>

        <br />
        <hr />
        <br />

        <Outlet />
      </App>
    ),
    children: [
      {
        path: '/',
        errorElement: <>There was an error importing the component</>,
        element: (
          <div className="flex flex-col gap-4">
            Module Federated React Component
            <div className="flex border-dashed border-2 border-rose-200 p-4">
              <Suspense fallback={<span>Loading...</span>}>
                <RemoteReactComponent />
              </Suspense>
            </div>
            Dynamic Import React Component
            <div className="flex border-dashed border-2 border-rose-200 p-4">
              <Suspense fallback={<span>Loading...</span>}>
                {/* <RemoteReactComponent /> */}
              </Suspense>
            </div>
          </div>
        ),
      },
      // {
      //   path: '/contacts',
      //   errorElement: <>There was an error importing the component</>,
      //   element: <div>This is the generated Contacts route</div>,
      // },
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
