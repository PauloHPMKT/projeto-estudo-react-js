import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TemplateDefault from './Templates/Default'

function App() {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </TemplateDefault>
  )
}

export default App
