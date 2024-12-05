import { ComponentType, lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './app/app';
import { ComponentToConsumeProps } from './app/component-to-consume';

// import { LazyComponentToConsume } from './app/component-to-consume';
const LazyComponentToConsume: React.LazyExoticComponent<
  ComponentType<ComponentToConsumeProps>
> = lazy(
  // () => {
  //   return fetch('http://localhost:4201/main.js')
  //     .then((response) => {
  //       return response
  //         .text()
  //         .then((code) => {
  //           console.log('🚀 ~ loadRemoteModule ~ code:', code);

  //           return import(
  //             /* webpackIgnore: true */
  //             `data:text/javascript;charset=utf-8,${encodeURIComponent(code)}`
  //           )
  //             .then((module) => {
  //               console.log('🚀 ~ .then ~ module:', module?.default);
  //               return {
  //                 default:
  //                   module?.default?.getComponentToExposeElementV1() ||
  //                   module?.getComponentToExposeElementV1(),
  //               };
  //             })
  //             .catch((error) => {
  //               console.error('Failed to LOAD remote component', error);
  //               throw error;
  //             });
  //         })
  //         .catch((error) => {
  //           console.error('Failed to CONVERT remote component', error);
  //           throw error;
  //         });
  //     })
  //     .catch((error) => {
  //       console.error('Failed to FETCH remote component', error);
  //       throw error;
  //     });
  // }

  () =>
    import(/* webpackIgnore: true */ 'http://localhost:4201/main.js')
      .then((module) => {
        console.log('🚀 ~ .then ~ module:', module);
        // Handle potential named exports
        return {
          default: module?.default || module,
          // module?.default?.['5857'] ||
          // // module[Object.keys(module)[0]]['5857'] ||
          // module.default?.['5857'] ||
          // (module.__esModule ? module.default?.['5857'] : module?.['5857']),
        };
      })
      .catch((error) => {
        console.error('Failed to load remote component', error);
        throw error;
      })

  // () =>
  //   import(/* webpackIgnore: true */ 'http://localhost:4201/main.js').then(
  //     (response) => {
  //       console.log('🚀 ~ response:', response); //elements[getterMethodName]()

  //       return response;
  //       // return response.getComponentToExposeElementV1();
  //     }
  //   )
);
console.log('🚀 ~ LazyComponentToConsume:', LazyComponentToConsume);

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
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
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
