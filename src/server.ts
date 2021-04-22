import express, { response } from "express";
import { useContainer } from "typeorm";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(7000, () => console.log("Server is running on port 7000"));
