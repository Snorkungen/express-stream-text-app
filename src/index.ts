import path from "path";
import express from "express";
import API from "./api";

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", express.static(path.resolve(__dirname, "./public")));

app.use("/api", API);

app.listen(PORT, () => {
    console.log(`Server starting on port : ${PORT}
        http://localhost:${PORT}`)
});

export default app;