const linkForm = document.getElementById('link-form');
const urlInput = document.getElementById('url-input');
const titleInput = document.getElementById('title-input');
const linksList = document.getElementById('links-list');

let links = JSON.parse(localStorage.getItem('my_links')) || [];

function renderLinks() {
    linksList.innerHTML = '';
    links.forEach( (link , index ) => { 
        const li = document.createElement('li');
        li.className = 'link-card';
        li.innerHTML = `
            <div>
                <!-- Enlace que se abrira en una pestaña nueva gracias a target = "_blank"-->
                <a href = "${link.url}" target = "_blank">${link.title}</a>
                <p>${link.url}</p>
            </div>
            <!--botom de eliminar q llama a la funcion deletelink() pasandole la posicion de el link (index)-->
            <button class = "delete-btn" onclick = "deleteLink(${index})">🗑️ Eliminar</button> 
        `;
        linksList.appendChild(li);
    })
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

function deleteLink(index) {
    links.splice(index, 1);
    localStorage.setItem('my_links', JSON.stringify(links));
    renderLinks();
}

renderLinks();