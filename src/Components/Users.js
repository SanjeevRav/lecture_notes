import React,{useState,useEffect} from 'react'

function Users() {

    let [userList, setUserList] = useState({})
    const [name, setname] = useState("darshan")

  useEffect(() => {
    // fetch("https://api.github.com/users").then((response)=>{
    //     return response.json()
    //    }).then((users)=> {
    //        console.log(users);
    //      setUserList(users)
    //    })
  }, [])



    return (
        <div>
            <input type="text" name="" id="" defaultValue={name} onChange={(e)=>{
            setname(e.target.value)    
            }}/>

            <h1>List of Users</h1>
        </div>
    )
}

export default Users
