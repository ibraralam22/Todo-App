import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Home Listing Component</h1>} />
          <Route
            path='/register'
            element={<h1>Register Listing Component</h1>}
          />
          <Route path='/login' element={<h1>Login Listing Component</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
