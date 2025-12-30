//#region VARIABLES
const btnXHR = document.getElementById("cargar-xhr");
const btnFetch = document.getElementById("cargar-fetch");
const resultado = document.getElementById("resultado");
//#endregion

//#region XHR
btnXHR.addEventListener("click", cargarUsuariosXHR);

function cargarUsuariosXHR() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const usuarios = JSON.parse(this.responseText);
      renderizarUsuarios(usuarios);
    } else {
      resultado.innerHTML = "<p>Error al cargar datos</p>";
    }
  };

  xhr.onerror = function () {
    resultado.innerHTML = "<p>Error de conexión</p>";
  };

  xhr.send();
}
//#endregion

//#region FETCH
btnFetch.addEventListener("click", cargarUsuariosFetch);

function cargarUsuariosFetch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) throw new Error("Error API");
      return response.json();
    })
    .then(usuarios => renderizarUsuarios(usuarios))
    .catch(error => {
      console.error(error);
      resultado.innerHTML = "<p>Error al cargar usuarios</p>";
    });
}
//#endregion

//#region RENDER (ÚNICA)
function renderizarUsuarios(usuarios) {
  resultado.innerHTML = "";

  const ul = document.createElement("ul");

  usuarios.forEach(usuario => {
    const li = document.createElement("li");
    const avatarUrl = `https://i.pravatar.cc/100?img=${usuario.id}`;

    li.innerHTML = `
      <div class="usuario-card">
        <img src="${avatarUrl}" alt="Foto de ${usuario.name}">
        <div>
          <h4>${usuario.name}</h4>
          <p>Email: ${usuario.email}</p>
          <p>Ciudad: ${usuario.address.city}</p>
        </div>
      </div>
    `;

    ul.appendChild(li);
  });

  resultado.appendChild(ul);
}
//#endregion


//#region GIPHY
const API_KEY_GIPHY = "aOpPIFu8JIV4EeV7H1NVlMtf9uKcPqD4";

// Elementos del DOM
const inputGif = document.getElementById("gif-input");
const btnBuscarGif = document.getElementById("buscar-gif");
const resultadoGif = document.getElementById("resultado-gif");

// Evento click del botón
btnBuscarGif.addEventListener("click", () => {
  const terminoBusqueda = inputGif.value.trim();

  if (terminoBusqueda === "") {
    resultadoGif.innerHTML = "<p>Ingresa un término de búsqueda</p>";
    return;
  }

  buscarGif(terminoBusqueda);
});

// Función que consulta la API de Giphy
function buscarGif(termino) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_GIPHY}&q=${termino}&limit=1`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de Giphy");
      }
      return response.json();
    })
    .then(data => {
      if (data.data.length === 0) {
        resultadoGif.innerHTML = "<p>No se encontraron GIFs</p>";
        return;
      }

      const gifUrl = data.data[0].images.original.url;

      resultadoGif.innerHTML = `
        <img src="${gifUrl}" alt="GIF encontrado" style="max-width:100%; border-radius:8px;">
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      resultadoGif.innerHTML = "<p>Error al buscar el GIF</p>";
    });
}

//#endregion