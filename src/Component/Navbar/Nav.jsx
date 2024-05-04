import React from "react";
import './Nav.css'

const Nav = () => {
	return (
		<div>
			<nav class="main-div-section navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand text-white" href="#">NoteList</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarScroll">
						<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': "100px"}}>
							<li class="nav-item">
								<a class="nav-link active text-white" aria-current="page" href="/">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-success" href="/signin">Signin</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled text-white" aria-disabled="true">About Us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav;