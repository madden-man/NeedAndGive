import logo from './logo.svg';
import './App.css';
import { AppRouter } from './config/AppRouter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        I guess we will have a header lol
      </header> */}
      <AppRouter />
    </div>
  );
}

export default App;
