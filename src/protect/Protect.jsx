import { Navigate } from "react-router-dom";

function Proteksi(props) {
 const fakeAuth = false;

 return fakeAuth ? (props.children) : (<Navigate to ='/login' /> )
}

export default Proteksi