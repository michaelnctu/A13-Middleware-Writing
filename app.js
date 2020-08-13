// app.js
const express = require('express')
const app = express()
const port = 3000


//擷取當下之時間
function getTime() {
  var nowRaw = Date.now() //現在時間原始格式
  var time = new Date(nowRaw)
  // console.log (time.toString())


  var YYYY = time.getFullYear(); //年份
  var MM = time.getMonth() + 1; //月份
  var DD = time.getDate(); //日期
  var HH = time.getHours(); //時
  var mm = time.getMinutes(); //分
  var ss = time.getSeconds(); //秒

  console.log(YYYY + '-' + MM + '-' + DD + ' ' + HH + ':' + mm + ':' + ss);

  next();
}

app.use(getTime)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})