import express from "express";
import API from "./api";

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;




app.use("/api", API);

app.listen(PORT, () => {
    console.log(`Server starting on port : ${PORT}
        http://localhost:${PORT}`)
});

export default app;