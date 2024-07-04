import { useEffect, useState } from "react";

const GeneTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/geneListData.json");
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
          <td className="p-6 text-center bg-gradient-to-t from-emerald-900 to-black text-white border border-black ">
            {geneData.ENSG_ID}
          </td>
          <td className=" p-6 text-center bg-gradient-to-t from-emerald-900 to-black text-white border border-black ">
            {geneData.SYMBOL}
          </td>
          <td className=" p-6 text-center bg-gradient-to-t from-emerald-900 to-black text-white border border-black ">
            {geneData.Alias}
          </td>
          <td className="p-6 text-center bg-gradient-to-t from-emerald-900 to-black text-white border border-black  ">
            {geneData.Description}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-black">
      <table className="table-auto w-full mx-auto bg-white ">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center border border-black ">
              ENSG_ID
            </th>
            <th className="px-4 py-2 text-center border border-black ">
              SYMBOL
            </th>
            <th className="px-4 py-2 text-center border border-black ">
              Alias
            </th>
            <th className="px-4 py-2 text-center border border-black ">
              Description
            </th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      )
    </div>
  );
};

export default GeneTable;
