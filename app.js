const lista = [];

function adicionarNombre() {
    const input = document.getElementById("nombreInput");
    const nombre = input.value.trim();
    const resultado = document.getElementById("errorNombre");

    if (nombre === "") {
        resultado.textContent = "⚠️ Por favor, ingresá un nombre válido. ⚠️";

        setTimeout(() => {
            resultado.textContent = "";
        }, 3000);

        return;
    }

    lista.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();

    resultado.textContent = "";
}

function mostrarLista() {
    const ul = document.getElementById("listaNombres");
    ul.innerHTML = "";

    lista.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (lista.length === 0) {
        errorLista.textContent = "⚠️ Primero tenés que agregar al menos un nombre. ⚠️";

        setTimeout(() => {
            errorLista.textContent = "";
        }, 3000);

        return;
    }

    errorLista.textContent = "";

    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const nombreSorteado = lista[indiceAleatorio];

    document.getElementById("resultado").textContent =
        `🎉 El amigo secreto es: ${nombreSorteado}`;

    document.getElementById("btnLimpiar").style.display = "inline-block";
}

function limpiarLista() {
    lista.length = 0;
    mostrarLista();
    document.getElementById("resultado").textContent = "";
    document.getElementById("btnLimpiar").style.display = "none";
}