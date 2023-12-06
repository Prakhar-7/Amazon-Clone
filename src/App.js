// import { Login } from '@mui/icons-material';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path='/' element={[<Header />,<Home />]}></Route>
          <Route path='/login' element={[<Login />]}></Route>
          <Route path="/checkout" element={[<Header />,<Checkout/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
