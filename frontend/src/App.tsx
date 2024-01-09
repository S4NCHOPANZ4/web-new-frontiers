import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile/:profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
