import React, { useState } from "react";
import "../css/Navbar.css";
import "../css/Login.css";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

function IrParaLogin() {
  window.location.href = "/Login";
}

function IrParaCadastro() {
  window.location.href = "/Cadastro";
}

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aqui você pode usar fetch ou axios para enviar os dados para o back-end
    try {
      const response = await fetch("http://seu-backend-url.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirecionar ou realizar alguma ação após o login bem-sucedido
        console.log("Login bem-sucedido");
      } else {
        // Lidar com erros de login
        console.error("Erro ao fazer login");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  return (
    <div className="tela-loginadmin">
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
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <h4 className="bemvindo">Bem-Vindo Administrador</h4>
          <br />
          <label className="labelEmail" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email_admim"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="labelAdmin" htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password_admin"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="botao-logar">
            Logar
          </button>
          <Link to="/Recuperacao" className="link">
            Esqueci minha senha
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
