import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {

  


    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                   <div className="col-12 col-md-12 col-lg-12">
             
            <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Fashion</a>
  <form class="form-inline ">
      <input class="form-control  " type="search" placeholder="Search"   aria-label="Search" /><i class="fas fa-search"></i>
     
    </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">HOME</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/shop">SHOP</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/product">PRODUCT</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/special">SPECIAL</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/review">REVIEW</Link>
      </li>
     
     
   
    </ul>
   
  </div>
</nav>

</div>
  </div>
  </div>
    </section>

        </>
    )
}

export default Navbar
