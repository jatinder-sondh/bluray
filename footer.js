class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
				<div class="footerContentWrap">
				<footer class="footerWrap footerStyleDark">
					<div class="main footerWidget widget_area">
						<div class="columnsWrap">
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">About</h3>
								<div class="textwidget">
									<figure class="sc_image sc_image_shape_square">
										<img src="images/186x76.png" alt="" />
									</figure>
									<br /> 378 Main Street London England
									<br /> info@themerex.net
									<br /> +1 (44) 123-45-67
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_nav_menu">
								<h3 class="title">Services</h3>
								<div class="menu-services-container">
									<ul id="menu-services" class="menu">
										<li class="menu-item">
											<a href="#">Frozen Pipes</a>
										</li>
										<li class="menu-item">
											<a href="#">Common Repairs</a>
										</li>
										<li class="menu-item">
											<a href="#">Clogged Drains</a>
										</li>
										<li class="menu-item">
											<a href="#">Sewage Backups</a>
										</li>
										<li class="menu-item">
											<a href="#">Plumbing Repairs</a>
										</li>
										<li class="menu-item">
											<a href="#">Camera Inspection</a>
										</li>
										<li class="menu-item">
											<a href="#">System Maintenance</a>
										</li>
										<li class="menu-item">
											<a href="#">Trenchless Pipe</a>
										</li>
										<li class="menu-item">
											<a href="#">Leak Prevention</a>
										</li>
										<li class="menu-item">
											<a href="#">Emergency Services</a>
										</li>
									</ul>
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">newsletter</h3>
								<div class="textwidget">
									Yes, I am interested in receiving the free newsletter which has recent information
									on plumbing and plumbing news for my home and my family. I prefer to receive the
									newsletter.
									<div class="sc_emailer inputSubmitAnimation sFocus rad4 opened">
										<form>
											<input type="text" class="sInput" name="email" value=""
												placeholder="Enter you email">
										</form>
										<a href="#"
											class="sc_button sc_button_style_global sc_button_size_medium roundButton global medium sc_emailer_button searchIcon aIco mail"
											title="Submit" data-group="E-mail collector group">subscribe</a>
									</div>
								</div>
							</aside>
							<aside class="columns1_4 widgetWrap widget widget_text">
								<h3 class="title">Plumbing Service Coupon</h3>
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
						<div class="copyright">&copy; 2015 All Rights Reserved
							<a href="#">Terms of Use</a>
							and
							<a href="#">Privacy Policy</a>
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