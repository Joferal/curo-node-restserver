import express from 'express';
import { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } from '../controllers/usuarios.js';
const router = express.Router();


router.get('/',usuariosGet);


router.put('/:id', usuariosPut);


router.post('/', usuariosPost);


router.delete('/', usuariosDelete);


router.patch('/', usuariosPatch);


export{
    router
}