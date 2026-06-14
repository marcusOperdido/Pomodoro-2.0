import { useState } from "react";
import { supabase } from "../../../services/supabase";

export default function FormLogin({ onSwitchToRegister, onSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      alert("Erro ao entrar: " + error.message);
    } else {
      alert("Login feito com sucesso!");
      onSuccess(); // Fecha o modal
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="forms">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="forms">
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      <div className="cadastro-link">
        <a onClick={onSwitchToRegister}>Não tem conta? Cadastre-se</a>
      </div>
      <button type="submit" className="enter">
        Entrar
      </button>
    </form>
  );
}
