// Importar rutas
import { inicioRouter } from "@router";

const router = (app: any) => {
    app.use("/", inicioRouter);

    // Middleware de manejo de errores
    app.use((err: any, req: any, res: any, next: any) => {
        console.error(err.stack);
        res.status(500).send("¡Algo salió mal!");
    });
}

export default router;