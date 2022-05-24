import Container from '@mui/material/Container'
import Header from "../components/Header"

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  spacing: {
    padding: '15px 0',
  }
})

const TemplateDefault = ({ children }) => {
  const classes = useStyles()

  return(
    <>
      <Header />
      <Container className={classes.spacing}>
        { children }
      </Container>
    </>
  )
}

export default TemplateDefault