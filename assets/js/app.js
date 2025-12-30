//#region Realizando Requests con XMLHttpRequest (El método clásico)
const btnXHR = document.getElementById("cargar-xhr");
const resultado = document.getElementById("resultado");

btnXHR.addEventListener("click", () => {
  cargarUsuariosXHR();
});

function cargarUsuariosXHR() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const usuarios = JSON.parse(this.responseText);
      renderizarUsuarios(usuarios);
    } else {
      resultado.innerHTML = "<p>Error al cargar los datos</p>";
    }
  };

  xhr.onerror = function () {
    resultado.innerHTML = "<p>Error de conexión</p>";
  };

  xhr.send();
}

function renderizarUsuarios(usuarios) {
  resultado.innerHTML = "";

  const ul = document.createElement("ul");

  usuarios.forEach(usuario => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h4>${usuario.name}</h4>
      <p>Email: ${usuario.email}</p>
      <p>Ciudad: ${usuario.address.city}</p>
    `;

    ul.appendChild(li);
  });

  resultado.appendChild(ul);
}
//#endregion

//#region Fetch API (El método moderno)
const btnFetch = document.getElementById("cargar-fetch");

btnFetch.addEventListener("click", () => {
  cargarUsuariosFetch();
});

function cargarUsuariosFetch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then(usuarios => {
      // Se usa la MISMA función de renderizado
      renderizarUsuarios(usuarios);
    })
    .catch(error => {
      console.error("Error de red:", error);
      resultado.innerHTML = "<p>Error al cargar los usuarios</p>";
    });
}

function renderizarUsuarios(usuarios) {
  // Limpiar contenido previo
  resultado.innerHTML = "";

  const ul = document.createElement("ul");

  usuarios.forEach(usuario => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h4>${usuario.name}</h4>
      <p>Email: ${usuario.email}</p>
    `;

    ul.appendChild(li);
  });

  resultado.appendChild(ul);
}

//#endregion

//#region (Opcional - Bonus): Consumiendo una API con API Key
const API_KEY_GIPHY = "TU_API_KEY_AQUI";

const inputGif = document.getElementById("gif-input");
const btnBuscarGif = document.getElementById("buscar-gif");
const resultadoGif = document.getElementById("resultado-gif");

btnBuscarGif.addEventListener("click", () => {
  const terminoBusqueda = inputGif.value.trim();

  if (terminoBusqueda === "") {
    resultadoGif.innerHTML = "<p>Ingresa un término de búsqueda</p>";
    return;
  }

  buscarGif(terminoBusqueda);
});

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
        <img src="${gifUrl}" alt="GIF encontrado" style="max-width:100%;">
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      resultadoGif.innerHTML = "<p>Error al buscar el GIF</p>";
    });
}
//#endregion