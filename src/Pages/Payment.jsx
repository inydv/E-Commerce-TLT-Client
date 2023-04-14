import { useRef } from "react";
import "../Styles/Payment.css";
import { PaymentCard, PaymentForm } from "../Components/index";

export default function Payment() {
  const flipCard = useRef();

  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto grid place-items-center">
        <PaymentCard flipCard={flipCard} />
        <PaymentForm
          focus={() => flipCard.current.classList.add("flip-card")}
          blur={() => flipCard.current.classList.remove("flip-card")}
        />
      </div>
    </div>
  );
}
