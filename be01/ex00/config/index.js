// path : main.js 파일을 실행하는 곳 기준(?)
require('dotenv').config({path : './config/.env'});
const env = process.env;

const development = {
	username : env.DB_USER,
	password : env.DB_PASS,
	database : env.DB_NAME,
	dialect : env.MYSQL_DIALECT,
	host : env.DB_HOST
};

const production = {
	username : env.DB_USER,
	password : env.DB_PASS,
	database : env.DB_NAME,
	dialect : env.MYSQL_DIALECT,
	host : env.DB_HOST
};

const test = {
	username : env.DB_USER,
	password : env.DB_PASS,
	database : env.DB_NAME,
	dialect : env.MYSQL_DIALECT,
	host : env.DB_HOST
};

module.exports = { development, production, test };
