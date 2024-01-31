import { createContext, useContext, FC, ReactNode } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.tsx";



interface AuthContextType {
    signup: (email: string, password: string) => void;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is no auth provider');
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
   
    
    const signup = async (email: string, password: string): Promise<void> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>;
}

export default AuthProvider;


//CODIGO FUNCIONA PARA REGISTRAR USERS, PERO NO MUESTRA LOS ERRORES POR PANTALLA
// import { createContext, useContext, FC, ReactNode } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase.config.tsx";


// interface AuthContextType {
//     signup: (email: string, password: string) => void;
// }

// const authContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//     const context = useContext(authContext);
//     if (!context) throw new Error('There is no auth provider');
//     return context;
// }

// interface AuthProviderProps {
//     children: ReactNode;
// }

// const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

//     const signup = (email: string, password: string): void => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log("User created:", user);
//             })
//             .catch((error) => {
//                 console.error("Error creating user:", error);
//             });
//     }

//     return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>;
// }

// export default AuthProvider;