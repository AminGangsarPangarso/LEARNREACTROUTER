import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./componets/Home"
import Login from "./componets/Login"
import Detail from "./componets/Detail"
import Post from "./componets/Post"
import Product from "./componets/Product"
import Notfound from "./componets/Notfound"
import Proteksi from "./protect/Protect"
function App() {


  return (
    <>
      <h1>Data Users</h1>
      <BrowserRouter>
      <nav>
        <Link to='/'> Home</Link> || <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={ <Proteksi><Detail/></Proteksi>}>
          <Route path={"post"} element={<Post/>}/>
          <Route path={"product"} element={<Product/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
