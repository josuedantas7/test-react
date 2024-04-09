import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './App'

// styles
import './index.css'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}