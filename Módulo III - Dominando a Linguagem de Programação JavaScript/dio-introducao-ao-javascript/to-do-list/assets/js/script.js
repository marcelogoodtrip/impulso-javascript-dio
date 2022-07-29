const getDataBase = () => JSON.parse(localStorage.getItem('list-items')) ?? [];
const setDataBase = (dataBase) => localStorage.setItem('list-items', JSON.stringify(dataBase));

const criarItem = (tarefa, status, index) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-index=${index}>
    `
    document.getElementById('list-items').appendChild(item);
}

const clearAll = () => {
    const lista = document.getElementById("list-items");
    while(lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const render = () => {
    clearAll();
    const dataBase = getDataBase();
    dataBase.forEach((item, index) => criarItem(item.tarefa, item.status, index));
}

const inserirItem = (event) => {
    const tecla = event.key;
    const texto = event.target.value;
    
    if(tecla === 'Enter') {
        const dataBase = getDataBase();
        dataBase.push({'tarefa':  texto, 'status':''});
        setDataBase(dataBase);
        render();
        event.target.value = '';
    }
}

const inserirItemBtn = () => {
    const texto = document.getElementById("text");
    const dataBase = getDataBase();
    dataBase.push({'tarefa':  texto.value, 'status':''})
    setDataBase(dataBase);
    render();
    texto.value = '';
}

const removerItem = (index) => {
    const dataBase = getDataBase();
    dataBase.splice(index, 1);
    setDataBase(dataBase);
    render();
}

const atualizarItem = (index) => {
    const dataBase = getDataBase();
    dataBase[index].status = dataBase[index].status === '' ? 'checked' : '';
    setDataBase(dataBase);
    render();
}

const clickItem = (event) => {
    const element = event.target;

    if(element.type === 'button') {
        const index = element.dataset.index;
        removerItem(index);
    } else if(element.type === 'checkbox') {
        const index = element.dataset.index;
        atualizarItem(index);
    }
}

document.getElementById("text").addEventListener("keypress", inserirItem);
document.getElementById("button").addEventListener("click", inserirItemBtn);
document.getElementById("list-items").addEventListener("click", clickItem);

render();