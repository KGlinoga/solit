import React from 'react';
import ResponsiveAppBar from "../../components/header/index";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const SearchHeader = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <ResponsiveAppBar />
            <div className='header-content flex flex-c text-center text-white'>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default SearchHeader