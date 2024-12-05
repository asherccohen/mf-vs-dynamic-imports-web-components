import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const remoteModuleFederation = React.lazy(
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
          <Link to="/remote-module-federation2">remoteModuleFederation</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="hostWithMf" />} />
        <Route
          path="/remote-module-federation2"
          element={<remoteModuleFederation />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
