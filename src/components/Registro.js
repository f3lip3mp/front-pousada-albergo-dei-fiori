import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Register.css'
import Arrow from '../assets/arrow.svg';
import Foto1 from '../assets/foto1.jpg'
import Foto2 from '../assets/foto6.jpg'
import Foto3 from '../assets/foto11.jpg'
import Logo from '../assets/logo.png'
import Login from './Login'
import '../script';


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [born, setBorn] = useState("");
    const [tel, setTel] = useState("");
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='container-register-body'>
            <div className='header-menu'>
                <div className="wrap-logo">
                    <img className='logo' src={Logo} />
                </div>
                <div className='wrap-menu-bar'>
                    <div className='menu-bar'>
                        <Link className='btns btn-inicio' to='/login'>Início</Link>
                        <Link className='btns btn-sobre' to='/login'>Sobre</Link>
                        <Link className='btns btn-fotos' to='/login'>Fotos</Link>
                        <Link className='btns btn-reserve' to='/login'>Reserve agora</Link>
                        <Link className='btns btn-local' to='/login'>Localização</Link>
                    </div>
                </div>
            </div>
            <div className='container-register'>
                <div className='wrap-form'>

                    <form className='register-form'>
                        <div className='tittle-register'>
                            <h2>CADASTRE-SE</h2>
                        </div>
                        <div className='wrap-input-register input-name'>
                            <input
                                className={name !== "" ? 'has-val input-register js_input_name' : 'input-register'}
                                type='text'
                                name='name'
                                value={name}
                                id='name'
                                onChange={e => setName(e.target.value)} />

                            <span className='focus-input-register' data-placeholder='Nome'></span>
                        </div>
                        <div className='wrap-input-register input-email'>
                            <input
                                className={email !== "" ? 'has-val input-register js_input_email' : 'input-register'}
                                type='text'
                                name='email'
                                value={email}
                                id='email'
                                onChange={e => setEmail(e.target.value)} />

                            <span className='focus-input-register' data-placeholder='Email'></span>
                        </div>
                        <div className='wrap-input-register input-born'>
                            <input
                                className={born !== "" ? 'has-val input-register js_input_born' : 'input-register'}
                                type='date'
                                name='born'
                                value={born}
                                id='born'
                                onChange={e => setBorn(e.target.value)} />

                            <span className='focus-input-register-born'>Data de Nascimento</span>
                        </div>
                        <div className='wrap-input-register input-tel'>
                            <input
                                className={tel !== "" ? 'has-val input-register js_input_tel' : 'input-register'}
                                type='tel'
                                name='tel'
                                value={tel}
                                id='tel'
                                onChange={e => setTel(e.target.value)} />

                            <span className='focus-input-register' data-placeholder='Telefone'></span>
                        </div>
                        <div className='wrap-input-register input-cpf'>
                            <input
                                className={cpf !== "" ? 'has-val input-register js_input_cpf' : 'input-register'}
                                type='text'
                                name='cpf'
                                value={cpf}
                                id='cpf'
                                onChange={e => setCPF(e.target.value)} />

                            <span className='focus-input-register' data-placeholder='CPF'></span>
                        </div>
                        <div className='wrap-input-register input-password'>
                            <input
                                className={password !== "" ? 'has-val input-register js_input_password' : 'input-register'}
                                type='password'
                                name='password'
                                value={password}
                                id='password'
                                onChange={e => setPassword(e.target.value)} />

                            <span className='focus-input-register' data-placeholder='Senha'></span>
                        </div>
                        <div className='container-register-form-btn'>
                            <button className='register-form-btn' type='submit'><img src={Arrow} /></button>
                        </div>

                        <div className='text-center'>
                            <span className='txt1'>Já possui conta?</span>
                            <Link className='txt2' to="/login">Faça o login</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container-slider'>
                <div className='wrap-slider'>
                    <div className='slides'>
                        <input checked className='input-radio' type='radio' name='slide' id='slide1' />
                        <input className='input-radio' type='radio' name='slide' id='slide2' />
                        <input className='input-radio' type='radio' name='slide' id='slide3' />

                        <div className='slide s1'>
                            <img src={Foto1} />
                        </div>
                        <div className='slide'>
                            <img src={Foto2} />
                        </div>
                        <div className='slide'>
                            <img src={Foto3} />
                        </div>
                    </div>
                </div>
                <div className='navigation'>
                    <label className='bar' htmlFor='slide1'></label>
                    <label className='bar' htmlFor='slide2'></label>
                    <label className='bar' htmlFor='slide3'></label>
                </div>
            </div>
        </div>
    )
}

export default Register