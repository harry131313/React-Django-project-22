import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
    {/* <Navbar /> */}
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<Login  />} />
      <Route exact path="/register" element={<Register  />} />

    </Routes>
    </div>
  </BrowserRouter>
    // <div className="App">
    //   <Navbar />
    //   <div className="container">
    //   {/* <Login /> */}
    //   <Register />
    //   </div>
      
    // </div>
    
  );
}

export default App;
