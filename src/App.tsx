import React from "react";
import { Route, Routes} from 'react-router-dom';
import StatusPage from "./components/StatusPage";
import CardSelector from "./components/cardSelector";
import Checkout from "./components/checkout";
import './App.css';
function App() {

  return(
    <div className="main">
      <div className="center">
        <Routes>
          <Route
            path= '/'
            element={<StatusPage/>} 
          />
          <Route
            path= '/giftcard'
            element={<CardSelector/>} 
          />
          <Route
            path= '/checkout'
            element={<Checkout/>} 
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;
