preguntaInicial()
function preguntaInicial(){
    let bannerPregunta = true
    while(bannerPregunta){
        let pregunta = prompt(`Bienvenidos a MS Nail Art!
        ¿Desea adquirir nuestros servicios?`).toLowerCase()
        if(pregunta == "si"){
            bannerPregunta = false
            mostrarLista()
        }else if(pregunta == "no"){
            bannerPregunta = false
            alert("Gracias por usar nuestra página.")
        }else{
            alert("Porfavor responde si/no")
        }
    }
}

function mostrarLista(){
    const precioS1 = 700
    const precioS2 = 1300
    const precioS3 = 950
    const precioS4 = 1450
    const precioS5 = 1750
    const precioS6 = 300

    let bannerPregunta = true
    let carrito = 0
    let cantidadServicios = ""
    while(bannerPregunta){
        let lista = parseInt(prompt(`¿Que servicio desea adquirir?
        1. Esmaltado Simple. $${precioS1}
        2. Servicio de capping gel con Semipermante. $${precioS2}
        3. Servicio de Esmaltado Semipermante. $${precioS3}
        4. Servicio de Esculpidas Básicas. $${precioS4}
        5. Servicio de Esculpidas con semipermante. $${precioS5}
        6. Servicio de remoción. $${precioS6}
        0. No deseo adquirir otro servicio.`))
        switch(lista){
            case 1:
            alert("Servicio de Esmaltado Simple al carrito")
            cantidadServicios += `Servicio de Esmaltado Simple `
            carrito += precioS1
            break;
            case 2:
            alert("Servicio de capping gel con Semipermante agregado al carrito")
            cantidadServicios += `ervicio de capping gel con Semipermante `
            carrito += precioS2
            break;
            case 3:
            alert("Servicio de Esmaltado Semipermante agregado al carrito")
            cantidadServicios += `Servicio de Esmaltado Semipermante `
            carrito += precioS3
            break;
            case 4:
            alert("Servicio de Esculpidas Básicas agregado al carrito")
            cantidadServicios += `Servicio de Esculpidas Básicas`
            carrito += precioS4
            break;
            case 5:
            alert("Servicio de Esculpidas con semipermante agregado al carrito")
            cantidadServicios += `Servicio de Esculpidas con semipermante `
            carrito += precioS5
            break;
            case 6:
            alert("Servicio de remoción agregado al carrito")
            cantidadServicios += `Servicio de remoción`
            carrito += precioS6
            break;
            case 0:
            bannerPregunta = false
                if(carrito != 0){
                    alert(`El total de su compra es de $${carrito}, llevando los siguientes servicios:
                    ${cantidadServicios} 
                    Gracias por su visita!`)
                }else{
                    alert(`Usted no agregó productos al carrito.`)
                }
            break;
            default:
                alert("Respuesta no válida, porfavor escriba correctamente la opción deseada.")
        }

    }
}
