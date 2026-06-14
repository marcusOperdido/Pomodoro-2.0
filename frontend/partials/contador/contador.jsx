import "./contador.css";
import Butoon from "../componentes/botoes/botoes";
import { useContext, useState, useEffect, useRef } from "react";
import { CorContext } from "../../context/cor";
import Temporizador from "../../js/relogioteste";

export default function Contador() {
  const { switchColor, dados } = useContext(CorContext);
  const [tempo, setTempo] = useState("");
  const [ativado, setativado] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dados.cor;
  }, [dados]);

  return (
    <div>
      <div id="relogio">
        <h2 id="Cont"></h2>
      </div>
      <div id="alinhamento">
        <div id="botoes">
          <button className="botoes alterartempo" onClick={() => switchColor("pomodoro")}>
            pomodoro
          </button>
          <button className="botoes alterartempo" onClick={() => switchColor("descanso")}>
            Descanso
          </button>
          <button className="botoes alterartempo" onClick={() => switchColor("longo")}>
            {" "}
            Descanso longo
          </button>
        </div>
      </div>
      <Temporizador />
      ;
      {/* <div className="container">
        <button className="title" onClick={() => pomodoro.reset()}>RESET</button>
        <button className="title" id="pause" onClick={() => pomodoro.isPause ? pomodoro.retake() : pomodoro.pause()}> PAUSAR/RETOMAR </button>
        <button className="title" onClick={() => pomodoro.init() ; atualizarDados()}> INICIAR </button> 

        <div className="input-number">
          <input
          type="number"
          id="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}/> 
        

        
          <div className="input-number-actions"></div>
        </div>
      </div> 
*/}
      <div>
        <footer id="rodape">
          <br />
          <p className="texto">1 pomodoro = 25 minutos</p>
          <p className="texto">Cada set conta para sua estatistica mensal</p>
        </footer>
      </div>
      {/* <div id="graficos">
        <div id="main" style="width: 600px;height:400px;"></div>
      </div> */}
    </div>
  );
}
