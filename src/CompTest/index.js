class CompTest extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>${this.innerText}</h3>`;
  }
}

customElements.define("comp-test", CompTest);

export default CompTest;
