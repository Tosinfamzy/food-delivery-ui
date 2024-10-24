const CardDefault = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xs md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <p className="text-green-600 text-lg md:text-2xl font-semibold text-center md:text-left">
          Please select a user.
        </p>
      </div>
    </div>
  );
};

export default CardDefault;
