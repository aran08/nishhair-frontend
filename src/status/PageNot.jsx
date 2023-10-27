import { FaQuestion } from "react-icons/fa";

const PageNotfound = () => {
  return (
    <div className="flex justify-center items-center bg-[#0FB2AE] h-screen">
      <div className="">
        <h1 className="text-8xl text-center font-bold pb-6 text-red-400">
          <h className="text-black">error </h>404.
        </h1>
        <div className="flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-normal">Something's wrong here...</h1>
            <p className="pt-3 w-[500px] text-lg">
              We cant't find the page you're looking for. Check out our Help
              Center of head back to home.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-10 h-[200px] items-center">
          <button className="bg-white border-2 border-white w-24 h-9 text-[#0FB2AE] font-bold">
            Help
          </button>
          <button className="text-white border-2 border-white w-24 h-9 font-bold">
            Home
          </button>
        </div>
      </div>
      <div className="">
        <FaQuestion className="h-[900px] w-[400px]" />
      </div>
    </div>
  );
};

export default PageNotfound;
