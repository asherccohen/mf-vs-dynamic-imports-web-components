import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const RemoteModuleFederation = React.lazy(
  () => import('remoteModuleFederation/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remoteModuleFederation">remoteModuleFederation</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route
          path="/remoteModuleFederation"
          element={<RemoteModuleFederation />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
