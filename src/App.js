import React, { useState, useEffect } from "react";
import './components/List/index.js';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NYTListContainer from "./components/List/NYTListContainer";
import Profile from "./pages/Profile";
// import Followers from "./components/Followers";
import Login from "./components/Login/login";
import CreateAccount from "./components/CreateAccount/createAccount";
import Account from "./pages/Account/Account";
import Api from './utils/Api.js';
import { Helmet } from "react-helmet";
import Dashboard from "./pages/Dashboard/index.js";
import Shelves from "./pages/Shelves/index.js";
// import Shelf from "./components/shelfCarousel/Shelf.js";
// import Form from "./components/BookDetails/Form";

function App() {

  const [user, setUser] = useState({
    id: 0,
    email: ''
  })

  //token information for logged in user
  const [token, setToken] = useState("")
  
  const[isLoggedIn, setisLoggedIn]=useState(false);
  

useEffect (() => {
  authCheck();
  },[])

function authCheck (){
    const storedToken = localStorage.getItem("token");
    Api.checkToken(storedToken).then(res => {
      if (!res.ok) {
        console.log("invalid token!")
        localStorage.removeItem("token")
      }
      else {
        console.log("valid token")
        res.json().then(data => {
          setToken(storedToken)
          setisLoggedIn(true);
          setUser({
            id: data.id,
            email: data.email
          })
        })
      }
    })
  }

  const submitLoginHandle = (email, password) => {
    Api.login(email, password).then(res => {
      if (!res.ok) {
        setUser({ userId: 0, email: "" });
        setToken("")
        console.log('res not ok')
        return;
      }
      return res.json()
    }).then(data => {
      console.log(data.token)
      setUser({
        id: data.user.id,
        email: data.user.email
      })
      setToken(data.token)
      localStorage.setItem("token", data.token)
      setisLoggedIn(true);
      localStorage.setItem("test", 'hello');
    })
  }

  const submitSignUpHandle = (email, password, firstName, lastName, username) => {
    Api.signup(email, password, firstName, lastName, username).then(res => {
      if (!res.ok) {
        setUser({ userId: 0, email: "" });
        setToken("")
        return;
      }
      return res.json()
    }).then(data => {
      console.log(data)
      setUser({
        id: data.user.id,
        email: data.user.email,
      })
      setToken(data.token);
      setisLoggedIn(true);
      localStorage.setItem("token", data.token)

    })
  }


  const logoutClick = () => {
    localStorage.removeItem("token");
    setUser({
      id: 0,
      email: ''
    })
    setToken("")
    setisLoggedIn(false);
  }


  return (
    <div>
      <AppProvider>

    <Helmet>
    <script src=
"https://upload-widget.cloudinary.com/global/all.js" 
    type="text/javascript" />
    </Helmet>
        <Router>
          <Home userId={user.id} logout={logoutClick} isLoggedIn={isLoggedIn}/>
          <Routes>
            {/* book search routes */}
            <Route exact path="/" element={<NYTListContainer />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/book" element={<BookList />} />
            <Route exact path="/book/:id" element={<BookDetails user={user} />} />

            <Route exact path="/users/:id" element={<Profile token={token} user={user} loggedIn={isLoggedIn} />}/>
            <Route exact path="/account" element={<Account user={user} loggedIn={isLoggedIn}/>}/>
            <Route exact path="/dashboard" element={<Dashboard user={user} loggedIn={isLoggedIn}/>}/>
            <Route exact path="/shelf" element={<Shelves user={user} loggedIn={isLoggedIn}/>}/>

          
            <Route exact path="/login" element={<Login userId={user.id} handleLogin={submitLoginHandle} loggedIn={isLoggedIn} />} />
            <Route exact path="/createAccount" element={<CreateAccount handleSignUp={submitSignUpHandle} loggedIn={isLoggedIn} />} />

          </Routes>
        </Router>
      </AppProvider>
    </div>
  )
}


export default App;
