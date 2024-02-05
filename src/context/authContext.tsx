
import { createContext, useContext, FC, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.config.tsx";

interface AuthContextType {
    signup: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    user: User | any;
    logout: any;
    loading: Boolean;
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
interface User {
    email: string|null;
}


const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<Boolean>(true)
    
    const signup = async (email: string, password: string): Promise<void> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user);
            setUser(user);
            setLoading(false);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user);
            setUser(user);
            setLoading(false);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    const logout = signOut(auth)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])

    return <authContext.Provider value={{ signup, login, user, logout, loading }}>{children}</authContext.Provider>;
}

export default AuthProvider;
