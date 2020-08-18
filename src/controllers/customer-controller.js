'use strict';

const validationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

exports.post = async (req, res, next) => {
    //VALIDAÇÃO DE DADOS
    let contract = new validationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter no minimo 3 caracteres!');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter no minimo 3 caracteres!');

    //DADOS INVÁLIDOS
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    };

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ["user"]
        });

        emailService.send(
            req.body.email,
            'Bem vindo ao Node Store',
            global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};