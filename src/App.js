import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter basename='react_multi_language_example'>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route path='/' element={<Navigate to='/home' replace />} />
              <Route path='/home' element={<Home />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/contactme' element={<ContactMe />} />
            </Routes>
        </header>
        <div className='note'>
          <h2>Distintos idiomas con <span>React Js</span></h2>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
