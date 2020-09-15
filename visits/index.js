const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
   host: 'redis-server',
   port: 6379
});
client.set('visits', 0)

app.get('/', (req, res) => client.get('visits', (err, visits) => {
   let qtd = parseInt(visits) + 1
   res.send(`Number of visits is ${qtd}`)
   client.set('visits', qtd)
}))

app.listen(8080, () => console.log('Listening on port 8080...'))