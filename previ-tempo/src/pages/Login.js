import React, { Component } from 'react';
import Footer from '../components/Footer';
import HeaderLogin from '../components/HeaderLogin';

class Login extends Component {
  state = {
    name: '',
  }

  inputText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { history } = this.props;
    const { name } = this.state;
    localStorage.setItem('nomeLogin', JSON.stringify({ nome: name }))
    history.push('/busca')
    console.log(name);
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <HeaderLogin />
        <div className="form-login">
        <h3>Insira seu nome para prosseguir!</h3>
          <form className="login-form">
            <input type="text" name="name" value={name} onChange={this.inputText} />
            <button type="button" disabled={name.length < 3} onClick={this.handleClick}>Entrar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;