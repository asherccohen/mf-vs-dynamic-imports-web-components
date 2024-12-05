import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './app/app';

// import { LazyComponentToConsume } from './app/component-to-consume';
const LazyComponentToConsume = lazy(
  async () => {
    const response = await fetch('http://localhost:4201/main.js');
    const code = await response.text();
    console.log('🚀 ~ loadRemoteModule ~ code:', code);
    // Dynamically evaluate and transform the module
    const module = await import(
      /* webpackIgnore: true */ `data:text/javascript;charset=utf-8,${encodeURIComponent(
        code
      )}`
    );
    return module;
  }
  // .then(
  //   (response) => {
  //     console.log('🚀 ~ response:', response); //elements[getterMethodName]()

  //     // return response.getComponentToExposeElementV1();
  //   }
  // )
);

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
          <div>
            Imported component
            <Suspense fallback={<span>Loading...</span>}>
              {/* <LazyComponentToConsume
                locale={'en'}
                onAddClick={() => console.log('add click')}
              /> */}
              <LazyComponentToConsume
                locale={'en'}
                onAddClick={() => console.log('add click')}
              />
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
