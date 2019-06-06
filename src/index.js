'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res)=>{
    if (err){
        throw err
    }else{
        console.log("mongodb is connected......")
    }
    app.listen(config.port, () => {
        console.log(`Rest api running in http://localhost:${config.port}`)
    })
})