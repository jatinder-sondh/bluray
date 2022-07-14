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
										<img src="images/186x76.png" alt="" />
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
											<a href="#">Excavations Services</a>
										</li>
										<li class="menu-item">
											<a href="#">Soil Removal Services</a>
										</li>
										<li class="menu-item">
											<a href="#">Rock Breaking & Removal</a>
										</li>
									</ul>
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">About</h3>
								<div class="textwidget">
									Yes, I am interested in receiving the free newsletter which has recent information
									on plumbing and plumbing news for my home and my family. I prefer to receive the
									newsletter.
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
				<!-- ./blackStyle -->
				<div class="copyWrap">
					<div class="copy main">
						<div class="copyright">&copy; 2020 All Rights Reserved
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
								<li>
									<a class="social_icons icon-skype-1" target="_blank" href="#">
									</a>
								</li>
								<li>
									<a class="social_icons icon-youtube-play" target="_blank" href="http://youtube.com">
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