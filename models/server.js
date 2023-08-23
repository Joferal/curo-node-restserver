import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.js';


class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }


    middlewares(){


        // Cors
        this.app.use(cors());

        
        //Lectura y Parseo del body
        this.app.use( express.json() );


        //Directorio público
        this.app.use(express.static('public'));
    }


    routes() {

        this.app.use(this.usuariosPath,router);

    }


    listener() {



        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }


}

export {
    Server
}