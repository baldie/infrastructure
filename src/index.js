const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.status(200).send('<html><h1>Running in docker!</h1></html>')
})
const server = app.listen(8080, () => {
    console.log('Listening on port 8080...')
})
module.exports = { app, server }