function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);



  // Se campoPesquisa for uma string sem nada
  if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  // CORRIGINDO: toLowerCase() estava com erro de digitação (toLoweCase)
  // Transformando toda a string do campo pesquisa em minúscula
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item de dados para construir o HTML
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria uma nova div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    section.innerHTML = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;

  // Caso nenhum resultado seja encontrado
  if (resultados === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
  }
}
