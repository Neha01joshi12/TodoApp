import React from "react";

const Footer = () => {
    return (
        <div className="col">
            <div class="card footer-div" style={{width: "100%", background: "linear-gradient(90deg, rgba(53, 19, 107, 0.843) 49%, rgb(177, 170, 195) 76%, rgb(137, 181, 195) 100%)"}}>
                <div class="card-body">
                    <h5 class="card-title text-white">Footer</h5>
                    <h6 class="card-subtitle mb-2 text-white">Footer subtitle</h6>
                    <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link text-black">Contact Us</a>
                    <a href="#" class="card-link text-black">About Us</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;