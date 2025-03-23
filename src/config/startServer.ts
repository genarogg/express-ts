import { log } from "@fn";
import serverless from 'serverless-http'; // Importar serverless-http

const PORT = process.env.PORT || 4000;

const startServer = (app: any) => {
    if (process.env.IS_SERVERLESS) {
        return serverless(app); // Devolver la aplicación envuelta en serverless-http si es serverless
    } else {
        app.listen(PORT, () => {
            log.success(`El servidor esta corriendo en http://localhost:${PORT}`);
        });
    }
}

export default startServer;