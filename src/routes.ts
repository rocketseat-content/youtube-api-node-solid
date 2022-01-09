import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users',  createUserController.handle);

export { router }