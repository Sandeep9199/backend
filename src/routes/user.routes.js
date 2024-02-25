import { Router } from "express";
import { registerUSer } from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(registerUSer);
// router.route("/login").post(login);

export default router;
