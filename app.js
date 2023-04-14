
const express = require('express')
const path = require('path')
var Remove = require('removebg-id');
const app = express()
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' })
const port = 3000

app.post('/removebg',upload.single('avatar'), async (req, res) => {
  console.log(__dirname, req.file)
const filepath =    path.join(__dirname, req.file.path)
console.log(filepath);



const zz = await Remove.FromPath(filepath, '73yV5fwT2thrpyZQWfbUK45m')
  res.send(zz)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})