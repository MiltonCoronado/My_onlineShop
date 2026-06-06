import { useContext } from 'react';
import { ShoppingCartContext } from '../components/Context';

const MyAccount = () => {
  const { account } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="font-medium text-xl mb-6">My account</h1>

      <div className="flex flex-col w-80 gap-3 text-sm font-light">
        <p>
          <span className="font-normal">Name:</span>{' '}
          {account?.name || 'No name provided'}
        </p>
        <p>
          <span className="font-normal">Email:</span>{' '}
          {account?.email || 'No email provided'}
        </p>

        <button className="border border-black text-black w-full py-3 rounded-lg mt-4 font-light hover:bg-black/5 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
