const Quote = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div className="max-w-[70%]">
            <div className="text-4xl font-bold hover:scale-105 duration-300">
              Welcome to my end-to-end full stack blogging website
            </div>
            <div className="text-xl font-semibold mt-4 hover:scale-105 duration-300">
              Vaibhav Bansal
            </div>
            <div className="text-sm font-light text-gray-500 hover:scale-105 duration-300">
              New Delhi, India
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
