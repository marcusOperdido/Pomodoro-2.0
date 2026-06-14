import { useState, useEffect } from "react";

export default function Temporizador() {
  // 300 segundos = 5 minutos
  const TEMPO_INICIAL = 300;
  const [segundos, setSegundos] = useState(TEMPO_INICIAL);
  const [estaAtivo, setEstaAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    // Só cria o intervalo se estiver ativo E o tempo não tiver acabado (maior que 0)
    if (estaAtivo && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos((segundosAnteriores) => segundosAnteriores - 1);
      }, 1000);
    } else if (segundos === 0) {
      // Quando o tempo chega a zero
      setEstaAtivo(false);
      alert("O tempo acabou!");
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [estaAtivo, segundos]); // O efeito roda quando ativa/pausa OU quando o segundo muda

  // Função para formatar os segundos restantes em MM:SS
  const formatarTempo = () => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    const minFormatados = String(minutos).padStart(2, "0");
    const segFormatados = String(segundosRestantes).padStart(2, "0");

    return `${minFormatados}:${segFormatados}`;
  };

  return (
    <div>
      <h2>Temporizador</h2>
      <div>{formatarTempo()}</div>
      <div>
        {/* Só permite iniciar/pausar se o tempo não tiver zerado */}
        <button onClick={() => setEstaAtivo(!estaAtivo)} disabled={segundos === 0}>
          {estaAtivo ? "Pausar" : "Iniciar"}
        </button>

        <button
          onClick={() => {
            setEstaAtivo(false);
            setSegundos(TEMPO_INICIAL);
          }}
        >
          Reiniciar
        </button>

        <div id="centralizacock">
          <div id="cock">
            <span id="min">00</span>
            <span>:</span>
            <span id="sec">00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
