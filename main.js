'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    document.getElementById('modal')
        .classList.remove('active')
    clearFields()
}

const createRow = (client) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = JSON.parse(localStorage.getItem('db_client'))
    clearTable()
    dbClient.forEach(createRow)
}

updateTable()


// dados cliente
const dataClient = {
    nome: 'Renato Maia',
    email: 'renato@teste.com',
    celular: '99999-9999',
    cidade: 'Manaus'
}

// crud

// cria cliente
const createClient = (client) => {
    let db_client = JSON.parse(localStorage.getItem('db_client'))
    if (db_client === null) {
        db_client = []
    } else {
        db_client = JSON.parse(localStorage.getItem('db_client'))
    }
    db_client.push(client)
    localStorage.setItem('db_client', JSON.stringify(db_client))
}

// lista cliente
const listClient = () => {
    return JSON.parse(localStorage.getItem('db_client'))
}

// update cliente
const updateClient = (index, client) => {
    const dbClient = listClient()
    dbClient[index] = client
    localStorage.setItem('db_client', JSON.stringify(dbClient))
}

// deletar cliente
const deletClient = (index) => {
    const listClients = listClient()
    listClients.splice(index, 1)
    localStorage.setItem('db_client', JSON.stringify(listClients))
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
}

// interacao layout
const saveClient = () => {
    if (isValidFields()) {
        const client = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
        }
        createClient(client)
        updateTable()
        closeModal()
    }
}

// eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click', saveClient)