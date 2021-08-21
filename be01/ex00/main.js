const express = require('express');

// Connecting to a database
const {sequelize}  = require('./models/index');

// Create a server
const app = express();
const port = 4242;

async function main()
{	
	// Model synchronization
	const driver = ()=>{
		sequelize.sync({})
				.then(()=>{console.log("init suc");})
				.catch((err)=>{console.log(err);});
		};
	try
	{

		// authenticate() : 
		// function to test if the connection is OK;
		await sequelize.authenticate(); 	
		await driver();
		console.log('Database connected successfully');
	}
	catch (err)
	{
		console.error(err);
	}
	// server is listening on 4242;
	app.listen(port, ()=>{});

	// Sequelize will keep the connection open by default, 
	// And use the same connection for all queries.
	// If you need to close the connection, call close();
	// close() : asynchronous and return a promise
	//sequelize.close();
}

main();
