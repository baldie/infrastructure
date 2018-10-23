const express = require('express')
const app = express()

const redis = require('redis')
require('dotenv').config()
const redisHost = {
    host: process.env.REDIS_URL,
    port: 6379
}
const client = redis.createClient(redisHost)
client.set('visits', 0)

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        client.set('visits', parseInt(visits) + 1)
        res.status(200).send(`<html><h1>We Kubernetes now! (${visits})!</h1></html>`)
    })
})

const server = app.listen(8080, () => {
    console.log('(V2) Listening on port 8080...')
})

module.exports = { app, server }