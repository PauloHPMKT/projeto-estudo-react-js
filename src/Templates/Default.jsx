import Container from '@mui/material/Container'
import Header from "../partials/Header"


const TemplateDefault = ({ children }) => {
  return(
    <>
      <Header />
      
        <Container style={{padding:'15px 0',}}>
          { children }
        </Container>
    </>
  )
}


export default TemplateDefault