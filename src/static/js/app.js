const express = require('express')
const os = require ('os')

const app = express()

app.use('/', async (req, res) => {
    console.log(`Response received from & { os.hostname() }`)
    res.json({ message: ' Response received from...', hostname: os.hostname()})
})

app.listen(3000, () => console.log('Server on port 3000'))