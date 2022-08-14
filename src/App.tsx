import './App.css';

import { AppRouter } from './config/AppRouter';

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        I guess we will have a header lol
      </header> */}
      <AppRouter />
    </div>
  );
};

export default App;
