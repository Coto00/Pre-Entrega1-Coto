


function Usuario() {
    let repetir = false;

    while (repetir === false) {
        let nombre = prompt('Ingresa tu Nombre');
        repetir = confirm('Es correcto el nombre "' + nombre + '"?');

        if (nombre === "") {
            alert('Nombre de Usuario Invalido');
        } else if (nombre === null) {
            alert('Nombre de Usuario Invalido');
        }

        let repetir2 = false;
        while (repetir2 === false) {
            let opcion = prompt(nombre + ' Ingresa la opcion que te interesa (1, 2, 3, 4)');
            repetir2 = confirm('Elegiste la opcion "' + opcion + '"?');

            if (opcion === "") {
                alert('Opcion Inexistente');
            } else if (opcion === null) {
                alert('Opcion Inexistente');
            } else if (opcion === "1") {
                let colorRemera = prompt('De qué color quieres tu Remera').toLowerCase();
                if (colorRemera === "rojo" || colorRemera === "verde" || colorRemera === "azul" || colorRemera === "negro") {
                    alert('Te enviaremos información de tu remera de color ' + colorRemera + ' a tu correo.');
                } else {
                    alert('Color desconocido');
                }
            } else if (opcion === "2") {
                let colorBuzo = prompt('De qué color quieres tu Buzo').toLowerCase();
                if (colorBuzo === "rojo" || colorBuzo === "verde" || colorBuzo === "azul" || colorBuzo === "negro") {
                    alert('Te enviaremos información de tu buzo de color ' + colorBuzo + ' a tu correo.');
                } else {
                    alert('Color desconocido');
                }
            } else if (opcion === "3") {
                let colorCampera = prompt('De qué color quieres tu Campera').toLowerCase();
                if (colorCampera === "rojo" || colorCampera === "verde" || colorCampera === "azul" || colorCampera === "negro") {
                    alert('Te enviaremos información de tu campera de color ' + colorCampera + ' a tu correo.');
                } else {
                    alert('Color desconocido');
                }
            } else if (opcion === "4") {
                let colorPantalon = prompt('De qué color quieres tu Pantalón').toLowerCase();
                if (colorPantalon === "rojo" || colorPantalon === "verde" || colorPantalon === "azul" || colorPantalon === "negro") {
                    alert('Te enviaremos información de tu pantalón de color ' + colorPantalon + ' a tu correo.');
                } else {
                    alert('Color desconocido');
                }
            } else {
                alert('Opcion Inexistente');
            }
        }
    }
}

Usuario();