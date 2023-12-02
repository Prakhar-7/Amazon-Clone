import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={[<Home />]}></Route>
          <Route path="/checkout" element={[<h1>I am a checkout page</h1>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
