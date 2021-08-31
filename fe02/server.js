const cors = require('cors');
const express = require ('express');
const app = express();
const axios = require('axios');
const pageId = "fcb39d41de084468b504cbca15ce92a2";
const notionpath = "https://api.notion.com/v1"

async function queryAllUsers(req, res) {
   const path = notionpath + "/users";
    try {
        let result = await axios({
            url : path,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${req.headers.key}`,
                "Notion-Version" : "2021-08-16",
            }
        })
        console.log("Success : queryAllUsers");
        res.status(200);
        res.set("Content-type", "application/json");
        res.send({result : result.data.results});
        res.end();
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.end();
    }
}

async function queryPages(req, res) {
  
    const path = notionpath + "/pages/" + req.headers.pageid;
    try {
        let result = await axios({
            url : path,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${req.headers.key}`,
                "Notion-Version" : "2021-08-16",
            }
        })
        console.log("Success : queryPagaes");
        res.status(200);
        res.set("Content-type", "application/json");
        console.log(result.data);
        res.send({result : result.data});
        res.end();
    }
    catch (err) {
       console.log(err);
        res.status(500);
        res.end();
    }
}
async function retrieveDB(req, res) {
    const path = notionpath + "/databases/" + req.headers.dbid;
}

function main()
{
    let corsOptions = {
        origin: "http://localhost:3000"
    };
    app.use(express.json());
    app.use('/', cors(corsOptions));
    app.get('/users', queryAllUsers);
    app.get('/pages', queryPages);
    app.get('/database', retrieveDB);
    app.listen(4242, ()=>{console.log("server is running")});
}
main();