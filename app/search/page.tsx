"use client"
import React, {useState} from "react"

import Search from "./Search"

const allusers = ["john","hailey","favor","delight","jane","james","joseph","joshua"]

interface GlobalProp {}

const GlobalSearch = ({}: GlobalProp)=>{
    const [users, setUsers] = useState(allusers);

    const handleSearch = 
      (text: string) => {
        console.log(users[0]);

        const filteredUsers = allusers.filter((user) => user.includes(text));
        setUsers(filteredUsers);
      }

    return (
      <div>
        <Search onChange={handleSearch} />
        <ul>
          {users.map((user) => (
            <li key={user}>
              <a href={`/${user
                
              }`}>{user}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default GlobalSearch;