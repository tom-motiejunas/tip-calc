import React, { useContext, useRef } from "react";

import "./tip-select.style.css";

import { TipDataContext } from "../../TipDataContext";

interface Props {
  setTip: Function;
}

export const TipSelect: React.FC<Props> = ({ setTip }) => {
  const tipContext = useContext(TipDataContext);
  const customTipField = useRef<HTMLInputElement>(null);

  function selectPerc(e: React.MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    const tips = document.querySelectorAll(".tip, .tip-box input");
    tips.forEach((el) => el.classList.remove("active"));
    target.classList.add("active");

    const value = target.value;
    if (!tipContext) return;
    setTip(+value);
  }

  function customTip(e: React.ChangeEvent<HTMLInputElement>) {
    if (!customTipField.current) return;

    const tips = document.querySelectorAll(".tip");
    tips.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    setTip(+customTipField.current.value);
  }

  return (
    <div className="tip-info">
      <span>Select Tip %</span>
      <div className="tip-box">
        <button
          className="select-tip1 tip"
          value="5"
          onClick={(e) => selectPerc(e)}
        >
          5%
        </button>
        <button
          className="select-tip2 tip"
          value="10"
          onClick={(e) => selectPerc(e)}
        >
          10%
        </button>
        <button
          className="select-tip3 tip"
          value="15"
          onClick={(e) => selectPerc(e)}
        >
          15%
        </button>
        <button
          className="select-tip4 tip"
          value="25"
          onClick={(e) => selectPerc(e)}
        >
          25%
        </button>
        <button
          className="select-tip5 tip"
          value="50"
          onClick={(e) => selectPerc(e)}
        >
          50%
        </button>
        <input
          type="number"
          ref={customTipField}
          name="custom-tip-input"
          placeholder="Custom"
          onChange={(e) => customTip(e)}
        />
      </div>
    </div>
  );
};
