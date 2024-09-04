import React from 'react';
import '../css/Navbar.css';
import '../css/Cadastro.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';


function IrParaLogin() {
    window.location.href = '/Login';
}

function IrParaCadastro() {
    window.location.href = '/Cadastro';
}


const CadastroCliente = () => {
    return (
        <div className="tela-cadastrocliente">
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="nav-buttons">
                    <button onClick={IrParaLogin} className="botao-entrar">Entrar</button>
                    <button onClick={IrParaCadastro} className="botao-cadastrar"><span className='gradient'>Cadastrar</span></button>
                </div>
            </div>
            <div className="login-container">
             <form>
                <br /><br />
                <h4 className='bemvindo'>Cadastrar-se como Cliente</h4>
                <br />
               <label className='labelNome'>Nome:</label>
               <input type="text" name="nome" placeholder="Digite seu nome" />
               <br />
               <label className='labelAdmin'>Email:</label>
               <input type="email" name="email" placeholder="Digite seu email" />
               <br />
               <label className='labelAdmin'>Senha:</label>
               <input type="password" name="password" placeholder="Digite sua senha" />
               <button type="submit">Cadastrar-se</button><br></br>
               <button type="submit">Já tem uma conta?</button>

           </form>
          </div>
        </div>
    );
};

export default CadastroCliente;