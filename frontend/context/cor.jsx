import { createContext, useState } from "react";

export const CorContext = createContext();
const MODOS = {
  padrao: { cor: { backgroundColor: "" }, tempo: 0 },
  pomodoro: { cor: "#e74747", tempo: 25 },
  descanso: { cor: "#2ECC71", tempo: 5 },
  longo: { cor: "#3498DB", tempo: 15 },
};

export default function CorDoTempo({ children }) {
  const [modo, setModo] = useState("padrao");

  function switchColor(novoModo) {
    setModo(novoModo);
  }

  const dados = MODOS[modo];

  return <CorContext.Provider value={{ modo, switchColor, dados }}>{children}</CorContext.Provider>;
}
