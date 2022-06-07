import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

const NFTDropPage = () => {
  // Auth
  // connectWithMetamask - фукнция для установки соединения с MetaMask
  const connectWithMetamask = useMetamask();

  // После клика по кнопке Sign In и вызова функции connectWithMetamask в address будет помещен адрес кошелька (номер кошелька). Если коннекта нет, тогда undefined
  const address = useAddress();

  // Функция для разрыва соединения
  const disconnect = useDisconnect();
  // ---

  console.log(address);

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl lg:w-72"
              src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_960_720.jpg"
              alt=""
            />
          </div>
          <div className="space-y-6 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
            <h2 className="text-xl text-gray-300">A collection of PAPAFAM Apes who live & breathe React</h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The <span className="font-extrabold underline decoration-pink-600/50">PAPAFAM</span> NFT Market Place
          </h1>
          {/* При клике по кнопке коннектимся к Метамаска - появляется всплывающее окно для коннекта */}
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-2 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}
          </p>
        )}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://cdn.pixabay.com/photo/2015/12/19/13/06/child-1099746_960_720.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">The PAPAFAM Ape Coding Club | NFT Drop</h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>

        {/* Mint Button */}

        <button className="h-16 w-full rounded-full bg-red-600 font-bold text-white">Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  );
};

export default NFTDropPage;
