import { Request, Response } from "express";

// archivo para importar todos los controladores
const homeGet = (req: Request, res: Response) => {
    res.render("inicio", { data: "express" });
}

export default homeGet;