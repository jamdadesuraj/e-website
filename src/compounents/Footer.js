import React from 'react'
import payment from "../images/payment.png"

const Footer = () => {
    return (
        <>
            


            <section class="footer">

<div class="footer-container">

    <div class="box-container">

        <div class="box">
            <h3>quick links</h3>
            <a href="/">home</a>
            <a href="/product">products</a>
            <a href="/shop">featured</a>
            <a href="/special">deal</a>
            <a href="/review">review</a>
        </div>

        <div class="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my favorite</a>
            <a href="#">my order</a>
            <a href="#">my cart</a>
        </div>

        <div class="box">
            <h3>donwload links</h3>
            <a href="https://www.microsoft.com/en-in/store/apps/windows">windows store</a>
            <a href="https://www.apple.com/in/app-store/">app store</a>
            <a href="https://store.google.com/in/?hl=en-GB">google store</a>
        </div>

        <div class="box">
            <h3>contact us</h3>
            <a href="#">+123-456-7890</a>
            <a href="#">example@gmail.com</a>
            <a href="#">pune, india - 411052</a>
            <img src={payment} alt="payment-img"/>
        </div>

    </div>

    <div class="credit"> created by <span> mr. Suraj designer </span> | @2021 </div>

</div>

</section>
        </>
    )
}

export default Footer
