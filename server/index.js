const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/public');
})


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/public', express.static("wwwroot"));


// routes
app.use( '/api', require("./routes/api.js"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})