import { Router } from "express";
import homeGet from "../controllers/home";

const router: Router = Router();

router.get("/", homeGet);

export default router;
