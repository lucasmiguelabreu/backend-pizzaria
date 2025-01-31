import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateProductController } from "./controllers/product/CreateProductController";



const router = Router();

// -- Rotas user --
router.post('/users', new CreateUserController().handle) // criar usuário
router.post('/session', new AuthUserController().handle) // logar usuário
router.get('/me', isAuthenticated, new DetailUserController().handle) // autenticação de usuário logado

// -- Rotas Category --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- Rotas Products --
router.post('/product', isAuthenticated, new CreateProductController().handle)

export { router };