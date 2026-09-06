import { use } from "react";
import UserCard from "./UserCard";

function Users ({usersDataPromise}){

    const users = use(usersDataPromise);

    console.log(users);
    

    return (
        <div>
            <h2>Users : {users.length} </h2>

            {
                users.map(user => <UserCard user = {user}></UserCard>  )
            }
            
        </div>
    )
}


fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {console.log(data)})

// async await

async function loadData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

const loadDatas = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    return data;
}

export default Users;