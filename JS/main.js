// let division= document.createElement("div");
// division.innerHTML="<h2>HOLA</h2>"

// document.getElementById("contenedor_series").appendChild(division)

function mostrarCategorias(){
    let botones = document.createElement("div")

    botones.innerHTML=`<button id="todos" type="button"><b>Todos</b></button>
                        <button id="comedia" type="button"><b>Comedias</b></button>`;
                        //PONER MAS BOTONES DE CADA CATEGORIA
    
    document.getElementById("contenedor_series").appendChild(botones)


    let comedias=document.getElementById("comedia")
    let divDePrueba = document.createElement("div")
  
   
  
    divDePrueba.innerHTML = `<div><p>DIV DE PRUEBA</p>
                                ${series[5].nombre}
                                </div>`
   
   
   
                           
    comedias.onclick = ()=>{document.getElementById("contenedor_series").appendChild(divDePrueba)}
    
    // comedias.onclick=()=>{funcion mostrarproductos en general que decida la categoria con un if}
    //con el onclick que aparzca el grid de cada seccion
}


mostrarCategorias()