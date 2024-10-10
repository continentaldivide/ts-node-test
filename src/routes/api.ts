import express from "express";
import { testRoute } from "../controllers/api";

const router = express.Router();

router.get("/", testRoute);

export default router;
