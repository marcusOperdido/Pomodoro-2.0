import { useState } from "react";
import FormLogin from "./FormLogin";
import FormCadastro from "./FormCadastro";
import "./modal.css";

  
export default function Modal({ isOpen, setOpen }) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={isOpen ? "modal mostrar" : "modaloculta"}>
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5>{isRegister ? "Cadastro" : "Login"}</h5>
            <button className="close-botton" onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="modal-body">
            {isRegister ? (
              <FormCadastro onSwitchToLogin={() => setIsRegister(false)} />
            ) : (
              <FormLogin 
                onSwitchToRegister={() => setIsRegister(true)} 
                onSuccess={() => setOpen(false)} 
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}