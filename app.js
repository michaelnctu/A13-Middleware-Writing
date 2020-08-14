// app.js
const express = require('express')
const app = express()
const port = 3000


app.use(function (req, res, next) {
  var reqRaw = Date.now()  //擷取req請求的時間 格式內建
  var reqTime = new Date(reqRaw)  //換格式

  var YYYY = reqTime.getFullYear(); //年份
  var MM = reqTime.getMonth() + 1; //月份
  var DD = reqTime.getDate(); //日期
  var HH = reqTime.getHours(); //時
  var mm = reqTime.getMinutes(); //分
  var ss = reqTime.getSeconds(); //秒

  console.log(`Req Time: ${YYYY}-${MM}-${HH}:${HH}:${ss} | ${req.method} from ${req.originalUrl}`);

  next();

  var resRaw = Date.now()  //擷取req請求的時間 格式內建
  var resTime = new Date(resRaw)
  var totalTime = resTime - reqTime

  YYYY = resTime.getFullYear(); //年份
  MM = resTime.getMonth() + 1; //月份
  DD = resTime.getDate(); //日期
  HH = resTime.getHours(); //時
  mm = resTime.getMinutes(); //分
  ss = resTime.getSeconds(); //秒


  console.log(`Res time = ${YYYY}-${MM}-${HH}:${HH}:${ss} | ${req.method} from ${req.originalUrl} | total time: ${totalTime} ms`)


});


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

