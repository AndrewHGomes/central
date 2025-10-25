import { capturar, criar, abrirFecharAside } from "./global.js";

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
