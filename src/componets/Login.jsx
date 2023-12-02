import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error , setErrror] =useState ("")

  const navigate = useNavigate()

 const db =[
  {
    username:"user1",
    password:"user1",
  }
 ]

const handleLogin = (e) =>{
 e.preventDefault()

 const user = db.find((user)=>user.username===username && user.password===password)

 if(user){
  navigate('/dahsboard')
 }else{
  setErrror("salah ")
 }


}


  return (
   <>
   <div className="">
    <h2>Halaman Login </h2>
   <div className="" onSubmit={handleLogin }>
    <form action="">
      <div className="">
        <input type="text"
        id="username"
        value={username}
        placeholder="masukan username"
        onChange={(e)=>setUsername(e.target.value)} />

        <input type="password"
        id="password"
        value={password}
        placeholder="masukan password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">submit</button>
      </div>
    </form>

    {error && <h1>{error}</h1>}
   </div>
   </div>
   </>
  )
}

export default Login