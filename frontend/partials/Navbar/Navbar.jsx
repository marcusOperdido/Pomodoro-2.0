import "./navbar.css";
import Butoon from "../componentes/botoes/botoes";
import Modal from "../componentes/Modal-padrao/modal";
import { supabase } from "../../services/supabase";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Erro ao sair:", error.message);
  };



  return (
    <header>
      <Modal isOpen={openModal} setOpen={setOpenModal} />
      <div id="cabeca">
        {user ? (
          <button className="botoes" onClick={handleSignOut}>
            Sair
          </button>
        ) : (
          <button className="botoes" onClick={() => setOpenModal(true)}>
            Log in/ Sign up
          </button>
        )}
        <button className="botoes">Pomodoro</button>
        <button className="botoes">PERFIL e GRAFICOS</button>
        <div className="switch__container" id="alinharbotao">
          <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
          <label htmlFor="switch-shadow"></label>
        </div>
      </div>
    </header>
  );
}
