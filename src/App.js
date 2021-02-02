import logo from './logo-tim.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="TIM" />
        <p>
          Gabarit de base d'une application React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation officielle React
        </a>
      </header>
    </div>
  );
}

export default App;
