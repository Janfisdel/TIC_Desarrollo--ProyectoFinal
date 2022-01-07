function agregarSeries(){
    let container = document.getElementById("containerSeries")
    
    for (serie of series){

        let card = document.createElement("div")
        card.className += "card"
        card.innerHTML = ` <div class="container-img">
                            <img class="imgSeries" src="${serie.img}"/>
                            <div ><img class="plataformaDimensiones" src="${serie.plataforma}"/></div>
                            </div>
        
        `
        container.appendChild(card)
    }
}

agregarSeries()