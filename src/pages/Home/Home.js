import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../components/header/index'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
        <Outlet />
    </div>
  )
}

export default Home