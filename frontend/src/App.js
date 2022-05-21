import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
