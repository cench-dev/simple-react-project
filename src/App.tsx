
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Ticket from './pages/Ticket/Ticket'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ticket/:id' element={<Ticket />} />
    </Routes>
  </BrowserRouter>
)}

export default App
