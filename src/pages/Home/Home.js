import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../components/header/index'

const Home = () => {
  return (
    <main>
      <ResponsiveAppBar />
        {/* <SearchHeader /> */}
        <Outlet />
    </main>
  )
}

export default Home