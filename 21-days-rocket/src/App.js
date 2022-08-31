import logo from './logo.svg';
import './App.css';
import { Buttons } from './Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>21 dias de código!</code>
        </p>
      </header>
      <Buttons />
    </div>
  );
}

export default App;
