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

//CARDS
export function cardRender (atleta) {
  const cardContainer = document.querySelector(".card-container");

  if (!cardContainer) {
    console.error("Container de cards não encontrado!");
    return;
  }

  atleta.forEach ((atleta, index) => {
    const atletaCard = document.createElement("div");
    atletaCard.classList.add("card-atleta");

    const atletaCardColor = cores [index % cores.length];
    atletaCard.style.backgroundColor = `var(${atletaCardColor})`;

    atletaCard.innerHTML = `
      <img class="atleta-token" src="${atleta.imagem.src}" title="${atleta.imagem.title}" alt="${atleta.imagem.alt}">
      <h1 class="title">${atleta.nome}</h1>
      <p class="atleta-info">${atleta.texto}</p>
      `;
      cardContainer.appendChild(atletaCard);
      console.log(atleta.nome);
  });  
}

//cardRender(atletas);
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

