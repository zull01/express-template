import express, { Application, Request, Response } from "express";
import { asyncHandler } from "./utils/asyncHandlerr.js";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app: Application = express();
app.use(helmet());
app.use(cors({ origin: "*" }));

app.get(
    "/",
    asyncHandler(async (req: Request, res: Response) => {
        res.json({ title: "Hello World!!" });
    }),
);


// Import Routes
import { sampleRoute } from './routes/sample.route.js';

app.use("/", sampleRoute)

export { app };
