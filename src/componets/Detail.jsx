import {  useParams ,Outlet, Link} from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
function Detail() {
    const {id} =useParams()

    const [ detail , setSDetail] = useState("")

    useEffect(()=>{
       const url =`https://jsonplaceholder.typicode.com/users/${id}`
       axios.get(url)
       .then(respone=>{
           setSDetail(respone.data)
       })
       .catch(err=>{
           console.log(err)
       })
       .finally(()=>{
           console.log('finally selesai')
       })
    },[id])
  return (
    <>
    <div>
        <h1>params id:{id}</h1>
        <pre>{JSON.stringify(detail,null,6)}</pre>
        <hr />
  </div>
   
        <main>
            <Outlet/>
        </main>
        <nav>
            <Link to={'post'}>Post</Link> | <Link to={'product'}>Product</Link>
        </nav>
        </>
  )
}

export default Detail