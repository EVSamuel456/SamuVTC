fetch('posts.json')
    .then(response => response.json())
    .then(entradas => {
        const contenedor = document.getElementById('entries-list');

        entradas.forEach(entrada => {
            const elemento = document.createElement('li');
            elemento.className = 'entry';
            elemento.innerHTML = `
                <a href="${entrada.url}">
                    <h1>${entrada.title}</h1>
                    <small>${entrada.date}</small>
                    <p>${entrada.description}</p>
                    <img class="principal-img" src="${entrada.image}">
                </a>
            `;
            contenedor.appendChild(elemento);
        });
    })
    .catch(error => console.error('Error al cargar las entradas:', error));