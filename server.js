const express = require("express");

const port = 4000 || process.env.PORT;

const app = express();

app.listen(port, () => console.log(`Server listen on port : ${port}`));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
