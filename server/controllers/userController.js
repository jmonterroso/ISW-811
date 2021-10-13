const UserModel = require("../models/User");
const jwt = require('jsonwebtoken');

//Se obtiene las variables de entorno
const config = process.env;

// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new UserModel({ username: username, password: password });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
};

// logueo de usuarios
module.exports.signin = async (req, res, next) => {

    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username }).exec();

    if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
        //Si el usuario existe verifica si las contraseñas
        user.comparePassword(password, user.password, function (err, isMatch) {
            if (isMatch && !err) {
                // Si el usuario es correcto y la contraseña coindice se procede a crear el token
                const token = jwt.sign({ "username": username}, 
                                         config.SECRETWORDJWT, 
                                         { expiresIn: "2h"}
                                       );
                // return the information including token as JSON
                res.json({ success: true, token: 'JWT ' + token });

            } else {
                //si la contraseña no coincide se procede a indicar el error
                res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
        });
    }
};

