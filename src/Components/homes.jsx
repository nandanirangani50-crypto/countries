import React, { useState } from "react";

function Homes() {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );

      const result = await response.json();
      setCountries(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <button
        onClick={getData}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mb-6"
      >
        Get Countries
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No.</th>
              <th className="border border-gray-300 px-4 py-2">
                Country Name
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Cities Count
              </th>
            </tr>
          </thead>

          <tbody>
            {countries.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.country}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.cities.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homes;