import path from 'path';

const viewEngine = (app: any) => {
    app.set('view engine', 'ejs');
    app.set("views", path.join(__dirname, "../views"))
}

export default viewEngine;