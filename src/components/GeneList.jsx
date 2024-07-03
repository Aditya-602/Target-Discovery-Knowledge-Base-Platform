import { useEffect, useState } from "react";

const GeneTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/geneListData.json"); // Replace with your actual file path or API URL
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderTableData = () => {
    return data.map((item, index) => {
      const geneData = Object.values(item)[0][0];
      return (
        <tr key={index}>
          <td className="border border-b-blue-700 px-4 py-2 text-center ">
            {geneData.ENSG_ID}
          </td>
          <td className="border border-b-blue-700 px-4 py-2  text-center">
            {geneData.SYMBOL}
          </td>
          <td className="border border-b-blue-700 px-4 py-2  text-center">
            {geneData.Alias}
          </td>
          <td className="border border-b-blue-700 px-4 py-2 text-center ">
            {geneData.Description}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <table className="table-auto w-full mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">ENSG_ID</th>
            <th className="px-4 py-2 text-center">SYMBOL</th>
            <th className="px-4 py-2 text-center">Alias</th>
            <th className="px-4 py-2 text-center">Description</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      )
    </div>
  );
};

export default GeneTable;
