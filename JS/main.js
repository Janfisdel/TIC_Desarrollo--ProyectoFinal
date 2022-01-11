function agregarSeries(){
    let container = document.getElementById("containerSeries")
    
    for (serie of series){

        let card = document.createElement("div")
        let informacion =document.createElement("div")
        // card.className += "card"
        card.innerHTML = ` <img class="imgSeries" src="${serie.img}"/>
                           <div class="informacionSerie">
                             
        `
        // informacion.className += "card"
        informacion.innerHTML =  `  
                                   <h3 class="tituloSerie">${serie.nombre}</h3>  
                                   <ul class="descripcion">
                                    <li> <p><span>Descripcion: </span>${serie.descripcion}</p> </li>
                                    <li><p><span>Categoria: </span>${serie.categoria}</p></li>
                                    <li><p><span>Temporadas: </span>${serie.temporadas}</p></li>
                                    <li><p><span>Actores: </span>${serie.actores}</p></li>
                                    <li><p><span>Calificacion: </span>${serie.calificacion}</p></li>
                                    <li><p><span>Donde verla: </span><img class="imgPlataforma" src="${serie.plataforma}" /></p></li>
                                   </ul>
                                     `
        container.appendChild(card)
        container.appendChild(informacion)
    }
}

{/* <img class="plataformaDimensiones" src="${serie.plataforma}"/> */}
agregarSeries()