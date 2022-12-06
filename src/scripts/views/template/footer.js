class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>Copyright &copy; 2022 <a href="/">Restauranku Apps</a></p>
    </footer>
    `;
  }
}

customElements.define('foot-bar', FooterElement);
