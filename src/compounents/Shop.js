import React from 'react'
import cart from "../images/cat-1.jpg"
import card_second from "../images/cat-2.jpg"
import {Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography  } from '@material-ui/core';


const useStyles = makeStyles({
    myBox:{
        Color:"white",
        backgroundColor:"blue",
        width:150,
        fontSize:"15px",
        Color:"white",
        
    }
})

const Shop = () => {
    const classes = useStyles();

    return (
        <>
            <section className="shop_section">
                <div className="container">
                <div className="shop_head">
                <Typography variant="h1">SHOP BY CATEGORY</Typography>
            <hr/>
                </div>
                    <div className="row">

{/* --------------------------------------left sidebar-------------------------------- */}


                    <div className="col-12 col-md-6 col-lg-6">
                    <div class="card bg-dark shop_card grow">
                        <img class="card-img " src={cart} alt="Card image"/>
                        <div class="card-img-overlay">
                        <Typography variant="h5"> Upto 50% Off</Typography>
                        <Typography variant="h3" pt={3} fontWeight="bold"> For Womens</Typography>
                           
                            
                            <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        Shop Now
                                        </Button>
                        </div>
                        </div>
                    </div>


{/* ---------------------------right side-------------------------------- */}

                    <div className="col-12 col-md-6 col-lg-6">
                    <div class="card bg-dark shop_card grow">
                        <img class="card-img" src={card_second} alt="Card image"/>
                        <div class="card-img-overlay">
                        <Typography variant="h5"> Upto 50% Off</Typography>
                        <Typography variant="h3" pt={3} fontWeight="bold"> For Mens</Typography>
                            <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        Shop Now
                                        </Button>
                        </div>
                        </div>
                    </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop
