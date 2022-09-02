import React, {useState, useEffect} from "react";
import './components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";


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
    </div>
  )
  }


export default App;
