import React from "react";
import "../css/Navbar.css";
import "../css/Perfil.css";
import logo from "../../assets/logo1.png";
import imgperfil from "../../assets/imgperfil.png";
import imgperfil2 from "../../assets/imgperfil2.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

function IrParaLogin() {
  window.location.href = "/Login";
}

function IrParaCadastro() {
  window.location.href = "/Cadastro";
}

const Perfil = () => {
  return (
    <div className="tela-perfil">
      <div className="navbar">
        <div className="logo">
          <Link to="/ClienteLogado">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="perfil">
        <Link className="sair" to="/">
            <h2>Sair</h2>
          </Link>
          <Link to="/Perfil">
            <img src={imgperfil} alt="perfil" />
          </Link>
          
        </div>
      </div>

      <div className="perfil2">
        <h1>
          <span className="gradient">Alterar Dados</span>
        </h1>
        <img src={imgperfil2} alt="perfil" />
      </div>
      <div className="dados">
        <form>
          <p>Nome Completo</p>
          <input placeholder="Nome Completo" />
          <p>CPF</p>
          <input placeholder="Insira seu CPF" />
          <p>Email</p>
          <input placeholder="Insira seu Email" />
          <br />
          <button className="botao-enviar">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
