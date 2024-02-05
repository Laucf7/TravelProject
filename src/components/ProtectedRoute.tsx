import { Navigate } from 'react-router-dom'
import { useAuth } from "../context/authContext"

function ProtectedRoute({ children }: { children: JSX.Element }) {

    const {user, loading} = useAuth();


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!user) {
        return <Navigate to="/log-in" />
    }

    return <>{children}</>;
}
export default ProtectedRoute

//AAAA
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/authContext";

// export function ProtectedRoute({children}:any){
// const {user, loading} = useAuth();

// if (loading) return <h1>loading</h1>
// if (!user) return <Navigate to="/log-in" />
// // else {return <Navigate to="/new-itinerary" />}


// return <>{children}</>
// }