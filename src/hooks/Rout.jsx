import { Navigate } from "react-router-dom"

function Rout({children}) {
    const isLogin = false;
    if (isLogin) {
        return children;
    } else {
        return <Navigate to='/login'></Navigate>
    }
}

export default Rout