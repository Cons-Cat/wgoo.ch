class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
	<body class="intro-body">
	<div class="intro-blurb">
	  Welcome to my website!
	</div>
  </body>

  <header class="site-header">
	<div class="wrapper site-header__wrapper">
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	  <div class="header-divider"></div>
	  <div class="header-item">Item</div>
	</div>
  </header>
`;
	}
}

customElements.define('header-component', Header);
