const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req,res) => {
  try {
    //* Response é a resposta do axios, mas eu tiro o data de dentro do response.
  const { data } = await axios('https://jsonplaceholder.typicode.com/users')
  
  //console.log(data) //Essa resposta será mostrada no terminal.

  return res.json(data)

  // return res.json([ //* Essa resposta era para quando a API era consumida pelo frontend.
  //   {name: 'Ana'},
  //   {name: 'Paulo'}
  // ])

  } catch (error) {
    console.log(error)
  }
})

//! Agora o frontend fetch nosso backend api e nosso backend api busca os dados de outra api.

app.listen('8000')