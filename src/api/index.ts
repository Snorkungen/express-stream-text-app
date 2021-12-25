import streamfile from "./streamfile";

import express from "express";
const router = express.Router();

router.use("/streamfile", streamfile);

export default router