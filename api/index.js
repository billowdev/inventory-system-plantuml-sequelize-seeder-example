const express = require('express')
const figlet = require("figlet")
const gradient = require("gradient-string")
const morgan = require('morgan')
const db = require('./models')

// import cors = require('cors')
const app = express()

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}))

// use cors
// config for only development
if (process.env.NODE_ENV === "development") {
    // cors it's allow to deal with react for localhost at port {PORT} without any problem
    // app.use(cors({
    //     origin: process.env.CLIENT_URL
    // }))

    // morgan give information about each request
    app.use(morgan('dev'))
}

// PORT
const PORT = process.env.SERVE_PORT || 5000

const productController = require("./product/product.controller");
app.use("/product", productController);

// SERVER restful api at PORT
const runningServe = async (log) => {
    console.log(`\n--- ${log} ---`);

    const msg = `AKKARAPON SERVE`
    figlet(msg, (err, data) => [
        console.log(gradient.pastel.multiline(data))
    ])
};

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        runningServe(`SERVE ON PORT ${PORT}`);
    })
});
