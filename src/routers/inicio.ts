import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("inicio", { data: "Hola mundo" });
});

export default router;
