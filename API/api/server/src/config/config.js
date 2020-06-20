require('dotenv').config()


module.exports ={
  "development": {
    "username": "thomas",
    "password": "password",
    "database": "dofus_helper",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "thomas",
    "password": "password",
    "database": "dofus_helper",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "thomas",
    "password": "cakPls-led2",
    "database": "dofus_helper",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "secret": "secretPassphraseForDofusHelper"
}
