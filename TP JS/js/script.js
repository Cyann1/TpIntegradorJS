function calcularTotal() {

    var name = document.getElementById('nombre');
    var apell = document.getElementById('apellido');
    var cant = document.getElementById('cantidad');
    var categ = document.getElementById('categoria');


    if (name.value === "" || apell.value === "" || cant.value === "" || categ.value === "") {
        alert('Faltan datos por completar');
        name.focus();
    }


    const validarMail = mail => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(mail.value);
    }

    if (!validarMail(mail)) {
        mail.classList.add("is-invalid");
        alert('Mail Incorrecto');
        mail.focus();

    } else {
        mail.classList.remove("is-invalid")
    }


    if (categ.value == 0) {
        alert("Seleccione Una Categoria");
    }
    if (categ.value == 1) {
        resumenTotal = 200 * cant.value;
    }
    if (categ.value == 2) {
        resumenTotal = (200 * 0.2) * cant.value;
    }
    if (categ.value == 3) {
        resumenTotal = (200 * .5) * cant.value;
    }
    if (categ.value == 4) {
        resumenTotal = (200 * 0.85) * cant.value;
    }



    document.getElementById('totalAPagar').innerText = resumenTotal;

}

const BTNCLICK = document.getElementById('btnResumen');
BTNCLICK.addEventListener('click', calcularTotal);