import React from "react";

interface tipContext {
  bill: number;
  tip: number;
  numPeople: number;
}

const TipDataContext = React.createContext<null | tipContext>(null);

export { TipDataContext };
