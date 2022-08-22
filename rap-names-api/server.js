const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
 '21 Savage': {
  'age': 29,
  'birthName': 'Sheyaa Bin Abraham-Joseph',
  'birthLocaton': 'London, England'
 },
 'Chance the rapper': {
  'age': 29,
  'birthName': 'Chancelor Bennett',
  'birthLocaton': 'Chicaco, Illinois'
 },
 'unknown': {
  'age': 0,
  'birthName': 'unknown',
  'birthLocaton': 'unknown'
 }
}



app.get('/', (request, response) => {
 response.sendFile(__dirname + '/index.html')

})

app.get('/api', (request, response) => {
 response.json(rappers)
})

app.listen(PORT, () => {
 console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})