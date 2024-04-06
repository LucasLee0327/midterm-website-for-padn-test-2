import { Router } from "express";
import { logoutCheck } from "./handlers.js";

const router = Router();
router.post('/', logoutCheck);
export default router;