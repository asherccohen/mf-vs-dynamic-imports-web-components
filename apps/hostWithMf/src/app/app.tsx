import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const RemoteModuleFederation2 = React.lazy(
  () => import('remote-module-federation2/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-module-federation2">RemoteModuleFederation2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="hostWithMf" />} />
        <Route
          path="/remote-module-federation2"
          element={<RemoteModuleFederation2 />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
