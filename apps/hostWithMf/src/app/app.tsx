import * as React from 'react';
import '../styles.css';

export function App({ children }: React.PropsWithChildren) {
  return (
    <div className="p-2">
      <h1>Module Federation Host App</h1>

      <br />
      <hr />
      <br />

      {children}

      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
