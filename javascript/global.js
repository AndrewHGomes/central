// ===== Funções de Manipulação de DOM ===== \\
export function capturar(seletor, todos = false) {
  if (todos) {
    return document.querySelectorAll(seletor);
  }
  return document.querySelector(seletor);
}

export function criar(seletor) {
  return document.createElement(seletor);
}

// ===== Menu Aside ===== \\
export function abrirFecharAside() {
  const body = capturar("body");
  const asideMenu = capturar("#aside-menu");
  const xMark = capturar("#aside-menu .fa-square-xmark");
  const menuFaBars = capturar("#nav-menu .fa-bars");

  menuFaBars.addEventListener("click", () => {
    if (asideMenu.className !== "active") {
      body.style.overflowY = "hidden";
      asideMenu.className = "active";
    }
  });

  xMark.addEventListener("click", () => {
    if (asideMenu.className === "active") {
      body.style.overflowY = "auto";
      asideMenu.className = "";
    }
  });
}
