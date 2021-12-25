import { readFile, createReadStream } from "fs";
import path from "path";
import express from "express";
const router = express.Router();

router.get("/:fileid", (req, res) => {
    const { fileid } = req.params;
    const FILE = path.resolve(__dirname, `../data/${fileid}.txt`);

    const stream = createReadStream(FILE, {});
    stream.pipe(res);
});

export default router;