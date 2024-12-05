import { PropsWithChildren } from 'react';
import '../styles.css';

import { Link } from 'react-router-dom';

export function App({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Module Federation Remote App</h1>

      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>

      <br />
      <hr />
      <br />

      {children}
    </div>
  );
}

export default App;
