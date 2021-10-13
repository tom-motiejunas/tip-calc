import React, { useContext, useEffect, useState } from "react";

import { TipDataContext } from "../../TipDataContext";

import "./screen.style.css";

interface Props {
  setTip: Function;
  setBill: Function;
  setNumPeople: Function;
}

export const Screen: React.FC<Props> = ({ setTip, setBill, setNumPeople }) => {
  const [tipData, setTipData] = useState("0.00");
  const [totalData, setTotalData] = useState("0.00");

  const tipContext = useContext(TipDataContext);
  useEffect(() => {
    const resetBtn = document.querySelector(".reset-btn");
    if (!tipContext?.bill || !tipContext.numPeople || !tipContext.tip) {
      setTipData("0.00");
      setTotalData("0.00");
      resetBtn?.classList.add("disable");
      return;
    }
    resetBtn?.classList.remove("disable");

    const tipAmount =
      (tipContext.bill * tipContext.tip) / 100 / tipContext.numPeople;
    const totalAmount = tipContext.bill / tipContext.numPeople + tipAmount;

    setTipData(tipAmount.toFixed(2));
    setTotalData(totalAmount.toFixed(2));
  }, [tipContext]);

  function reset() {
    setBill(0);
    setNumPeople(0);
    setTip(0);

    const billInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      ".input input, .tip-box input"
    );
    billInput.forEach((el) => (el.value = ""));

    const tips = document.querySelectorAll(".tip");
    tips.forEach((el) => el.classList.remove("active"));
  }
  return (
    <section className="screen">
      <div>
        <div className="info">
          <h2>Tip Amount</h2>
          <span>/ person</span>
        </div>
        <span className="tip-amount money">${tipData}</span>
      </div>
      <div>
        <div className="info">
          <h2>Total</h2>
          <span>/ person</span>
        </div>
        <span className="tip-amount money">${totalData}</span>
      </div>
      <button className="reset-btn" onClick={reset}>
        RESET
      </button>
    </section>
  );
};
