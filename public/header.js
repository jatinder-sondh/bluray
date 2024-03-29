class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header class="noFixMenu menu_right with_user_menu" id="header">
				<div class="topWrapFixed"></div>
				<div class="topWrap">
					<div class="usermenu_area">
						<div class="main">
							<div class="menu_user_left">
								<div class="menuUsItem menuItemLeft text1_left_side">
									Let's collaborate! &nbsp;
								</div>
								<div class="menuUsItem menuItemLeft text2_left_side">
									<a href="tel:0490 088 332">0490 088 332</a>,&nbsp;
									<a href="tel:0469 016 819">0469 016 819</a>&nbsp;
								</div>
							</div>
							<div class="menu_user_right">
								<div class="menuUsItem menuItemRight text2_right_side">
									<a href="mailto:info@blurayconcreting.com.au">info@blurayconcreting.com.au</a>&nbsp;
								</div>
								<div class="menuUsItem menuItemRight text1_right_side">
									Want an approximate price?&nbsp;
								</div>
							</div>
						</div>
					</div>
					<div class="mainmenu_area">
						<div class="main">
							<div class="logo logo_left">
								<a href="index.html"> 
									<img src="images/logo.svg" width="60%"  class="logo_main" alt="Logo">
									 <img src="images/logo.svg" width="60%"  class="logo_fixed" alt="Logo">
								</a>
							</div>
							<div class="responsiveMenu">
								<a href="#" class="openResponsiveMenu">Menu</a>
							</div>
							<nav class="menuTopWrap topMenuStyleLine">
								<ul id="mainmenu" class="">
									<li class="menu-item">
										<a href="index.html">Home</a>
									</li>
									<li class="menu-item ">
										<a href="about-us.html">About Us</a>
									</li>
									<li class="menu-item columns custom_view_item">
										<a href="services.html">Services</a>
									</li>
									<li class="menu-item">
										<a href="gallery.html">Gallery</a>
									</li>
									<li class="menu-item">
										<a href="career.html">Career</a>
									</li>
									<li
										class="sc_button sc_button_style_global global medium appointment-btn_menu menu-item">
										<a href="contact.html">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
        `
	}
}


customElements.define('my-header', MyHeader)