import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Customers from './pages/Customers'
import TemplateDefault from './Templates/Default'

function App() {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </TemplateDefault>
  )
}

export default App
