import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Home() {
     const [users,setUsers] =useState([])

     useEffect(()=>{
        const url ="https://jsonplaceholder.typicode.com/users"
        axios.get(url)
        .then(respone=>{
            setUsers(respone.data)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>{
            console.log('finally selesai')
        })
     })

     const navigate =useNavigate()

     const handleDetails = (id) =>{
        navigate(`/detail/${id}`)
     }

  return (
    <div>

        {users.map((items)=>{
            return( 
                <li key={items.id}>

                    {items.name} 
                    <button onClick={()=>handleDetails(items.id)}>Go to Details</button>
                </li>
            )

        })}
    </div>
  )
}

export default Home