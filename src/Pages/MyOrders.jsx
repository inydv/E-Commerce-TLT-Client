import { FiExternalLink } from "react-icons/fi";

export default function MyOrders() {
  return (
    <div className="px-5 overflow-x-auto">
      <table className="border-button border-2 rounded w-full">
        <tr className="bg-button">
          <th className="py-1 px-2"># ID</th>
          <th className="py-1 px-2 whitespace-nowrap">ITEM QTY</th>
          <th className="py-1 px-2">PRICE</th>
          <th className="py-1 px-2">STATUS</th>
          <th className="py-1 px-2"></th>
        </tr>
        <tr className="border-b-button border-b-2">
          <td className="p-2 text-center whitespace-nowrap"># qwertyuiodeec</td>
          <td className="p-2 text-center">5</td>
          <td className="p-2 text-center">5000</td>
          <td className="p-2 text-center">Shipped</td>
          <td className="p-2 text-center">
            <FiExternalLink size={25} />
          </td>
        </tr>
      </table>
    </div>
  );
}
