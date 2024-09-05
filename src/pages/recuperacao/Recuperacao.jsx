import React from "react";
import "../css/Navbar.css";
import "../css/Recuperacao.css";
import logo from "../../assets/logo1.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

function IrParaLogin() {
  window.location.href = "/Login";
}

function IrParaCadastro() {
  window.location.href = "/Cadastro";
}

const Recuperacao = () => {
  return (
    <div className="tela-recuperacao">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-buttons">
          <button onClick={IrParaLogin} className="botao-entrar">
            Entrar
          </button>
          <button onClick={IrParaCadastro} className="botao-cadastrar">
            <span className="gradient">Cadastrar</span>
          </button>
        </div>
      </div>
      <h1>Esqueceu sua Senha?</h1>
      <div className="div-recuperacao">
        <div className="div-email">
          <h2><span className="gradient">Email</span></h2>
          <form >
          <p>Qual seu e-mail cadastro?</p>
          <input type="email" name="email" placeholder="Digite seu email" />
          <button type="submit">Enviar</button>
          </form>
          
        </div>
        <div className="div-codigo-email">
            <h3><span className="gradient">Acabamos de enviar um código para seu e-mail. </span></h3>
            <p>Insira no campo abaixo o código de verificação de 4 dígitos enviado para seu e-mail.</p>
            <form >
          <input
            type="password"
            name="password"
            placeholder="****"
          />
          <button type="submit">Enviar</button>
            </form>
            
        </div>
      </div>
    </div>
  );
};

export default Recuperacao;
