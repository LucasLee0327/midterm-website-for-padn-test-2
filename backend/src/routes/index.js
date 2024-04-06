import express from "express";
import {glob} from "glob";
import users from "./api/v1/users/index.js";
import csrfToken from "./api/v1/csrf-token/index.js";
import isLoggedIn from "./api/v1/login/index.js";

const rootRouter = express.Router();

rootRouter.use("/api/v1/users", users)
rootRouter.use("/api/v1/csrf-token", csrfToken)
rootRouter.use("/api/v1/login", isLoggedIn)

export default rootRouter;
