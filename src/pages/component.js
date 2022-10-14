import React, { useState } from 'react'
import Navbar from '../component/navbar'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Component() {
  const [list, setlist] = useState([
    {
      id: 1,
      title: "Today User Join",
      volume: 109.95,
      category: "men's clothing",
      location:"Pakistan",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Global Ration",
      volume: 22.3,
      category: "men's clothing",
      location:"India",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Avarage Ration",
      volume: 55.99,
      category: "men's clothing",
      location:"USA",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Yearly Avarage",
      volume: 15.9976878678,
      category: "men's clothing",
      location:"England",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
  ])

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <div>
      <Navbar />
      {
        list.map((e, i) => {
          console.log(e)
          return (
            
            <div className='compo' >
            <Card  sx={{ minWidth: 275, marginLeft: 40, width: 50 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {e.location}
                </Typography>
                <Typography variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Joining ratio {e.volume}
                </Typography>
                <Typography variant="body2">
                  {e.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default Component
