import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { PORT } from "./config/env.js";
const app = express();

// const PORT = process.env.PORT || 3000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.get("/api/users", (req, res) => {
  res.send("this is from server side ");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}"`);
});
