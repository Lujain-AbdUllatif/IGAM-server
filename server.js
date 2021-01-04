const express = require("express");

/**
 * sign in handlers
 */
const { userSignIn } = require("./handlers/signin");
const { checkSignInParams, checkUserIfExists } = require("./middleware/users");

/*
 *Require Routers
 */
const adminRouter = require("./routers/admin");

/*
 * error middlewares
 */
const { handleError } = require("./middleware/err");

const port = 4000 || process.env.PORT;

const app = express();

app.listen(port, () => console.log(`Server listen on port : ${port}`));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
// using routers
app.post("/sign-in", checkSignInParams,checkUserIfExists, userSignIn);
app.use("/admin", adminRouter);

// using error handling middleware
app.use(handleError);
