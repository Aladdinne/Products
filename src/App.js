// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import AddEmp from "./components/AddProduct";
import Home from "./components/Home";
import {Routes , Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addEmp' element={<AddEmp />}></Route>
        </Routes>
    </div>
  );
}

export default App;
