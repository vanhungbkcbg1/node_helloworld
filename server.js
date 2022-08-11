'use strict';

const express = require('express');
const userRouter = require("./routers/user.router");
const uploadFile = require("./routers/upload.router");
const queueRouter= require("./routers/sqs.router");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use("/users", userRouter);
app.use("/uploads", uploadFile);
app.use("/sqs", queueRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);