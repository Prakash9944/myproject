const express = require ('express');
const app = express();
const routes = require("./api/routes/route");
const connectDB = require ("./database/db");
const cookieParser = require ("cookie-parser");
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use('/api', routes);
//agdssad
//asdas
app.listen(5000, function () {
    console.log(`server started....werwrewrewrewrewrew`);
});
