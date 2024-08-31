import axios from "axios";
import {
  auth,
  googleProvider,
  db,
  facebookProvider,
  githubProvider,
} from "./firebaseConfig";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDocs, query, collection, where, addDoc } from "firebase/firestore";

const registerUserToDB = async (
  email: string | null,
  name: string | null,
  uid: string,
  image: string | null
) => {
  if (!email || !uid) {
    console.error("Email and UID are required to register a user.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3001/api/signup",
      { email, id: uid, name, image },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("User registered successfully:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.empty) {
      await addDoc(usersCollection, {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        image: user.photoURL,
      });
      await registerUserToDB(
        user.email,
        user.uid,
        user.displayName,
        user.photoURL
      );
    }
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

const signInWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, facebookProvider);
    const user = response.user;
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.empty) {
      addDoc(usersCollection, {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        image: user.photoURL,
      });
      await registerUserToDB(
        user.displayName,
        user.uid,
        user.photoURL,
        user.email
      );
    }
    return user;
  } catch (error) {
    console.error("Error signing in with Facebook:", error);
    throw error;
  }
};

const signInWithGithub = async () => {
  try {
    const response = await signInWithPopup(auth, githubProvider);
    const user = response.user;
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.empty) {
      addDoc(usersCollection, {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        image: user.photoURL,
      });
      await registerUserToDB(
        user.displayName,
        user.email,
        user.photoURL,
        user.uid
      );
    }
    return user;
  } catch (error) {
    console.error("Error signing in with Github:", error);
    throw error;
  }
};

const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.empty) {
      addDoc(usersCollection, {
        uid: user.uid,
        email: user.email,
      });
      await registerUserToDB(email, user.uid);
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

export {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
};
