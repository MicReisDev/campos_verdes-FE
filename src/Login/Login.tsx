
import LoginForm from './LoginForm';

const Login = () => {


    return <>
        <section className="w-screen h-screen bg-login bg-center bg-cover bg-origin-padding relative overflow-hidden ">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="grid grid-cols-2 items-center justify-center grid-rows-1 w-full h-full relative z-10">
                <div className="uppercase text-[600%] font-black flex justify-center tracking-normal">
                    <div className='flex flex-col gap-[-10px]'>
                        <h1 className="text-verdeClaro drop-shadow-verde">Green</h1>
                        <h1 className="text-verdeClaro drop-shadow-verde">Fields</h1>
                        <p className="text-white">Agro</p>
                        <p className="text-white">+Digital</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <LoginForm />
                </div>
            </div>
        </section>

    </>
}

export default Login