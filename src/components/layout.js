/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./bootstrap.min.css"
import Logo from "../images/logo.png"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main><div class="container">{children}</div></main>
        <footer>

  <div class="footer-section">
	<div class="container">
		<div class="row">
			<div class="col-sm-4 footer1"><figure class="image"><img src={ Logo } alt="The Code Practice" / ></figure>
			<p></p>
			</div>
			<div class="col-sm-3 footer1">
			<h2>About Me</h2>
			<p><a href="/about">I’m a writer, blogger and seriously passionate about development and looking the best while doing it!</a></p>
			</div>
			<div class="col-sm-3 footer1">
			<h2>Menus</h2>
			<ul><li><a class="navbar-item" href="/home">Blog</a></li><li><a class="navbar-item" href="/contact">Contact me</a></li></ul>
			</div>
			<div class="col-sm-2 footer1"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Message Me</button></div>
		</div>
	</div>
		<div class="bottom-footer">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 left-menu">
					<ul><li>The Code Practice © 2020</li><li><a class="navbar-item" href="/privacy-policy">Privacy Policy</a></li><li><a class="navbar-item" href="/terms-and-conditions">Terms and Conditions</a></li></ul>
					</div>
				<div class="col-sm-4 right-menu">
					<ul>
					<li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
					<li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
					<li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
					<li><a href="#"><i class="fas fa-wifi"></i></a></li>
					</ul>
				</div>
				</div>
			</div>
		</div>
</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
