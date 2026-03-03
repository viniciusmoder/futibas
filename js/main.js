import { footerRender, carrosselRender, cardRender, torneioRender } from "./footerRender.js";
import { atletas, torneios } from "./data.js";

carrosselRender();

cardRender (atletas);

torneioRender (torneios);

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