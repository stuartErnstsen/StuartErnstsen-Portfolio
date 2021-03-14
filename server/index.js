require('dotenv').config()

const express = require('express'),
    { PORT } = process.env,
    app = express()

app.use(express.json())

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`))
