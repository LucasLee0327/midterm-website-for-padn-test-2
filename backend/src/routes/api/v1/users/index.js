import { Router } from "express";
import { getAllUsers, getOneUser, createOneUser, uploadAvatar } from "./handlers.js";

const router = Router();
router.get('/', getAllUsers);
router.post('/', createOneUser);
router.get('/:username', getOneUser);
router.post('/:username', uploadAvatar);
export default router;
