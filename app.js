

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = 
        `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}
