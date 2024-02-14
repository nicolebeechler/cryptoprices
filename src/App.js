import { Route, Routes } from "react-router-dom"
import Currencies from './pages/Currencies/Currencies'
import Main from './pages/Main/Main'
import Price from './pages/Price/Price.js'

export default function App() {
    // We will use the Route component to specify each route
    return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
      </div>
    );
  }