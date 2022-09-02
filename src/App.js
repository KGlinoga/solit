import React, {useState, useEffect} from "react";
import './components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/header";
import Modal from "./components/addReview/Modal";
import NYTListContainer from "./components/List/NYTListContainer";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Login from "./components/Login/login";
import CreateAccount from "./CreateAccount/createAccount";




function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <AppProvider>
      <BrowserRouter>
      <Routes>
       <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "/book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
     </Routes>
     </BrowserRouter>
   </AppProvider> 
      <Router>
        <ResponsiveAppBar />
          <Routes>
            <Route path ="/" element={<NYTListContainer />}/>
            <Route path ="profile" element={<Profile />}/>
            <Route path ="followers" element={<Followers/>}/>
            <Route path ="login" element={<Login/>}/>
            <Route path ="createAccount" element={<CreateAccount/>}/>
            {/* <Route path ="account" element={<Account/>}/>
            <Route path ="shelves" element={<Shelf/>}/>
            <Route path ="" element={<Search/>}>
            <Route path ="book" element={<BookPage/>}/> */}
          </Routes>
      </Router>

      <button onClick={() => setOpenModal(true)} 
      className='modalButton'>
        + Add Review
      </button>
        <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)}  />

      

    </div>
  )
  }


export default App;
