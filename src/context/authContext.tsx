import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase.config"

const Authcontext = createContext<any>(null);
export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser!)
}
  const signup = async (email: any, password: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enviar el correo de verificación al usuario registrado
    sendVerificationEmail();

      setUser(user);
      setLoading(false);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

 


const login = async (email: any, password: any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      if (user && user.emailVerified) {
        setUser(user);
        setLoading(false);
        
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => signOut(auth);
  const ResetPassword=(email: string)=>{
    sendPasswordResetEmail(auth,email)
}

const checkEmailVerification = (currentUser: User | null) => {
    if (currentUser && currentUser.emailVerified) {
      setUser(currentUser);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        checkEmailVerification(currentUser);
    });
    return () => unSubscribe();
  });

  

  return (
    <Authcontext.Provider
      value={{
        signup: signup,
        login: login,
        user: user,
        logout: logout,
        loading: loading,
        ResetPassword:ResetPassword,
        sendVerificationEmail:sendVerificationEmail
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}

export default AuthProvider;

//AAAAA
// import { createContext, useContext, FC, ReactNode, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase.config.tsx";

// interface AuthContextType {
//     signup: (email: string, password: string) => void;
//     login: (email: string, password: string) => void;
//     user: User | any;
//     logout: any;
//     loading: Boolean;
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
// interface User {
//     email: string|null;
// }


// const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState<Boolean>(true)
    
//     const signup = async (email: string, password: string): Promise<void> => {
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             console.log("User created:", user);
//             setUser(user);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error creating user:", error);
//             throw error;
//         }
//     }

//     const login = async (email: string, password: string): Promise<void> => {
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             console.log("User created:", user);
//             setUser(user);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error creating user:", error);
//             throw error;
//         }
//     }

//     const logout = signOut(auth)

//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         })
//         return () => unsubscribe();
//     },[])

//     return <authContext.Provider value={{ signup, login, user, logout, loading }}>{children}</authContext.Provider>;
// }

// export default AuthProvider;
