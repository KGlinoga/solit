import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/header";
import Modal from "./components/addReview/Modal";
import NYTListContainer from "./components/List/NYTListContainer";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Login from "./components/Login/login";
import CreateAccount from "./components/CreateAccount/createAccount";
import Api from './utils/Api.js';



function App() {
 
  const[user, setUser]=useState({
      id:0,
      email:''
  })
  //token information for logged in user
  const[token, setToken]= useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    Api.checkToken(storedToken).then(res=>{
      if(!res.ok){
       console.log("invalid token!")
       localStorage.removeItem("token")
      }
      else {
        console.log("valid token")
        res.json().then(data=>{
          setToken(storedToken)
          setUser({
            email:data.email
          })
        })
      }
    })
  },[])

  const submitLoginHandle= (email, password)=>{
    Api.login(email,password).then(res=>{
      if(!res.ok){
        setUser({userId:0,email:""});
        setToken("")
        return;
      }
       return res.json()
    }).then(data=>{
      console.log(data)
      setUser({
        email:data.user.email
      })
      setToken(data.token)
      localStorage.setItem("token",data.token)
     
    })
}

  const submitSignUpHandle= (email, password, name, username)=>{
   Api.signup(email, password, name, username).then(res=>{
    if(!res.ok){
      setUser({userId:0,email:""});
      setToken("")
      return;
    }
     return res.json()
  }).then(data=>{
    console.log(data)
    setUser({
      email:data.user.email,
    })
    setToken(data.token)
    localStorage.setItem("token",data.token)
  })
}

// const logoutClick = ()=>{
//   localStorage.removeItem("token");
//   setUser({
//     id:0,
//     email:''
//   })
//   setToken("")
// }
  
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Router>
        <ResponsiveAppBar />
          <Routes>
            <Route path ="/" element={<NYTListContainer />}/>
            <Route path ="/users/:id" element={<Profile token={token}/>}/>
            <Route path ="/followers" element={<Followers/>}/>
            <Route path ="/login" element={<Login userId={user.id} handleLogin={submitLoginHandle}/>}/>
            <Route path ="/createAccount" element={<CreateAccount handleSignUp={submitSignUpHandle}/>}/>
            <Route path ="*" element={<h1>404 page</h1>}/>
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
