const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_PORT , TIMEZONE} = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PWD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "mysql",
    "timezone": TIMEZONE || "Asia/Jakarta",
    "logging": true,
    "dialectOptions": {
			"timezone": "local",
		}
  },
  
  "test": {
    "username": DB_USER,
    "password": DB_PWD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "mysql",
    "timezone": TIMEZONE || "Asia/Jakarta",
    "dialectOptions": {
			"timezone": "local",
		}
  },

  "production": {
    "username": DB_USER,
    "password": DB_PWD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "mysql",
    "pool": {
      "max": 20,
      "min": 0,
      "acquire": 60000,
      "idle": 10000
    },
    "logging": false,
    "timezone": TIMEZONE || "Asia/Jakarta",
    "dialectOptions": {
			"timezone": "local",
		}
  }
}
