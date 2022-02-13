// FUNCION PARA AGREGAR SERIES AL GRID DE SERIES.HTML
function agregarSeries(cate){
    let container = document.getElementById("containerSeries")
    container.innerHTML ="";
    
    if(cate === 'todas'){
        for (serie of series){
        

        let card = document.createElement("div")
        let informacion =document.createElement("div")
        
        card.innerHTML = ` <img class="imgSeries" src="${serie.img}"/>                                                      
                         `    
       
        informacion.innerHTML =  `  
                                   <h3 class="tituloSerie">${serie.nombre}</h3>  
                                   <ul class="descripcion">
                                    <li> <p><span>Descripción: </span>${serie.descripcion}</p> </li>
                                    <li><p><span>Categoría: </span>${serie.categoria}</p></li>
                                    <li><p><span>Temporadas: </span>${serie.temporadas}</p></li>
                                    <li><p><span>Actores: </span>${serie.actores}</p></li>
                                    <li><p><span>Calificación: </span>${serie.calificacion}</p></li>
                                    <li><p><span>Donde verla: </span><img class="imgPlataforma" src="${serie.plataforma}" /></p></li>
                                   </ul>
                                     `
        container.appendChild(card)
        container.appendChild(informacion)
    }}

    else {
        let porCategoria = series.filter((serie)=> serie.categoria=== cate)

         for (serie of porCategoria){
        let card = document.createElement("div")
        let informacion =document.createElement("div")
    
        card.innerHTML = ` <img class="imgSeries" src="${serie.img}"/> `
       
        informacion.innerHTML =  `  
                                   <h3 class="tituloSerie">${serie.nombre}</h3>  
                                   <ul class="descripcion">
                                    <li> <p><span>Descripción: </span>${serie.descripcion}</p> </li>
                                    <li><p><span>Categoría: </span>${serie.categoria}</p></li>
                                    <li><p><span>Temporadas: </span>${serie.temporadas}</p></li>
                                    <li><p><span>Actores: </span>${serie.actores}</p></li>
                                    <li><p><span>Calificación: </span>${serie.calificacion}</p></li>
                                    <li><p><span>Donde verla: </span><img class="imgPlataforma" src="${serie.plataforma}" /></p></li>
                                   </ul>
                                     `
        container.appendChild(card)
        container.appendChild(informacion)

    }
    }
    }
    

agregarSeries('todas')

