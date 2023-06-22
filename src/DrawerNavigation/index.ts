import NavTemplate from "./templates/Nav";

class DrawerNavigation extends HTMLElement {
    constructor() {
        super();
        const nav = NavTemplate.content;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(nav.cloneNode(true));

        // Set up event listeners
        this.initaliseBurgerIcon();
    }

    connectedCallback() {
        this.setAttribute("is-open", "false");
    }

    initaliseBurgerIcon() {
        const burgerIcon = this?.shadowRoot?.querySelector("#burger-icon");
        burgerIcon?.addEventListener("click", () => {
            const toggleVisibility =
                this.getAttribute("is-open") === "true" ? "false" : "true";
            this.setAttribute("is-open", toggleVisibility);
        });
    }
}

customElements.define("drawer-navigation", DrawerNavigation);

export default DrawerNavigation;
