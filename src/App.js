import React, { useState, useEffect } from "react";
import './components/List/index.js';
import { AppProvider } from './Context';
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


function App() {

  const [user, setUser] = useState({
    id: 0,
    email: ''
  })
  //token information for logged in user
  const [token, setToken] = useState("")

  useEffect(() => {
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
          setUser({
            id: data.id,
            email: data.email
          })
        })
      }
    })
  }, [])

  const submitLoginHandle = (email, password) => {
    Api.login(email, password).then(res => {
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
        email: data.user.email
      })
      setToken(data.token)
      localStorage.setItem("token", data.token)
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
      setToken(data.token)
      localStorage.setItem("token", data.token)

    })
  }
  const submitUpdateAccount = (email, password, firstName, lastName, username) => {
    Api.updateAccount(email, password, firstName, lastName, username).then(res => {
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
      setToken(data.token)
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
  }


  return (
    <div>
      <AppProvider>
        <Router>
          <Home userId={user.id} logout={logoutClick} />
          <Routes>
            {/* book search routes */}
            <Route exact path="/" element={<NYTListContainer />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/book" element={<BookList />} />
            <Route exact path="/book/:id" element={<BookDetails />} />

       
            <Route exact path="/users/:id" element={<Profile token={token} />}/>
            <Route exact path="/users/account/:id" element={<Account token={token} updateAccount={submitUpdateAccount}/>}/>
           

          
            <Route exact path="/login" element={<Login userId={user.id} handleLogin={submitLoginHandle} />} />
            <Route exact path="/createAccount" element={<CreateAccount handleSignUp={submitSignUpHandle} />} />

          </Routes>
        </Router>
      </AppProvider>
    </div>
  )
}


export default App;
