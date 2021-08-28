import React , {useState, useEffect} from 'react';
import axios from 'axios';
const pageId = "fcb39d41de084468b504cbca15ce92a2";
const key = "secret_vn5rc99df6ldJEADI8j1lrVt9wVdcJBFxqcQiJPBayF";

async function getAllUsers(text) {
  
    try {
        const response = await axios({
            url : "http://localhost:4242/users",
            method: 'get',
            headers : {
                "key" : key,
            } 
        })
        return (response.data.result);
    }
    catch (err) {
        console.error(err);
    }
    
}

function makeOneInfo(one) {
    if (!one)
        return (
            <div> 잠시만 기다려주세요 </div>
        );
    const email = (one.type === "person") ? one.person.email : "없음";
    return (
        <ul key={one.id}>
            <li>name : {one.name}</li>
            <li>type : {one.type} </li>
            <li>email : {email}</li>
            <img width="50px" alt="프로필 이미지" src={one.avatar_url}></img>
        </ul>
    )
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
              {users.map(one =>(makeOneInfo(one)))}
        </div>
    )
}

export default Info;