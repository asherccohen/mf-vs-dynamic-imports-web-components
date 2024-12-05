import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export function App({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Host App</h1>

      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
}

export default App;
