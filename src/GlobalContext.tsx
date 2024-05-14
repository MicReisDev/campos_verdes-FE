import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'




const rotas = ['/usuarios', '/meuperfil', '/dashboard', '/listaferias', '/tarefas', '/pasta/:id', '/colaboradores']

export const GlobalContext = React.createContext<any>(undefined)

export const GlobalStorage = ({ children }: any) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const [erro, setErro] = React.useState(false);
    const [vToken, setVtoken] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const URL: string = 'http://localhost:33336/';

    // React.useEffect(() => {

    //     VerfifyToken()
    // }, [])

    async function LoginAct(email: string, password: string) {
        setLoad(true);
        try {
            const response = await fetch(`${URL}user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();
            data = data.result
            console.log(data)


            setLocalStorageData(data);
            setData(data);
            setLoad(false);
            setLogin(true);


            navigate('/home')
        } catch (error) {
            console.log(error);
        }
    }

    function setLocalStorageData(data: any) {
        window.localStorage.setItem('$TOKEN', data.token);
        window.localStorage.setItem('$NAME', data.name);
        window.localStorage.setItem('$EMAIL', data.email);
    }

    async function VerfifyToken() {
        setLoad(true);
        let token = window.localStorage.getItem('$TOKEN')
        if (token) {
            let response = await fetch(`${URL}/auth`, {
                method: 'get',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            let data = await response.json()

            if (data.nome) {
                setData(data)
                setLogin(true)
                setLoad(false);
                if (rotas.includes(location.pathname)) {
                    navigate(location.pathname)
                } else navigate('/dashboard')
            } else {

                window.localStorage.clear()
                setLogin(false)
                navigate('/login');
            }

        } else {
            navigate('/login');
        }
    }

    async function Logout() {
        window.localStorage.clear()
        setLoad(true);
        navigate('/login');
    }

    return (
        <GlobalContext.Provider value={{ LoginAct, erro, data, login, setLogin, VerfifyToken, Logout, load, vToken, setVtoken }}>
            {children}
        </GlobalContext.Provider>
    )
};

