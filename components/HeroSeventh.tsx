import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroSeventh = () => {
  return (
    <div className="bg-table bg-cover bg-no-repeat w-screen h-screen grid place-items-center p-48 pt-72 pl-52 gap-y-10">
      <table className="table-auto w-1/2 mt-4 rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-2">Season</th>
            <th className="px-4 py-2">Number of Episodes</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeroSeventh;
