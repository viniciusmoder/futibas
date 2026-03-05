import {cores, carrossel} from "./data.js"; //importa os dados pro carrossel

 //CARROSSEL

let carrosselIndex = 0; //controla o índice que vai aparecer na tela
let random = []; //armazena o carrossel embaralhado

//função para embaralhar o array
function randomCarossel(arr) { 
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca elementos (destructuring)
  }
  return arr;
}

//Renderiza o carrossel
export function carrosselRender() {
  random = randomCarossel(carrossel); //chama a função para embaralhar
  const carroselContainer = document.querySelector(".carrossel-container"); //encontra o elemento com a classe específica

  if (!carroselContainer) return; //retorna se não achar

  //escreve o primeiro elemento do array randomizado
  carroselContainer.innerHTML += 
  `<div class="flex flex-center gap-large">
    <img class="arrow-left invert" src="assets/arrow.svg" title="seta">
    <p class="texto">${random[carrosselIndex]}</p>
    <img class="arrow-right" src="assets/arrow.svg" title="seta">
  </div>`; 

  arrowEvent(); //chama a função para possíveis cliques
}

function arrowEvent() {
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const carrosselText = document.querySelector('.texto'); //armazena também o texto do carrossel

  if (!leftArrow || !rightArrow) return;

  leftArrow.addEventListener('click', () => {
    if (carrosselIndex==0) carrosselIndex=carrossel.length-1;
    else carrosselIndex--;
    carrosselText.textContent = random[carrosselIndex];
    });

  rightArrow.addEventListener('click', () => {
    if (carrosselIndex===carrossel.length-1) carrosselIndex=0;
    else carrosselIndex++;
    carrosselText.textContent = random[carrosselIndex];
  });
}

//CARDS ATLETAS
export function cardRender (atleta) {
  const cardContainer = document.querySelector(".card-container");

  if (!cardContainer) {
    //console.error("Container de cards não encontrado!");
    return;
  }

  atleta.forEach ((atleta, index) => {
    const atletaCard = document.createElement("div");
    atletaCard.classList.add("card-atleta");
    atletaCard.classList.add("flex");
    atletaCard.classList.add("flex-center");
    atletaCard.classList.add("gap-dynamic");


    const atletaCardColor = cores [index % cores.length];
    atletaCard.style.backgroundColor = `var(${atletaCardColor})`;

    atletaCard.innerHTML = `
      <img class="atleta-token" src="${atleta.imagem.src}" title="${atleta.imagem.title}" alt="${atleta.imagem.alt}">
      <div class="flex flex-center flex-column">
        <p class="atleta-title">${atleta.nome}</p>      
        <p class="atleta-info">${atleta.texto}</p>
      </div>
      `;
      cardContainer.appendChild(atletaCard);
      console.log(atleta.nome);
  });  
}

//cardRender(atletas);

//CARDS TORNEIOS
export function torneioRender (torneio) {
  const cardContainerTorneio = document.querySelector(".card-container-torneio");

  if (!cardContainerTorneio) {
   // console.error("Container do torneio não encontrado!");
    return;
  }

  torneio.forEach ((torneio, index) => {
    const torneioCard = document.createElement("div");
    torneioCard.classList.add("card-torneio");
    torneioCard.classList.add("flex");
    torneioCard.classList.add("flex-center");
    torneioCard.classList.add("gap-dynamic");


    const torneioCardColor = cores [index % cores.length];
    torneioCard.style.backgroundColor = `var(${torneioCardColor})`;

    torneioCard.innerHTML = `
    <div class="flex flex-center gap-dynamic">
      <img class="torneio-token" src="${torneio.cover.src}" alt="${torneio.cover.alt}" title="${torneio.cover.title}">
      <div class="flex flex-center flex-column">
        <p class="torneio-title">${torneio.nome}</p>
        <div class="torneio-text flex-flex-center flex-column">
          <p><strong>${torneio.data}</strong></p>
          <p><strong>Campeão: </strong>${torneio.campeao}</p>
          <p><strong>Melhor Jogador: </strong>${torneio.melhor}</p>
          <p><strong>Artilheiro: </strong>${torneio.artilheiro}</p>
          <p><strong>Líder de Assistências: </strong>${torneio.assistencias}</p>
          <p><strong>Melhor Goleiro: </strong>${torneio.goleiro}</p>
        </div>
      </div>
    </div>
      `;
      cardContainerTorneio.appendChild(torneioCard);
  });  
}

//TABELA
export function tableRender (tabela) {
  const table = document.querySelector(".tabela-container");

  if (!table) {
    console.log("sem tabela");
    return;
  } 

  tabela.forEach((tabela) => {
    const tableRow = document.createElement("tr");
    console.log("teste");

    tableRow.innerHTML += `
      <td>${tabela.nome}</td>
      <td>${tabela.torneios}</td>
      <td>${tabela.titulos}</td>
      <td>${tabela.gols}</td>
      <td>${tabela.assistencias}</td>
      <td>${tabela.melhor}</td>
      <td>${tabela.lider}</td>
      <td>${tabela.goleiro}</td>
    `;
    table.appendChild(tableRow);
  });
}

//FOOTER
export function footerRender () {

const footerContainer = document.querySelector(".footer"); //cria uma variável para armazenar o primeiro elemento com a classe footer que encontrar no documento

if (!footerContainer) return; //caso não encontre, ele sai da função

//aqui ele escreve essas linhas no HTML
footerContainer.innerHTML = `
  <aside class="footer-logo">
  <img src="assets/neifavicon.png" alt="logo">
  <p>Futibas de Quinta<br>Desde 20XX</p>
  </aside>
  <section class="footer-info">
    <p>Github</p>
    <p>Informação</p>
    <p>Informação</p>
    <p>Todas às quintas, às 21:30: um show inesquecível!*</p>
    <p>*talvez um pouco depois das 21:30</p>
    <a href="#top" class="remove-link"><img class="btn-return" src="assets/neifavicon.png" alt="seta" style="transform:rotate(-90deg);"></a>
  </section>
    `;
}

