const NavTemplate = document.createElement("template");

NavTemplate.innerHTML = `<div>
  <slot name="nav"></slot>
  <div id="burger-icon"></div>
  </div>
`;

export default NavTemplate;
