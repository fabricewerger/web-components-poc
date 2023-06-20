class CompNav extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <style>
          /* Define variables for your colors */
          :root {
            --color-shades-dark: rgb(25, 25, 25);
            --color-shades-light: rgb(165, 167, 175);
            --color-highlight: rgb(24, 54, 145);
          }
  
          @media (min-width: 48em) {
            nav {
              --nav-button-display: none;
              --nav-position: static;
            }
  
            ul {
              --nav-list-layout: row;
              --nav-list-position: static;
              --nav-list-padding: 0;
              --nav-list-height: auto;
              --nav-list-width: 100%;
              --nav-list-shadow: none;
              --nav-list-transform: none;
              --nav-list-visibility: visible;
            }
          }
  
          /* Use the alternative box model */
          * {
            box-sizing: border-box;
          }
  
          body {
            font-family: Segoe UI, system-ui, -apple-system, sans-serif;
            font-size: 1.6rem;
          }
  
          nav {
            position: var(--nav-position, fixed);
            inset-block-start: 1rem;
            inset-inline-end: 1rem;
          }
  
          /* Remove default list styling and create layout for list */
          ul {
            background: rgb(255, 255, 255);
            box-shadow: var(--nav-list-shadow, -5px 0 11px 0 rgb(0 0 0 / 0.2));
            display: flex;
            flex-direction: var(--nav-list-layout, column);
            flex-wrap: wrap;
            gap: 0.9rem;
            height: var(--nav-list-height, 100vh);
            list-style: none;
            margin: 0;
            padding: var(--nav-list-padding, 2rem);
            position: var(--nav-list-position, fixed);
            inset-block-start: 0; /* Logical property. Equivalent to top: 0; */
            inset-inline-end: 0; /* Logical property. Equivalent to right: 0; */
            width: var(--nav-list-width, min(22rem, 100vw));
            visibility: var(--nav-list-visibility, visible);
          }
  
          @media (prefers-reduced-motion: no-preference) {
            ul {
              transition: transform 0.6s cubic-bezier(.68, -0.55, .27, 1.55), visibility 0.3s linear;
            }
          }
  
          [aria-expanded="false"] + ul {
            transform: var(--nav-list-transform, translateX(100%));
            visibility: var(--nav-list-visibility, hidden);
          }
  
          /* Basic link styling */
          a {
            --text-color: var(--color-shades-dark);
  
            border-block-end: 3px solid var(--border-color, transparent);
            color: var(--text-color);
            padding: 0.1rem;
            text-decoration: none;
          }
  
          /* Change the border-color on :hover and :focus */
          a:where(:hover, :focus) {
            --border-color: var(--text-color);
          }
  
          /* Change border-color and color for the active page */
          [aria-current="page"] {
            --border-color: var(--color-highlight);
            --text-color: var(--color-highlight);
          }
  
          /* Reset button styling */
          button {
            all: unset;
            display: var(--nav-button-display, flex);
            position: relative;
            z-index: 1;
          }
        </style>
  
        <nav aria-label="mainnav">
          <ul role="list">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about-us" aria-current="page">About us</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
  
        <template id="burger-template">
          <button type="button" aria-expanded="false" aria-label="Menu" aria-controls="mainnav">
            <svg width="24" height="24" aria-hidden="true">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
        </template>
      `;

    // JavaScript code to be added
    const nav = this.querySelector("nav");
    const list = nav.querySelector("ul");
    const burgerClone =
      this.querySelector("#burger-template").content.cloneNode(true);
    const button = burgerClone.querySelector("button");

    // Toggle aria-expanded attribute
    button.addEventListener("click", (e) => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isOpen);
    });

    // Hide list on keydown Escape
    nav.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        button.setAttribute("aria-expanded", false);
      }
    });

    // Add the button to the page
    nav.insertBefore(burgerClone, list);
  }
}

customElements.define("comp-nav", CompNav);

export default CompNav;
