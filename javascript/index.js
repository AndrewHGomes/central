// ===== Funções de Manipulação de DOM ===== \\
function capturar(seletor, todos = false) {
  if (todos) {
    return document.querySelectorAll(seletor);
  }
  return document.querySelector(seletor);
}

function criar(seletor) {
  return document.createElement(seletor);
}

// ===== Menu Aside ===== \\
function abrirFecharAside() {
  const asideMenu = capturar("#aside-menu");
  const xMark = capturar("#aside-menu .fa-square-xmark");
  const menuFaBars = capturar("#nav-menu .fa-bars");

  menuFaBars.addEventListener("click", () => {
    if (asideMenu.className !== "active") {
      asideMenu.className = "active";
    }
  });

  xMark.addEventListener("click", () => {
    if (asideMenu.className === "active") {
      asideMenu.className = "";
    }
  });
}

// ===== Troca de Filtro do Hero Content ===== \\
function trocarTipoFiltro() {
  const divBuscarPorCodigo = capturar("#espelho #div-buscar");
  const divHeroContent = capturar("#espelho #hero-content");
  const botaoTrocarFiltro = capturar("#btn-trocar-filtro");

  botaoTrocarFiltro.addEventListener("click", (e) => {
    if (divBuscarPorCodigo.style.display === "none") {
      divBuscarPorCodigo.style.display = "flex";
      divHeroContent.style.display = "none";
      e.target.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Buscar Por Filtros`;
    } else {
      divHeroContent.style.display = "flex";
      divBuscarPorCodigo.style.display = "none";
      e.target.innerHTML = `<i class="fa-solid fa-filter"></i> Buscar Por Código`;
    }
  });
}

// ===== Pegar Dados do Filtro ===== \\
function pegarDadosFiltro() {
  const selectsFiltro = capturar("#hero-content select", true);
  const botaoFiltros = capturar("#hero-content button");
  const inputCodigo = capturar("#div-buscar #input-codigo");
  const botaoCodigo = capturar("#div-buscar button");

  botaoFiltros.addEventListener("click", () => {
    const destaque = selectsFiltro[0].value;
    const tipoContrato = selectsFiltro[1].value;
    const cidade = selectsFiltro[2].value;
    const tipoImovel = selectsFiltro[3].value;

    console.log([destaque, tipoContrato, cidade, tipoImovel]);
  });

  botaoCodigo.addEventListener("click", () => {
    const codigoDigitado = inputCodigo.value;

    console.log(codigoDigitado);
  });
}

// ===== Pegar Dados do Filtro ===== \\
function gerenciarOportunidadesDeHoje() {
  const divRolar = capturar("#oportunidades-hoje .rolar");
}

// ===== Chamada das Funções ===== \\
document.addEventListener("DOMContentLoaded", function () {
  abrirFecharAside();
  trocarTipoFiltro();
  pegarDadosFiltro();
  gerenciarOportunidadesDeHoje();
});
