import { CartTable } from "../Shared/index";
import { ProceedNextBox } from "../Components/index";

export default function Cart() {
  return (
    <div className="px-5 grid xl:grid-cols-4 gap-2 xl:gap-5">
      <div className="xl:col-span-3 border-button border-2 rounded">
        <CartTable openForCart={true} />
      </div>
      <div className="xl:col-span-1">
        <ProceedNextBox />
      </div>
    </div>
  );
}
