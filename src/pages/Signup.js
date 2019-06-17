import React, { Component } from 'react';

import instagramLogo from "../assets/logo.png"
import "../css/Signup.css"

class Signup extends Component {
    constructor(props){
    super(props);
    this.state ={
        emailUser: "",
        passwordUser: "",
        nameUser: "",
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = async e =>{
        e.preventDefault();
        window.confirm("Enviado!")
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    render(){
        return(
            <section id="signup">
                <article >
                   <header>
                        <div className="user-info">
                            <img id="logo" src={instagramLogo} alt=""></img>
                        </div>
                        <h2 className="frase-cadastro">Cadastre-se para ver fotos e vídeos dos seus amigos.</h2>    
                   </header>
                        <FormLogin 
                            handleSubmit = {this.handleSubmit}
                            onChange = {this.onChange}
                            emailUser = {this.state.emailUser}
                            passwordUser = {this.state.passwordUser}
                        />

                   <footer>
                        <h2 className="frase-cadastro">Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.</h2>
                   </footer>
               </article>
               <article className="acount" >
                    <div className="have-acount">
                        <p>Tem um conta?
                            {/* Temporario o href, vai ser subsituido pelo <Link> */}
                            <a href="http://localhost:3000/Login"> Conecte-se</a> 
                        </p>
                    </div>
               </article>
           </section>
        );
    }
}

export default Signup;

function FormLogin(props){
    return(
        <form id="signup-form" onSubmit={props.handleSubmit}>
                
                <input
                    type="text"
                    name="nameUser"
                    placeholder="Nome Completo"
                    onChange={props.onChange}
                    value={props.nameUser}
                />
                
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
                {console.log(props.passwordUser)}

                <button type="submit">Cadastre-se</button>
            </form>
    )
}