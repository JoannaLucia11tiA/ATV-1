import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Olá mundo, estou utilizando Vs code'})

})
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})