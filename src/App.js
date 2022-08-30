import React from "react";
import ResponsiveAppBar from "./components/Header";
import NYTListContainer from "./components/List/NYTListContainer";


function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <NYTListContainer />

    </div>
  );
}

export default App;
