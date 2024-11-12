import React, { useState } from "react";
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

const CadastroCliente = () => {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Enviar dados para o back-end
    try {
      const response = await fetch("http://seu-backend-url.com/cadastro-cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, cpf, password }),
      });

      if (response.ok) {
        // Redirecionar ou realizar alguma ação após o cadastro bem-sucedido
        console.log("Cadastro bem-sucedido");
      } else {
        // Lidar com erros de cadastro
        console.error("Erro ao cadastrar");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  return (
    <div className="tela-cadastrocliente">
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
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <h4 className="bemvindo">Cadastrar-se como Cliente</h4>
          <br />
          <label className="labelEmail" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email_cliente"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labelCpf" htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf_cliente"
            name="cpf"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <label className="labelAdmin" htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password_cliente"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="botao-cadastro">
            Cadastrar-se
          </button>
          <Link to="/Login" className="botao-ja-tem">
            Já tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;