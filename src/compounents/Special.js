import React ,{useState}from 'react'
import content from "../images/counter-img.png"

const Special = () => {

let time = new Date().toLocaleTimeString();

const [ctime ,setCtime]=useState(time);

const updateTime=()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
}

setInterval(updateTime,1000)


    return (
        <>
            
            <section class="products" id="products">
            <div className="container">
            <div className="shop_head">
                <h1>SPECIAL <span className="shop_heading">PRODUCT</span></h1><hr/>
                </div>
                </div>
<div class="container">
<div class="row">


<div class="col-12 col-md-12 col-lg-12">
<div class="swiper-container product-slider gap">
<div class="swiper-wrapper">
    <div class="swiper-slide">
        <div class="slide">
          
          <div className="conatiner">
          <div className="row">

   

          <div className="col-12 col-md-6 col-lg-6">
                <div className="special_info">
                <h3>Upto 50% Off</h3>
                <h2>Deal Of The Day</h2>
                <h1>{ctime}</h1>
                <button type="button" class="special_btn">Shop Now</button>
                </div>
                </div>


          <div className="col-12 col-md-6 col-lg-6">
          <div className="special_img">
         <img src={content} alt="" srcset="" />
        </div>
          </div>
         
            
         
      </div> 
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

export default Special
