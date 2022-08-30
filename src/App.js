import React, {useState} from "react";
import './components/List';
import ActionAreaCard from './components/List';
import ResponsiveAppBar from "./components/header";
import Modal from "./components/addReview/Modal";
import React from "react";
import ResponsiveAppBar from "./components/Header";
import NYTListContainer from "./components/List/NYTListContainer";


function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ResponsiveAppBar />
      <NYTListContainer />

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
