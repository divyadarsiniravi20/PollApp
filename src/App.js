
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/sign' element={<SignUpPage/>}/>
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
      
      
    
    </div>
  );
}

export default App;
