var express = require("express")
var app =express()
var expressWs = require("express-ws")
var wss = expressWs(app)
var aWss = wss.getWss("/")
app = wss.app
app.ws("/",(ws,req)=>{
    ws.onmessage = (msg)=>{
        console.log(msg.data.toString());
        aWss.clients.forEach((client)=>{
            client.send("来自服务端消息")
        })
    }
})

app.listen(80,(err)=>{
    console.log("服务启动成功");
})
