import { footerRender, carrosselRender, cardRender, torneioRender, tableRender } from "./footerRender.js";
import { atletas, torneios, tabela } from "./data.js";

carrosselRender();

cardRender (atletas);

torneioRender (torneios);

tableRender (tabela);

footerRender();

const atletaCard = document.querySelectorAll(".card-atleta");
    
console.log("Cards encontrados:", atletaCard.length);
 
if (atletaCard) {
    atletaCard.forEach(card => {
        card.addEventListener("click", function() {
            // Verifica se este card está expandido
            const expanded = this.classList.contains("card-atleta-clique");
            
            // Fecha TODOS os cards (incluindo este se estiver expandido)
            atletaCard.forEach(otherCard => {
                otherCard.classList.remove("card-atleta-clique");
                
                const otherText = otherCard.querySelector(".atleta-info");
                const otherToken = otherCard.querySelector(".atleta-token");
                
                if (otherText) otherText.classList.remove("atleta-info-clique");
                if (otherToken) otherToken.classList.remove("atleta-token-clique");
            });
            
            // Se este card NÃO estava expandido, expande ele
            if (!expanded) {
                this.classList.add("card-atleta-clique");
                
                const text = this.querySelector(".atleta-info");
                const token = this.querySelector(".atleta-token");
                
                if (text) text.classList.add("atleta-info-clique");
                if (token) token.classList.add("atleta-token-clique");
            }
        });
            
        card.style.cursor = "pointer";
    });
}

const torneioCard = document.querySelectorAll(".card-torneio");
    
console.log("Cards encontrados:", torneioCard.length);
 
if (torneioCard) {
    torneioCard.forEach(card => {
        card.addEventListener("click", function() {
            // Verifica se este card está expandido
            const expanded = this.classList.contains("card-torneio-clique");
            
            // Fecha TODOS os cards (incluindo este se estiver expandido)
            torneioCard.forEach(otherCard => {
                otherCard.classList.remove("card-torneio-clique");
                
                const otherText = otherCard.querySelector(".torneio-text");
                const otherToken = otherCard.querySelector(".torneio-token");

                if (otherText) otherText.classList.remove("torneio-text-clique");
                if (otherToken) otherToken.classList.remove("torneio-token-clique");
            });
            
            // Se este card NÃO estava expandido, expande ele
            if (!expanded) {
                this.classList.add("card-torneio-clique");
                
                const text = this.querySelector(".torneio-text");
                const token = this.querySelector(".torneio-token");
                
                if (text) text.classList.add("torneio-text-clique");
                if (token) token.classList.add("torneio-token-clique");
            }
        });
            
        card.style.cursor = "pointer";
    });
}