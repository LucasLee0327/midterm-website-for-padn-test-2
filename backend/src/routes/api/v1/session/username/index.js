import { Router } from "express";
import { getUsername } from "./handlers.js";

const router = Router();
router.get('/', getUsername);
export default router;