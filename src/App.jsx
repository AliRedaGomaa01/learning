import './App.css'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
