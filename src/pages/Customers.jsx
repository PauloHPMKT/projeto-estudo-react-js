import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerCard from '../components/CustomerCard'
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
    <Grid container> 
    {
      customers.map(item => (
        <Grid item xs={12} md={4} style={{padding: 10,}}>
          <CustomerCard
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
          />
        </Grid>
      ))
    }
    </Grid>
  )
}


export default Customers