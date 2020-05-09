import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"
import Banner from "../images/banner1.jpg"
const Header = ({ siteTitle }) => (
     <header>
		<div class="top_bar">
			<div class="container">
				<ul>					
					<li>
						<a href="https://www.facebook.com/" ><i class="fa fa-facebook-f"></i></a>
						<a href="https://twitter.com/" ><i class="fa fa-twitter"></i></a>
						<a href="https://www.linkedin.com/" ><i class="fa fa-linkedin-in"></i></a>
						
					</li>
				</ul>
			</div>
			</div>
		<div class="header-section">	
			<div class="container">
				<div class="row">
					<div class="logo">
						        <Link to="/"> 
		<img src={ Logo } alt="Logo" />
          
        </Link>

					</div>
					<div class="lower_bar">
						<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
							<li class="nav-item active"><a class="nav-link" href="/about">About Us</a></li>
							<li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li>
						</ul></div></nav>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-img">
		<img src={ Banner } />
		</div>
	</header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
