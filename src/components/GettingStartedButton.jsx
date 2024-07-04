import { useNavigate } from "react-router-dom";

const GettingStartedButton = () => {
  const navigate = useNavigate();

  const toProtein = () => {
    navigate("/ByProtein");
  };
  const toGene = () => {
    navigate("/ByGene");
  };
  const toGeneList = () => {
    navigate("/GeneList");
  };

  return (
    <div className="flex flex-row justify-center gap-9">
      <button
        className="px-7 mt-6 py-2 rounded-lg bg-white text-black hover:bg-gray-200 w-1/3"
        onClick={toProtein}
      >
        Search by Protein
      </button>
      <button
        className="px-7 mt-6 py-2 rounded-lg bg-white text-black hover:bg-gray-200 w-1/3"
        onClick={toGene}
      >
        Search by Gene
      </button>
      <button
        className="px-7 mt-6 py-2 rounded-lg bg-white text-black hover:bg-gray-200 w-1/3"
        onClick={toGeneList}
      >
        Go to Gene list
      </button>
    </div>
  );
};
export default GettingStartedButton;
