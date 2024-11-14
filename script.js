function girarRuleta() {
    const circulo = document.querySelector('.circulo'); 
    const grados = Math.floor(Math.random() * 360) + 720; 

    circulo.style.transition = 'transform 4s ease-out'; 
    circulo.style.transform = `rotate(${grados}deg)`; 

    
    setTimeout(() => {
        circulo.style.transition = 'none'; 
        circulo.style.transform = `rotate(${grados % 360}deg)`; 
    }, 4000); 
}

function listaProductos(listaP, filter=""){

    let productsContainer = document.getElementById('productsContainer')

    for(let producto of listaP){

     

        if(filter && producto.categoria.length > 0){



            for(let palabraClave of producto.categoria){
                if(filter === palabraClave){
                    
                    let card = `
                    <div class="card shadow-lg border-0" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <h6 class="card-title">${producto.categoria}</h6>
                            <p class="card-text">${producto.descripcion}</p>
                            <a href="#" class="btn btn-primary">Comprar por ${producto.precio}</a>
                        </div>
                    </div>
                    `
            
                    productsContainer.innerHTML += card


                }
            }

        } else {
            let card = `
                    <div class="card shadow-lg border-0" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <a href="#" class="btn btn-primary">Comprar por ${producto.precio}</a>
                        </div>
                    </div>
                    `
            
                    productsContainer.innerHTML += card
        }

       

    }

}

listaProductos(BaseDatos,"")