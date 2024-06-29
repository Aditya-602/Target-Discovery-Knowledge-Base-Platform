import video1 from "../assets/video1.mp4";

const ByGene = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute bg-black bg-opacity-75 h-full w-full"></div>
      <div className="relative bg-white w-1/2 p-4 flex flex-col items-center rounded-lg">
        <div className="bg-white text-black p-4 align-top">
          <h1 className="text-4xl font-medium">Search by multiple Proteins</h1>
        </div>
        <div className="flex flex-col items-start w-full p-4">
          <div className="w-full px-1">
            <h3 className="text-black text-sm">Seed Genes</h3>
            {/* Add more content here as needed */}
          </div>
          <div className="bg-white rounded-lg w-full h-32 flex items-start mt-3">
            <input
              type="text"
              placeholder="Enter gene"
              className="w-full h-full rounded-lg border border-black text-sm px-2"
            />
          </div>
          <div className="flex flex-col items-center w-full mt-3">OR</div>
          <div className="w-full bg-white p-2 mt-3 rounded-lg">
            <input
              type="file"
              placeholder="choose file"
              className="border border-black w-full p-1"
            />
          </div>
          <div className="w-full mt-3">
            <div className="m-2 flex items-start w-full">
              <label className="w-1/3 p-1">Order</label>
              <label className="w-1/3 p-1">Min. Interaction Score</label>
              <label className="w-1/3 p-1">Interaction Type</label>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-start w-full gap-3">
                <select className="w-1/3 p-2 rounded-lg  border border-black">
                  <option value="zero">zero</option>
                </select>
                <select className="w-1/3 p-2 rounded-lg  border border-black">
                  <option value="zero">zero</option>
                </select>
                <select className="w-1/3 p-2  rounded-lg  border border-black">
                  <option value="zero">zero</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full p-2 mt-4">
            <div className="w-full flex flex-row items-start py-2">
              <p>Interaction score</p>
            </div>
            <div>
              <input type="radio" placeholder="combined score" />
              <label className="px-2">hello</label>
            </div>
          </div>
          <div className="w-full  flex flex-col justify-center items-center bg-blue-600 mt-4 rounded-lg">
            <button className="p-2 text-lg text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByGene;
