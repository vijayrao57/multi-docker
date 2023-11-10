import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Otherpage from "./Otherpage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Link to="/">Home</Link>
        <Link to="otherpage">Other</Link>
        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/otherpage" component={Otherpage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
