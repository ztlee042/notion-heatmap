const express = require('express')
const getPomos = require('./services/notion')
const PORT = process.env.PORT || 8000

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  let indexFile = path.join(__dirname, "../public/index.html");
  res.sendFile(indexFile);
})

app.get('/pomos', async (req, res) => {
  const pomos = await getPomos()
  res.json(pomos)
})
app.listen(PORT, console.log(`Server started on port ${PORT}`))

module.exports = app