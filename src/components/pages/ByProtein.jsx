import video1 from "../../assets/video1.mp4";
import { useNavigate } from "react-router-dom";

const ByProtein = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div className="relative bg-white rounded-lg h-1/3 w-1/3 p-8 flex flex-col justify-center">
        <div className="flex flex-col items-center font-bold">
          <h1 className="text-4xl text-black">Search by</h1>
          <h1 className="text-4xl text-black">Protein name</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <input
            type="text"
            placeholder="Enter the name"
            className="w-3/4 rounded-lg p-2 border border-black"
          />
          <div className="flex flex-col items-center w-full mt-5">
            <button className="text-white p-2 w-1/5 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </div>
      <button
        className="bg-white absolute text-sm rounded-lg py-2 px-4 bottom-6 mt-4 p-4 text-black border border-black"
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default ByProtein;
