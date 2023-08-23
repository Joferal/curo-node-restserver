import express from 'express';
const responses = express.response;

const usuariosGet = (req, res = responses) => {

    const {q, nombre='No name', apikey} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        apikey

    });
}


const usuariosPost = (req, res = responses) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad

    });
}


const usuariosPut = (req, res = responses) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}


const usuariosDelete = (req, res = responses) => {

    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}


const usuariosPatch = (req, res = responses) => {

    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}



export{
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}