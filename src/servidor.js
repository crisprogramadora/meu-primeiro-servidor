import express from 'express'

const servidor = express()

servidor.get('/home', (req, res) => {
    return res.send('Meu primeiro servidor com express!')
})
// ou cria uma variável com a função fora do get
// const controlador = (req, res) => {
//     return res.send('Meu primeiro servidor com express!')
// }
// servidor.get('/', controlador)
servidor.listen(3000)