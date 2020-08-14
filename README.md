# Middleware實作練習

簡易測試middleware 流程

## 功能列表
* 伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡
* 可觀察request-response cycle 之間之時間差

## 環境建置
* Node.js: v10.15.0
* Express: v4.17.1

## 安裝與執行步驟
* 將專案clone到本地端 https://github.com/michaelnctu/A13-Middleware-Writing
* 進入專案 cd resturant_list
* 下載package npm install
* 透過nodemon啟動專案 npm run dev
* 最後在瀏覽器開啟  http://localhost:3000 使用程式 