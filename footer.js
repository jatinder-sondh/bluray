class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
				<div class="footerContentWrap">
				<footer class="footerWrap footerStyleDark">
					<div class="main footerWidget widget_area">
						<div class="columnsWrap">
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">Address</h3>
								<div class="textwidget">
									<figure class="sc_image sc_image_shape_square">
										<img src="images/logo.png" alt="" />
									</figure>
									<br /> 378 Main Street London England
									<br /> info@blurayconcreting.com.au 
									<br /> +1 (44) 123-45-67
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_nav_menu">
								<h3 class="title">Services</h3>
								<div class="menu-services-container">
									<ul id="menu-services" class="menu">
										<li class="menu-item">
											Excavations Services
										</li>
										<li class="menu-item">
											Soil Removal Services
										</li>
										<li class="menu-item">
											Rock Breaking
										</li>	
										<li class="menu-item">
											Rock Removal
										</li>	
										<li class="menu-item">
											Steel Fixing
										</li>	
										<li class="menu-item">
											<a href="./services.html">View all </a>
										</li>
									</ul>
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">About</h3>
								<div class="textwidget">
									We Can Provide Our Clients with All Types of Concrete Including Plain, Coloured, Exposed
Aggregate, Stencil, Slate as well as Retaining Walls and Earth Excavation Services.
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">Gallery</h3>
								<div class="textwidget">
									<a href="#">
										<figure class="sc_image  sc_image_shape_square">
											<img src="images/250x148.png" alt="" />
										</figure>
									</a>
								</div>
							</aside>
						</div>
					</div>
				</footer>
				<div class="copyWrap">
					<div class="copy main">
						<div class="copyright">&copy; 2022 All Rights Reserved
						</div>
						<div class="copy_socials socPage">
							<ul>
								<li>
									<a class="social_icons icon-tumblr" target="_blank" href="http://twitter.com">
									</a>
								</li>
								<li>
									<a class="social_icons icon-facebook" target="_blank" href="http://facebook.com">
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        `
	}
}


customElements.define('my-footer', MyFooter)