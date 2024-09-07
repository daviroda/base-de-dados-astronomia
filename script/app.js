function Buscar() {
    
let resultado = document.getElementById("res");

let campoPesquisa = document.getElementById("campo-pesquisa").value
    
// se campoPesquisa for igual a nenhuma informação
if (!campoPesquisa) {
    window.alert("Não foi possivel pesquisa! Por favor digite uma infomação.")
    return
};

campoPesquisa = campoPesquisa.toLowerCase()

let resutadoatribuido = "";
let titulo = "";
let descricao = "";
let tags = "";

//repetição dados planeta
for (let dado of dadosplanetas) {
    //transformar em minusculas
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resutadoatribuido += `
        <div class="item-res">
            <h2>
                <a href="#">${dado.titulo}</a>
            </h2>
            <p class="descricao-dados">
            ${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        </div> `
    }
    }
 
    //repetição dados galaxias
    for (let dado of galaxias) {
        //transformar em minusculas
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           resutadoatribuido += `
           <div class="item-res">
           <h2>
               <a href="#">${dado.titulo}</a>
           </h2>
           <p class="descricao-dados">
           ${dado.descricao}
           </p>
           <p>Descoberta em: ${dado.anodadescoberta}
           </p>
           </div> `
       } 
   }
   
   //repetição dados buracos negros
   for (let dado of buracosNegros) {
        //transformar em minusculas
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
       // se titulo includes campoPesquisa
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           resutadoatribuido += `
           <div class="item-res">
               <h2>
                   <a href="#">${dado.titulo}</a>
               </h2>
               <p class="descricao-dados">
               ${dado.descricao}
               </p>
               <p>Descoberto em: ${dado.anodadescoberta}
           </div> `
       } 
   }
   
   if (!resutadoatribuido) {
    resutadoatribuido = "<p>Nada foi encontrado</p>"
   };

   // atribui o resultado gerado (coloca dentro de uma variavel o resultado)
   resultado.innerHTML = resutadoatribuido;
};

