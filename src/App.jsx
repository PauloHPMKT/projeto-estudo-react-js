import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Customers from './pages/Customers'
import TemplateDefault from './Templates/Default'
import Page from './Templates/Page'



function App() {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Page title="HomePage" Component={Home}/>} />
        <Route path="/customers" element={<Page title="Customers" Component={Customers}/>} />
      </Routes>
    </TemplateDefault>
  )
}

export default App
