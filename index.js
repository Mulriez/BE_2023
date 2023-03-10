const express = require("express");
const app = express();
const router = require("./src/routes/routes");
var cors = require('cors')
const notfound = require("./src/middleware/404")
const log = require("./src/middleware/log")
const log2 = require("./src/middleware/log2")
const authMiddleware = require("./src/middleware/authMiddleware")
const errorHandle = require("./src/middleware/errorHandling")
const paginationMiddleware = require("./src/middleware/paginationMiddleware");
const {sequelize} = require("./src/models")
require('dotenv').config()
const port = process.env.PORT || 8040;

//urutan berpengaruh
app.use(express.json());
app.use(cors())
// app.use(log);
// app.use(log2);
// app.use(authMiddleware);
// app.use(paginationMiddleware)
app.use(router);
app.use(notfound);
app.use(errorHandle);

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Running in http://localhost:${port}`);
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});



