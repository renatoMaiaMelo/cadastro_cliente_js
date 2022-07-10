'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

// dados cliente
const dataClient = {
    nome: 'Renato Maia',
    email: 'sarah@teste.com',
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
const listClient = () => JSON.parse(localStorage.getItem('db_client'))

// update cliente

const updateClient = (index, client) => {
    const dbClient = listClient()
    console.log(dbClient);
    dbClient[index] = client
    localStorage.setItem('db_client', JSON.stringify(dbClient))
}

// eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)