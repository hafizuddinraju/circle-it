import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import app from "../firebase/firebase.config";
import { getStoredCart } from "../utils/fakeDB";

export const AuthDataContext = createContext();

const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [sign, setSign] = useState({});
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState(getStoredCart());
  const [loading, setLoading] = useState(true);
  

  const handleAddToCart = (card) => {
    let newCart = [];
    const exists = cart.find((existingcard) => existingcard._id === card._id);
    if (!exists) {
      card.quantity = 1;
      newCart = [...cart, card];
    } else {
      const rest = cart.filter((existingcard) => existingcard._id !== card._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);

    localStorage.setItem("shopping-cart", JSON.stringify(newCart));
    toast.info("Info: Product Added!", { autoClose: 500 });
  };

  useEffect(() => {
    fetch("https://circle-it-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const loginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  const gitHubLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const createUser = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const userProfile = async (profile) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setLoading(false);

      return () => {
        unsubcribe();
      };
    });
  }, [sign]);
  const info = {
    user,
    handleAddToCart,
    setCart,
    loading,
    loginAccount,
    category,
    userProfile,
    googleLogin,
    cart,
    gitHubLogin,
    logOut,
    setSign,
    createUser,
  };
  return (
    <AuthDataContext.Provider value={info}>{children}</AuthDataContext.Provider>
  );
};

export default AuthContext;
