import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import App from './app/app';
import { Root } from './app/root';

const router = createBrowserRouter([
  {
    element: (
      <App>
        <div role="navigation">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/contacts">Contacts</Link>
            </li> */}
          </ul>
        </div>

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
            Local React Component
            <div className="flex border-dashed border-2 border-rose-200 p-4">
              <Root />
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
