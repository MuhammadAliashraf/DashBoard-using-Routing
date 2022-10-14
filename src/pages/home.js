import { Phone } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../component/navbar'

import '../App.css';
import Cards from '../component/card';

function Home() {
  return (
    <div>
      <Navbar/>
      <div className='Cards'>
      <Grid container >
        <Grid item  >
          <Cards/>
        </Grid>
        <Grid item >
          <Cards/>
        </Grid>
        <Grid item sx={{
          marginTop:5
        }} >
          <Cards/>
        </Grid>
        <Grid item  sx={{
          marginTop:5
        }}>
          <Cards/>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Home
