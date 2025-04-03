import { log } from "@fn";
const PORT = process.env.PORT || 4000;

const startServer = (app: any) => {
    app.listen(PORT, () => {
        log.success(`El servidor esta corriendo en http://localhost:${PORT}`);
    });
}

export default startServer;