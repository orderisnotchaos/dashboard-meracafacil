import React from 'react';
import './App.css';
import Products from './components/Products/Products';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <SideBar />
        <Products />
      </div>
    </React.Fragment>
  );
}

export default App;
