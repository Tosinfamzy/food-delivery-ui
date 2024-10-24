import { useUser } from "../context/UserContext";
import CardDefault from "./CardDefault";

const Card = () => {
  const { user } = useUser();
  return !user ? (
    <CardDefault />
  ) : (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xs md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {/* Image Section */}
        <img
          className="h-24 w-24 md:h-48 md:w-48 object-cover rounded-full md:rounded-md mx-auto md:mx-0"
          src="https://cdn2.thecatapi.com/images/bga.png"
          alt="Cat"
        />
        <div className="flex-1">
          <p className="text-green-600 text-lg md:text-2xl font-semibold text-center md:text-left">
            {user.title}
          </p>
          <p className="text-sm md:text-base text-gray-500 mt-2 text-center md:text-left">
            {user.message}.
          </p>
          <p className="text-lg md:text-xl font-bold mt-4 text-center md:text-left">
            Total price: £{user.totalPrice}
          </p>

          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
              See Details
            </button>
            <button className="flex-1 bg-gray-200 py-2 rounded-md">
              Edit Delivery
            </button>
          </div>

          {user.freeGift ?? (
            <div className="mt-4 text-center md:text-left">
              <span className="bg-pink-200 text-pink-800 px-4 py-1 text-xs rounded-full">
                FREE GIFT
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
