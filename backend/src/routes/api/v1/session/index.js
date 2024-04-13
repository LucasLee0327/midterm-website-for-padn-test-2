import { Router } from "express";
import { statusCheck } from "./handlers.js";

const router = Router();
router.get('/', statusCheck);
export default router;