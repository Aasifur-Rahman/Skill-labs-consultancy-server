import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.patch("/make-admin/:id", UserController.makeAdmin);

export const UserRoutes = router;
