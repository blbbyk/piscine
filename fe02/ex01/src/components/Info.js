import React , {useState, useEffect} from 'react';
import axios from 'axios';
const pageId = "fcb39d41de084468b504cbca15ce92a2";
const key = "secret_vn5rc99df6ldJEADI8j1lrVt9wVdcJBFxqcQiJPBayF";

async function getAllUsers(text) {
  
    try {
        const response = await axios({
            url : "http://localhost:4242/pages",
            method: 'get',
            headers : {
                "key" : key,
                "pageid" : pageId,
            } 
        })
        console.log(response.data.reult)
        return (response.data.result);
    }
    catch (err) {
        console.error(err);
    }
    
}

function makeOneInfo(one) {
    return (
        <div>hi</div>
    );
}

const Info = ()=> {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers()
            .then(res=>setUsers(res))
            .catch(console.error);
        }, []);
    
    return (
        <div>
            <h1>Users List</h1>
        </div>
    )
}

export default Info;