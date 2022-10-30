const express = require('express')
const figlet = require("figlet")
const gradient = require("gradient-string")
const morgan = require('morgan')
const db = require('./src/db/models')

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

const addressController = require("./src/address/address.controller");
const categoryController = require("./src/category/category.controller");
const customerController = require("./src/customer/customer.controller");
const employeeController = require("./src/employee/employee.controller");
const invoiceController = require("./src/invoice/invoice.controller");
const productController = require("./src/product/product.controller");
const promotionController = require("./src/promotion/promotion.controller");
const receiptController = require("./src/receipt/receipt.controller");
const sellController = require("./src/sell/sell.controller");
const sellReportController = require("./src/sell-report/sell-report.controller");
const stockController = require("./src/stock/stock.controller");
const stockOrderController = require("./src/stock-order/stock-order.controller");
const supplierController = require("./src/supplier/supplier.controller");

const userController = require("./src/user/user.controller");


app.use("/category", categoryController);
app.use("/address", addressController);
app.use("/customer", customerController);
app.use("/employee", employeeController);
app.use("/invoice", invoiceController);
app.use("/product", productController);
app.use("/promotion", promotionController);
app.use("/receipt", receiptController);
app.use("/sell", sellController);
app.use("/sell/report", sellReportController);
app.use("/stock", stockController);
app.use("/stock/order", stockOrderController);
app.use("/supplier", supplierController);


app.use("/user", userController);

// SERVER restful api at PORT
const runningServe = async (log) => {
    console.log(`\n--- ${log} ---`);

    const msg = `INVENTORY SERVE`
    figlet(msg, (err, data) => [
        console.log(gradient.pastel.multiline(data))
    ])
};

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        runningServe(`SERVE ON PORT ${PORT}`);
    })
});
