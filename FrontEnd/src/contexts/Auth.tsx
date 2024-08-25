import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { User } from "../@types/User";
import { AuthContextType } from "../@types/Auth";

export const AuthContext = createContext<AuthContextType>({ user: null });

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        if (currentUser) {
          const { uid, email, displayName } = currentUser;
          setUser({ uid, email, displayName });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [auth]);

  const authContextValue: AuthContextType = {
    user,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
