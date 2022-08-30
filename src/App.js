import React, {useState} from "react";
import './components/List';
import ActionAreaCard from './components/List';
import ResponsiveAppBar from "./components/header";
import Modal from "./components/addReview/Modal";


function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ResponsiveAppBar />

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
