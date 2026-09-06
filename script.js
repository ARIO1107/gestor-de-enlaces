const linkForm = document.getElementById('link-form');
const urlInput = document.getElementById('url-input');
const titleInput = document.getElementById('title-input');
const linksList = document.getElementById('links-list');

let links = JSON.parse(localStorage.getItem('my_links')) || [];

// Variable para controlar si el modo admin está activo
let isAdmin = false;

const adminToggleBtn = document.getElementById('admin-toggle-btn');

// Escuchar click en el botón de Admin
adminToggleBtn.addEventListener('click', () => {
    isAdmin = !isAdmin; // Alterna entre true y false
    document.body.classList.toggle('admin-mode', isAdmin);
    adminToggleBtn.textContent = isAdmin ? '🔓 Modo Público' : '🔒 Modo Admin';
});

// Función de renderizado actualizada con Favicons estilo Linktree
function renderLinks() {
    linksList.innerHTML = '';

    links.forEach((link, index) => {
        const li = document.createElement('li');
        li.className = 'link-card';

        // Extrae el dominio de la URL para obtener su logo automáticamente
        let domain = '';
        try {
            domain = new URL(link.url).hostname;
        } catch (e) {
            domain = link.url;
        }

        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

        li.innerHTML = `
            <div class="link-content">
                <img src="${faviconUrl}" alt="${link.title}" class="link-favicon" onerror="this.src='https://via.placeholder.com/32'">
                <div class="link-info">
                    <a href="${link.url}" target="_blank" class="link-title">${link.title}</a>
                    <span class="link-url">${link.url}</span>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteLink(${index})" title="Eliminar enlace">🗑️ Eliminar</button>
        `;

        linksList.appendChild(li);
    });
}

linkForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newLink = {
        title : titleInput.value,
        url : urlInput.value
    }
    links.push(newLink);
    localStorage.setItem('my_links', JSON.stringify(links));
    renderLinks();
    linkForm.reset();   
})

async function cargarFraseDelDia() {
    const contenedorFrase = document.getElementById('frase-motivacional');
    if (!contenedorFrase) return;

    try {
        // 1. Pedimos la frase en inglés
        const resFrase = await fetch('https://dummyjson.com/quotes/random');
        const dataFrase = await resFrase.json();

        // 2. Enviamos la frase a la API de traducción (Inglés -> Español)
        const urlTraduccion = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(dataFrase.quote)}&langpair=en|es`;
        const resTraduccion = await fetch(urlTraduccion);
        const dataTraduccion = await resTraduccion.json();

        // Texto traducido al español
        const fraseEnEspanol = dataTraduccion.responseData.translatedText;

        // 3. Mostramos la frase ya traducida
        contenedorFrase.innerHTML = `"${fraseEnEspanol}" <br> <small>— ${dataFrase.author}</small>`;

    } catch (error) {
        console.error("Error al obtener/traducir la frase:", error);
        contenedorFrase.innerHTML = `"El único modo de hacer un gran trabajo es amar lo que haces." <br> <small>— Steve Jobs</small>`;
    }
}

cargarFraseDelDia();

// Ejecutamos la función al cargar la página
cargarFraseDelDia();

function deleteLink(index) {
    links.splice(index, 1);
    localStorage.setItem('my_links', JSON.stringify(links));
    renderLinks();
}

cargarFraseDelDia();
renderLinks();