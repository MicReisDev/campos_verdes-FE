import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext'
import logoIMG from '/logosvg.svg'

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const context = React.useContext(GlobalContext);
    const navigate = useNavigate();

    async function
        Logar(event: any) {
        try {
            event.preventDefault();

            let data = await context.LoginAct(email, senha);

            if (data.result.name) {

                navigate('/home');
            }
        } catch (error) {

        }
    }

    return (

        <form onSubmit={
            Logar
        } className='flex flex-col justify-center w-[450px] h-[500px] backdrop-blur-sm rounded-[50px] relative border-[1.5px] border-verdeEscuro drop-shadow-verde'>
            <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-[50px]"></div>
            <div className='z-10'>
                <div className='flex flex-col pt-2 justify-center items-center'>
                    <img src={logoIMG} alt='' width='200px' height='69px' />

                </div>
                <div className='flex flex-col gap-3 p-10'>
                    <p className='font-extrabold text-xl text-center text-verdeEscuro'>Login</p>
                    <input
                        className='h-[60px] rounded-2xl p-5'
                        type="text"
                        name="email"
                        placeholder="email"
                        id="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <input
                        className='h-[60px] rounded-2xl p-5'
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        id="senha"
                        value={senha}
                        onChange={({ target }) => setSenha(target.value)}
                    />
                </div>
                <div className='flex flex-col justify-center px-10'>
                    <button className='text-center h-[60px] bg-gradient-verde text-white font-extrabold rounded-full hover:brightness-50 transition-all' type='submit'>Conectar</button>
                    <p className='text-xs font-extralight text-center py-5 text-white  '><span className='text-verdeBase font-semibold'>Esqueceu a senha?</span>  | Não tem um cadastro? <span className='text-verdeBase font-semibold'>Cadastre-se</span> </p>
                </div>
            </div>
        </form>

    );
};

export default LoginUser;
