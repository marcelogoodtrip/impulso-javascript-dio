document.getElementById('titulo');
// <h1 id="titulo">Minha página</h1>

document.getElementsByTagName('li');
/*
[
    <li>Projeto 1</li>
    <li>Projeto 2</li>
    <li>Projeto 3</li>
]   */

document.getElementsByClassName('textos');
/*
[
    <section class="textos">
        <h2>Sobre min</h2>
        <p>Texto sobre a pessoa aqui.</p>
    </section>

    <section class="textos">
        <h2>Meus projetos</h2>
        <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
        </ul>
    </section>
]   */

document.querySelectorAll('li .opcao');
/*
[
    <ul>
        <li class="opcao">Opção 1</li>
        <li class="opcao">Opção 2</li>
        <li class="opcao">Opção 3</li>
    </ul>
]   */

document.querySelectorAll('.primeira-classe .segunda-classe');
/*
[
    <div class="primeira-classe segunda-classe">
        <ul>
            <li class="opcao">Projeto 1</li>
            <li class="opcao">Projeto 2</li>
            <li class="opcao">Projeto 3</li>
        </ul>
    </div>
]   */

document.getElementById(element);   //  Cria um novo elemento HTML

document.removeChild(elemet);   //  Remove um elemento

document.appendChild(element);   //  Adiciona um elemento

document.replaceChild(novo, velho) //  Substitui um elemento