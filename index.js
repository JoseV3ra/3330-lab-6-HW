
import express from "express";
import gameRoutes from "./routes/games.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("<h1>Request received!</h1><h2>Hello from server app</h2>");
});

app.post("/", (req, res) => {
    res.status(200).send("3330: Post success");
});

app.use("/api", gameRoutes);

app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});
