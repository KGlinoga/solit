import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../components/header/index'

const Home = (props) => {
  return (
    <div>
      <ResponsiveAppBar userId={props.userId} logout={props.logout} isLoggedIn={props.isLoggedIn}/>
        <Outlet />
    </div>
  )
}

export default Home