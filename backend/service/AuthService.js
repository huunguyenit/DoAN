var mysql = require('../fn/mysql-db')
var jwt = require('jsonwebtoken')

exports.signin = (params) => {

    // checking params have email and password.
    if (!params.email || !params.password) {
        let error = new Error('Email & password can\'t be empty')
        return Promise.reject(error)
    }

    // get user.
    const ACTIVE = 1
    let query = `SELECT * FROM user WHERE email = '${params.email}' AND password = '${params.password}' AND isReal = ${ACTIVE}`
    let user = mysql.load(query)

    return user
        .then(result => {
            // just get first user.
            let userData = result[0]
            return Promise.resolve(userData)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

exports.signup = (params) => {
    let defaultParams = {
        idAdmin: 0
    }

    params = Object.assign(defaultParams, params)
    
    if (!params.email || !params.password || !params.address || !params.fullname) {
        let error = new Error('Validation fail, input is invalid.')
        return Promise.reject(error)
    }

    let query = `INSERT INTO user (Email, Password, FullName, Address, isAdmin) VALUES('${params.email}', '${params.password}', '${params.fullname}', '${params.address}', ${params.idAdmin})`
    let insert = mysql.insert(query)
    return insert 
        .then(result => {
            return Promise.resolve(params)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

exports.authResponse = (user) => {
    // generate token.
    let data = {
        'email': user.Email,
        'isAdmin': user.isAdmin ? user.isAdmin.data : 0
    }
    let token = jwt.sign(data, process.env.JWT_PK)

    return {
        user: user,
        token: token
    }
}
