import '../styles.css';
// import { LazyComponentToConsume } from './component-to-consume';

export function App() {
  return (
    <div>
      <h1>Host App</h1>

      {/* <Suspense fallback={<span>Loading...</span>}>
        <LazyComponentToConsume
          locale={'en'}
          onAddClick={() => console.log('add click')}
        />
      </Suspense> */}
    </div>
  );
}

export default App;
