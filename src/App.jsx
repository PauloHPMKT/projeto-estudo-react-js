import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Customers from './pages/Customers'
import TemplateDefault from './templates/Default'
import PageTitle from './templates/PageTitle'

const App = () => {
  return(
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<PageTitle title="Página Inicial" Component={Home} />} />
        <Route path="/customers" element={<PageTitle title="Clientes" Component={Customers}/>} />
      </Routes>
    </TemplateDefault>
  )
}


export default App