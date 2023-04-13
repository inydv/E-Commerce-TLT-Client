import { MyAccountUpperCard, MyAccountLowerCard } from "../Components";

export default function MyAccount() {
  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="hidden xl:block xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <MyAccountUpperCard />
        <MyAccountLowerCard />
      </div>
    </div>
  );
}
