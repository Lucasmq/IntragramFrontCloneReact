import React, { Component } from 'react';
import api from '../services/api'

import instagramLogo from "../assets/logo.png"
import "../css/Login.css"

class Login extends Component {
    constructor(props){
    super(props);
    this.state ={
        emailUser: "",
        passwordUser: "",
        autenticate: false,
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = async e =>{
        e.preventDefault();
        await api.post("auth/autenticate", {"email": this.state.emailUser, "password":this.state.passwordUser })
        .then(resp => {
            let payload = JSON.stringify(resp.data);
            /* Salva os dados do usuario no localStorage */
            localStorage.setItem("payload", payload);
            if(resp.status === 200){
                this.props.history.push('/');
            }
        })
        .catch((err) =>{
            console.log(err.response.data.error);
        })
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    render(){
        return(
            <section id="login">
                   <article >
                   <header>
                       <div className="user-info">
                            <img id="logo" src={instagramLogo} alt=""></img>
                       </div>

                   </header>
                        <FormLogin 
                            handleSubmit = {this.handleSubmit}
                            onChange = {this.onChange}
                            emailUser = {this.state.emailUser}
                            passwordUser = {this.state.passwordUser}
                        />
                   <footer>
                       <div id="trace-division">
                            <div id="trace"></div>
                            <div id="ou">OU</div>
                            <div id="trace"></div>
                       </div>
                        <div className="cadastrar">
                            {/* Temporario o href, vai ser subsituido pelo <Link> */}
                            <a href='http://localhost:3000/signup'><button type="button">Cadastre-se</button></a>
                        </div>
                       <a id="esquecer-senha" href="#3" >Esqueceu a senha?</a>
                   </footer>
               </article>
           </section>
        );
    }
}

export default Login;

function FormLogin(props){
    return(
        <form id="login-form" onSubmit={props.handleSubmit}>

                <input
                    type="email"
                    name="emailUser"
                    placeholder="Email"
                    onChange={props.onChange}
                    value={props.emailUser}
                />

                <input
                    type="password"
                    name="passwordUser"
                    placeholder="Senha"
                    onChange={props.onChange}
                    value={props.passwordUser}
                />

                <button type="submit">Enviar</button>
            </form>
    )
}