import React from 'react'
import home from "../images/home-img.png"
import {Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const useStyles = makeStyles({
    myBox:{
        Color:"white",
        backgroundColor:"blue",
        width:150,
        fontSize:"15px",
        Color:"white",
        
    }
})

const Home = () => {

    const classes = useStyles();
    return (
        <>
                <section className="home_section">
                <div className="container">
                    <div className="row">
 
 {/* -----------------------------------------left sidebar----------------------------------------- */}


                <div className="col-12 col-md-6 col-lg-6">
                <div className="home_info">
                <h2>Special Offer</h2>
                <h1>SALE UPTO 50% OFF</h1>
               
                </div>
                <Button variant="contained" color="primary" className={classes.myBox}  endIcon={<AddShoppingCartIcon />}>
                       Shop Now
                    </Button>
                </div>








                {/* --------------------------right side -------------------- */}


                <div className="col-12 col-md-6 col-lg-6">
                <div className="home_data">
              <img src={home} alt="" alt="home-img" className="img-fluid"/>
              </div>
                </div>


                    </div>   
                </div>  


            </section>

        </>
    )
}

export default Home
