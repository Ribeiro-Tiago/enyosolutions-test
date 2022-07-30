const express = require("express");

const router = require("./router");

const app = express();

app.use(router);

const port = 3000; // normally from env variable
app.listen(port, () => console.log(`App listening on port ${port}`));
