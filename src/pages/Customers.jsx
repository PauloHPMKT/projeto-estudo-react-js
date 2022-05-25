import { useState, useEffect } from "react"
import axios from 'axios'

import CustomerCard from "../components/CustomerCard"
import Grid from '@mui/material/Grid'


const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')   
      .then(res => {
        const { data } = res.data
        setCustomers(data)
      }) 
  }, [])

  return(
    <>
      <Grid container spacing={2}>
        {
          customers.map(card => (
            <Grid item xs={12} md={4}>
              <CustomerCard 
                name={card.first_name}
                lastname={card.last_name}
                email={card.email}
                avatar={card.avatar}
              />
            </Grid>
          ))
        }
      </Grid> 
    </>

  )
}

export default Customers