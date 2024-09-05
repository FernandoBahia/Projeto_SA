import React from "react";
import "../css/Navbar.css";
import "../css/Cadastro.css";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

function IrParaLogin() {
  window.location.href = "/Login";
}

function IrParaCadastro() {
  window.location.href = "/Cadastro";
}

const CadastroAdmin = () => {
  return (
    <div className="tela-cadastroadmin">
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
      <div className="cadastro-container">
        <form>
          <br />
          <br />
          <h4 className="bemvindo">Cadastrar-se como Administrador</h4>
          <br />
          <label className="labelEmail">Email:</label>
          <input type="email" name="email" placeholder="Digite seu email" />
          <label className="labelAdmin">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <br />
          <Link to="/Login" className="botao-cadastro">
          Cadastrar-se
          </Link>
          <Link to="/Login" className="botao-ja-tem">
          Já tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CadastroAdmin;
