import { Navigate } from "react-router-dom";

function Proteksi(props) {
 const fakeAuth = true

 return fakeAuth ? (props.children) : (<Navigate to ='/login' /> )
}

export default Proteksi