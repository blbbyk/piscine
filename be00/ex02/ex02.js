const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 4242;
const fs = require('fs');

server.on('request', (request, response)=>{

			if (request.method === "GET" && request.url == "/file")
			{
				let flag = false;
				fs.readFile('./data.json', 'utf8',(err, data)=>{
				if (err)
				{
					if (err.code !== 'ENOENT')
						return err500(response, err);
					fs.writeFile('./data.json', '', (err)=>{});
					flag = true;
				}
				response.statusCode = 200;
				if (flag || !data)
				{
					response.setHeader('Content-Type','text/plain');
					response.end("empty");
				}
				else
				{
					response.setHeader('Content-Type','application/json');
					let temp = JSON.parse(data);
					console.dir(temp);
					console.log(typeof temp);
					console.log(temp[0]);
					//response.end()
					response.end(data);
				}});
			}
		});

server.on('connection', ()=>{});
server.listen(port, hostname, f_start);

function err500(response, err)
{
	response.statusCode = 500;
	console.error(err);
	response.end();
}

function f_start()
{
	console.log(`Server running at ${hostname}:${port}`);
}
