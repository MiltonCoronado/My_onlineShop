import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../components/Context';

const Signin = () => {
  const { account, loginUser, signUpUser, isSignUp, setIsSignUp } =
    useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hasAccount = Object.keys(account).length > 0;

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser();
    navigate('/');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpUser({ name, email, password });
    navigate('/');
  };

  if (isSignUp) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="font-medium text-xl mb-6">Welcome</h1>
        <form onSubmit={handleSignUp} className="flex flex-col w-80 gap-4">
          <label className="flex flex-col text-sm font-light">
            Your name:
            <input
              type="text"
              required
              className="border border-black rounded-lg p-2 mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-sm font-light">
            Your email:
            <input
              type="email"
              required
              className="border border-black rounded-lg p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-sm font-light">
            Your password:
            <input
              type="password"
              required
              className="border border-black rounded-lg p-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-lg mt-2 font-light"
          >
            Create
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="font-medium text-xl mb-6">Welcome</h1>

      {hasAccount ? (
        <div className="flex flex-col w-80 text-center gap-2">
          <p className="text-sm font-light text-left">
            <span className="font-normal">Email:</span> {account.email}
          </p>
          <p className="text-sm font-light text-left">
            <span className="font-normal">Password:</span> *******
          </p>
          <button
            onClick={handleLogin}
            className="bg-black text-white w-full py-3 rounded-lg mt-4 font-light"
          >
            Log in
          </button>
          <span className="text-xs underline cursor-pointer mt-2">
            Forgot my password
          </span>
        </div>
      ) : (
        <div className="flex flex-col w-80 gap-4 text-center">
          <p className="text-sm font-light text-gray-500">
            No account found. Please sign up.
          </p>
        </div>
      )}

      <button
        onClick={() => setIsSignUp(true)}
        className="border border-black text-black w-80 py-3 rounded-lg mt-6 font-light"
      >
        Sign up
      </button>
    </div>
  );
};

export default Signin;
