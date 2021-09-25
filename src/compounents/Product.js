import React from 'react'
import p_one from "../images/p-1.png";
import p_two from "../images/p-2.png";
import p_three from "../images/p-3.png";
import p_four from "../images/p-4.png";
import p_five from "../images/p-5.png";
import p_six from "../images/p-6.png";
import p_seven from "../images/p-7.png";
import p_eight from "../images/p-8.png";
import p_nine from "../images/p-9.png";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography  } from '@material-ui/core';
import {Button} from "@material-ui/core";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    myBox:{
        Color:"white",
        backgroundColor:"green",
        width:180,
        fontSize:"15px",
        Color:"white",
        
    }
})

const Product = () => {
    const classes = useStyles();
    return (
        <>

            <section class="products" id="products">
            <div className="container">
            <div className="shop_head">
                <h1>LATEST <span className="shop_heading">PRODUCT</span></h1><hr/>
                </div>
                </div>
<div class="container">
<div class="row">


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_one} alt=""/>
            </div>
            <hr/>
            <div class="content">

    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={2.5} size="large" />
      
    </Stack>

    <Typography variant="h3">man's clothing</Typography>
              
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
   </div>
     </div>



<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_three} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={2.5} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_two} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={2.5} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_four} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={2.5} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_five} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={1} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>

<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_six} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={1} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_seven} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={1} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>

<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_eight} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1.5} precision={1.5} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>


<div class="col-12 col-md-4 col-lg-4">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={p_nine} alt=""/>
            </div>
            <hr/>
            <div class="content">
            <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={1} size="large" />
      
    </Stack>
    <Typography variant="h3">man's clothing</Typography>
                <div class="price">$15.99 <span>$18.99</span></div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                                        ADD TO CART
                                        </Button>
            </div>
        </div>
    </div>
     </div>
  </div>
 </div>





     
</div>
</div>
</section>     
        </>
    )
}

export default Product
