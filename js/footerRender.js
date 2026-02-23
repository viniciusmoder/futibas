export function footerRender () { //cria a função já exportando ela para ser usada em main.js

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
