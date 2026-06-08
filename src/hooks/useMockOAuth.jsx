import { useState } from 'react';

const useMockOAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [account, setAccount] = useState(() => {
    const savedAccount = localStorage.getItem('account');
    return savedAccount ? JSON.parse(savedAccount) : {};
  });

  const [signOut, setSignOut] = useState(() => {
    const savedSignOut = localStorage.getItem('sign-out');
    return savedSignOut ? JSON.parse(savedSignOut) : true;
  });

  const signUpUser = (newAccount) => {
    localStorage.setItem('account', JSON.stringify(newAccount));
    localStorage.setItem('sign-out', JSON.stringify(false));
    setAccount(newAccount);
    setSignOut(false);
  };

  const loginUser = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    setSignOut(false);
  };

  const logoutUser = () => {
    localStorage.setItem('sign-out', JSON.stringify(true));
    setSignOut(true);
  };
  return {
    isSignUp,
    account,
    signOut,
    setIsSignUp,
    setAccount,
    setSignOut,
    signUpUser,
    loginUser,
    logoutUser,
  };
};

export default useMockOAuth;
