import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../css/Register.css'
import Arrow from '../assets/arrow.svg';
import Foto1 from '../assets/foto1.jpg'
import Foto2 from '../assets/foto6.jpg'
import Foto3 from '../assets/foto11.jpg'
import Logo from '../assets/logo.png'
import Login from './Login';
import '../script';


function Register() {
    const location = useLocation();
    const [password, setPassword] = useState("");
    const sliderRef = useRef(null);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        dataNascimento: '',
        telefone: '',
        cpf: '',
        senha: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('http://18.230.53.156:8000/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Os dados foram enviados com sucesso para o back-end
                // Você pode fazer algo aqui, como redirecionar o usuário
            } else {
                // Lidar com erros de resposta do servidor
            }
        } catch (error) {
            console.error('Erro ao enviar os dados para o back-end:', error);
        }
    };

    return (
        <div className='container-register-body'>
            <div className='header-menu'>
                <div className="wrap-logo">
                    <img className='logo' src={Logo} />
                </div>
                <div className='wrap-menu-bar'>
                    <div className='menu-bar'>
                        <Link className='btns btn-inicio' to='/login'>Início</Link>
                        <Link className='btns btn-sobre' to='/login' >Sobre</Link>
                        <Link className='btns btn-fotos' to='/login'>Fotos</Link>
                        <Link className='btns btn-reserve' to='/reserva'>Reserve agora</Link>
                        <Link className='btns btn-local' to='/login'>Localização</Link>
                    </div>
                </div>
            </div>
            <div className='container-register'>
                <div className='wrap-form'>

                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className='tittle-register'>
                            <h2>CADASTRE-SE</h2>
                        </div>
                        <div className='wrap-input-register input-name'>
                            <input
                                className={formData.nome !== "" ? 'has-val input-register js_input_name' : 'input-register'}
                                type='text'
                                name='nome'
                                value={formData.name}
                                onChange={handleInputChange}
                                id='nome'
                                />

                            <span className='focus-input-register' data-placeholder='Nome'></span>
                        </div>
                        <div className='wrap-input-register input-email'>
                            <input
                                className={formData.email !== "" ? 'has-val input-register js_input_email' : 'input-register'}
                                type='text'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                id='email'
                                />

                            <span className='focus-input-register' data-placeholder='Email'></span>
                        </div>
                        <div className='wrap-input-register input-born'>
                            <input
                                className={formData.dataNascimento !== "" ? 'has-val input-register js_input_born' : 'input-register'}
                                type='date'
                                name='dataNascimento'
                                value={formData.dataNascimento}
                                onChange={handleInputChange}
                                id='dataNascimento'
                                 />

                            <span className='focus-input-register-born'>Data de Nascimento</span>
                        </div>
                        <div className='wrap-input-register input-tel'>
                            <input
                                className={formData.telefone !== "" ? 'has-val input-register js_input_tel' : 'input-register'}
                                type='tel'
                                name='telefone'
                                value={formData.telefone}
                                onChange={handleInputChange}
                                id='telefone'
                                 />

                            <span className='focus-input-register' data-placeholder='Telefone'></span>
                        </div>
                        <div className='wrap-input-register input-cpf'>
                            <input
                                className={formData.cpf !== "" ? 'has-val input-register js_input_cpf' : 'input-register'}
                                type='text'
                                name='cpf'
                                value={formData.cpf}
                                onChange={handleInputChange}
                                id='cpf'
                                />

                            <span className='focus-input-register' data-placeholder='CPF'></span>
                        </div>
                        <div className='wrap-input-register input-password'>
                            <input
                                className={formData.senha !== "" ? 'has-val input-register js_input_password' : 'input-register'}
                                type='password'
                                name='senha'
                                value={formData.senha}
                                onChange={handleInputChange}
                                id='senha'
                                />

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
            <div className='container-slider' ref={sliderRef}>
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