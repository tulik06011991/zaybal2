import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import AddBook from "./components/AddBook"
import Delete from "./components/Delete"
import Update from "./components/Update"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Component from "./components/Contact"
import Travel from "./components/Travel"
import About from "./components/About"
// import { Link } from "react-router-dom"

// import "bootstrap/dist/css"

function App() {
  return (
    <>
    
    <Navbar/>
      <Routes>
        <Route path="/"  exact element={<Main/>}></Route>
        <Route path="/addbook"   exact element={<AddBook/>}>Qo'shish</Route>
        <Route path="/contact"  exact  element={<Component/>}>Contact</Route>
        <Route path="/about"   exact element={<About/>}>Contact</Route>
        <Route path="/travel"  exact  element={<Travel/>}>Contact</Route>
        <Route path="/update/:id"  exact element={<Update/>}></Route>
        <Route path="/deleted/:id"  exact element={<Delete/>}></Route>
      </Routes >
      <Footer/>
    </>
  );
}

export default App;
