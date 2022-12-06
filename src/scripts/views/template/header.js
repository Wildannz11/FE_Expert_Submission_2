class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton" class="fa fa-bars"></button>
            </div>
            <div class="app-bar__brand">
                <h1>Restaurant Ku</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#/Favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/wildan-mukholad-fauzi-4167b41a5/">About</a></li>
                </ul>
            </nav>
        </header>
      `;
  }
}

customElements.define('head-bar', HeaderElement);
