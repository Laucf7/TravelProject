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