import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid,Tooltip ,Chip} from '@mui/material';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function Data() {
    const [data, setData] = useState([])
    console.log(data)
    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    }, [])
    let navigate=useNavigate();
    let cardDatamove=(e)=>{
        navigate('/singleproduct',{
            state:e
        })
    }



    return (
        <div>
             {/* <Navbar /> */}
        <Container>
            <Grid container sx={{ marginTop: "100px" }} spacing={3}>
                {data.map((e, i) => (
                    <Grid item md={3} xs={12} sm={6} key={i}>
                        <Card onClick={()=>cardDatamove(e)}  className="bgLight" sx={{ maxWidth: 345 }}>
                            <CardMedia>
                                <img src={e.image} width="75%" height="250" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Tooltip title={e.title}>
                                    <Typography
                                        sx={{ height: 60, overflow: "hidden", fontSize: "18px" }}
                                        variant="h6"
                                    >
                                        {e.title.slice(0, 30) +
                                            (e.title.length > 30 ? "..." : "")}
                                    </Typography>
                                </Tooltip>
                                <Chip label={e.category} />
                                <Typography sx={{ fontSize: "16px" }}>
                                    Rs {e.price}/-
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
     </div>
    )
}

export default Data
