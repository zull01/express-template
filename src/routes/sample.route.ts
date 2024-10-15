import { Router } from "express";
import { sampleController } from "../controllers/sample.controller";

const route = Router()

route.get("/sample", sampleController);

export { route as sampleRoute }