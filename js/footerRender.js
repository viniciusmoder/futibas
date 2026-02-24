import {carrossel} from "./data.js"; //importa os dados pro carrossel

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
  const random = randomCarossel(carrossel); //chama a função para aleatorizar
  const carroselContainer = document.querySelector(".carrossel-container"); //encontra o elemento com a classe específica

  if (!carroselContainer) return; //retorna se não achar

  carroselContainer.innerHTML += `<p class="carrossel">${random[0]}</p>`; //escreve o primeiro elemento do array randomizado
}

//função para renderizar o footer
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
  </section>
    `;
}
