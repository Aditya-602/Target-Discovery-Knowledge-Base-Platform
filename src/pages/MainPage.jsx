import IntroText from "./IntroText";
import ByGene from "./ByGene";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen">
        <IntroText />
      </div>
      <div className="w-full h-screen">
        <ByGene />
      </div>
    </div>
  );
};

export default MainPage;
