import { PropsWithChildren } from 'react';
import '../styles.css';

export function App({ children }: PropsWithChildren) {
  return (
    <div className="p-2">
      <h1>Module Federation Remote App</h1>

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
