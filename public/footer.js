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
									<figure class="sc_image sc_image_shape_square" style="background-color: white; padding: 5px; border-radius: 5px">
										<img src="images/logo.svg" alt="" />
									</figure>
									<br /> 77 Trullum Blved Michelham 3064
									<br /> info@blurayconcreting.com.au 
									<br /> 0490 088 332,  0469 016 819 
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
											<img src="images/soil.png" alt="" />
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
						
					</div>
				</div>
			</div>
        `
	}
}


customElements.define('my-footer', MyFooter)