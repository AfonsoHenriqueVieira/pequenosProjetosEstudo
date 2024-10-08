const textoInput = document.getElementById('textoInput');
const btnSalvar = document.getElementById('btnSalvar');
const lista = document.getElementById('lista');

btnSalvar.addEventListener('click', () => {
    const texto = textoInput.value.trim();
    if(texto) {
        const li = document.createElement('li');

        li.textContent = texto;
        li.addEventListener('click', () =>{
            li.classList.toggle('completed');
        });
        
        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = 'Excluir';
        btnDeletar.addEventListener('click', (e) => {
            e.stopPropagation();
            lista.removeChild(li);
        });

        li.appendChild(btnDeletar);
        lista.appendChild(li);
        textoInput.value = '';
    }

});