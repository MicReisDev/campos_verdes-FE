
import React from "react"
import logodash from '/logodash.svg'
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../GlobalContext"
import logosvg from '/LogoSemEscrita.png'

const SideBar = ({ children }: any) => {

    const options = [{ nome: 'Home', path: '/home' }, { nome: 'Painel', path: '/painel' }, { nome: 'Relatórios', path: '/relatorio' }, { nome: 'Documentação', path: '/documentacao' }]
    const name = window.localStorage.getItem('$NAME')
    const email = window.localStorage.getItem('$EMAIL')
    let context = React.useContext(GlobalContext)
    const [toggles, setToggleS] = React.useState(false)
    const whatIcon = (nome: any) => {
        switch (nome) {
            case 'Home':
                return <svg width="35" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="CurrentColor" stroke-width="2" />
                    <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>;

            case 'Painel':
                return <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6.66667H8.33329C7.41282 6.66667 6.66663 7.41286 6.66663 8.33334V16.6667C6.66663 17.5871 7.41282 18.3333 8.33329 18.3333H15C15.9204 18.3333 16.6666 17.5871 16.6666 16.6667V8.33334C16.6666 7.41286 15.9204 6.66667 15 6.66667Z" stroke="CurrentColor" stroke-width="3" stroke-linejoin="round" />
                    <path d="M15 25H8.33329C7.41282 25 6.66663 25.7462 6.66663 26.6667V31.6667C6.66663 32.5871 7.41282 33.3333 8.33329 33.3333H15C15.9204 33.3333 16.6666 32.5871 16.6666 31.6667V26.6667C16.6666 25.7462 15.9204 25 15 25Z" stroke="CurrentColor" stroke-width="3" stroke-linejoin="round" />
                    <path d="M31.6667 6.66667H25C24.0796 6.66667 23.3334 7.41286 23.3334 8.33334V13.3333C23.3334 14.2538 24.0796 15 25 15H31.6667C32.5872 15 33.3334 14.2538 33.3334 13.3333V8.33334C33.3334 7.41286 32.5872 6.66667 31.6667 6.66667Z" stroke="CurrentColor" stroke-width="3" stroke-linejoin="round" />
                    <path d="M31.6667 21.6667H25C24.0796 21.6667 23.3334 22.4129 23.3334 23.3333V31.6667C23.3334 32.5871 24.0796 33.3333 25 33.3333H31.6667C32.5872 33.3333 33.3334 32.5871 33.3334 31.6667V23.3333C33.3334 22.4129 32.5872 21.6667 31.6667 21.6667Z" stroke="CurrentColor" stroke-width="3" stroke-linejoin="round" />
                </svg>

            case 'Dashboards':
                return <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1944 7.99356C9.73901 10.1519 6.66663 14.7171 6.66663 20C6.66663 20.3282 6.67848 20.6535 6.70179 20.9758L16.9381 18.233L14.1944 7.99356ZM19.0246 6.70179L21.9835 17.7438L22.0028 17.8162C22.0861 18.1257 22.2036 18.5622 22.2553 18.9625C22.3203 19.467 22.3356 20.265 21.8661 21.0782C21.3966 21.8913 20.698 22.277 20.2285 22.473C19.856 22.6285 19.4191 22.745 19.1095 22.8275L19.0371 22.8468L7.99373 25.806C10.1521 30.2612 14.7173 33.3333 20 33.3333C27.3638 33.3333 33.3333 27.3638 33.3333 20C33.3333 12.6362 27.3638 6.66667 20 6.66667C19.672 6.66667 19.3468 6.67852 19.0246 6.70179Z" fill="CurrentColor" fill-opacity="0.5" />
                    <path d="M16.5491 7.12098C16.1309 5.56003 15.9217 4.77955 15.2014 4.45477C14.4811 4.12998 13.8454 4.44637 12.574 5.07913C11.6172 5.55535 10.7061 6.12365 9.85403 6.77745C8.11761 8.10983 6.66065 9.7712 5.5663 11.6667C4.47195 13.5621 3.76165 15.6546 3.47596 17.8245C3.33578 18.8893 3.29918 19.9625 3.36519 21.0293C3.45289 22.4468 3.49676 23.1555 4.13818 23.6168C4.7796 24.0783 5.56008 23.8692 7.12103 23.451L16.7802 20.8627C18.298 20.456 19.057 20.2527 19.4022 19.6548C19.7474 19.057 19.544 18.298 19.1374 16.7802L16.5491 7.12098Z" fill="CurrentColor" />
                </svg>

            case 'Relatórios':
                return <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1667 33.3333C31.4679 33.3333 33.3333 31.4679 33.3333 29.1667C33.3333 26.8655 31.4679 25 29.1667 25C26.8655 25 25 26.8655 25 29.1667C25 31.4679 26.8655 33.3333 29.1667 33.3333Z" stroke="CurrentColor" stroke-opacity="0.5" stroke-width="2" />
                    <path d="M35 35L32.5 32.5" stroke="CurrentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66663 16.6667C6.66663 10.3813 6.66663 7.23859 8.61924 5.28595C10.5719 3.33334 13.7146 3.33334 20 3.33334C26.2853 3.33334 29.4281 3.33334 31.3806 5.28595C33.3333 7.23859 33.3333 10.3813 33.3333 16.6667V21.9482C32.1076 21.2392 30.6845 20.8333 29.1666 20.8333C24.5643 20.8333 20.8333 24.5643 20.8333 29.1667C20.8333 32.4047 22.6801 35.2115 25.378 36.591C23.895 36.6667 22.1275 36.6667 20 36.6667C13.7146 36.6667 10.5719 36.6667 8.61924 34.714C6.66663 32.7615 6.66663 29.6187 6.66663 23.3333V16.6667ZM13.3333 8.33334C12.4128 8.33334 11.6666 9.07954 11.6666 10C11.6666 10.9205 12.4128 11.6667 13.3333 11.6667H20C20.9205 11.6667 21.6666 10.9205 21.6666 10C21.6666 9.07954 20.9205 8.33334 20 8.33334H13.3333ZM13.3333 15C12.4128 15 11.6666 15.7462 11.6666 16.6667C11.6666 17.5872 12.4128 18.3333 13.3333 18.3333H23.3333C24.2538 18.3333 25 17.5872 25 16.6667C25 15.7462 24.2538 15 23.3333 15H13.3333ZM13.3333 21.6667C12.4128 21.6667 11.6666 22.4128 11.6666 23.3333C11.6666 24.2538 12.4128 25 13.3333 25H18.3333C19.2538 25 20 24.2538 20 23.3333C20 22.4128 19.2538 21.6667 18.3333 21.6667H13.3333Z" fill="CurrentColor" />
                </svg>
            case 'Documentação':
                return <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 12C11.6667 10.1332 11.6667 9.19973 12.03 8.4867C12.3495 7.85948 12.8595 7.34955 13.4867 7.02998C14.1997 6.66667 15.1332 6.66667 17 6.66667H19.1687C20.0868 6.66667 20.546 6.66667 20.9715 6.78113C21.3483 6.88255 21.7047 7.04938 22.0238 7.27405C22.3842 7.5276 22.678 7.8803 23.2658 8.58568L25.8333 11.6667H29.6667C31.5335 11.6667 32.467 11.6667 33.18 12.03C33.8072 12.3495 34.3172 12.8595 34.6367 13.4867C35 14.1997 35 15.1332 35 17V21.3333C35 23.2002 35 24.1337 34.6367 24.8467C34.3172 25.4738 33.8072 25.9838 33.18 26.3033C32.467 26.6667 31.5335 26.6667 29.6667 26.6667H28.3333H13.3333C12.4129 26.6667 11.6667 25.9205 11.6667 25V13.3333V12ZM8.33333 13.3653C7.67965 13.4052 7.21588 13.4949 6.82003 13.6966C6.19282 14.0162 5.68288 14.5261 5.36332 15.1534C5 15.8664 5 16.7998 5 18.6667V22.6667C5 26.4003 5 28.2672 5.72662 29.6933C6.36578 30.9477 7.38565 31.9675 8.64007 32.6067C10.0662 33.3333 11.933 33.3333 15.6667 33.3333H23C24.8668 33.3333 25.8003 33.3333 26.5133 32.97C27.1405 32.6505 27.6505 32.1405 27.97 31.5133C28.1717 31.1175 28.2615 30.6537 28.3013 30H13.3333C10.5719 30 8.33333 27.7615 8.33333 25V13.3653Z" fill="CurrentColor" />
                </svg>



            default:
                return null;
        }
    }

    return <>
        <div className="flex h-screen w-screen transition-all">
            <div className={toggles ? "h-full w-[5%]  shadow-2xl border-r flex flex-col justify-between border-gray-100 p-2 transition-all" : "w-[15%] h-full transition-all col-span-2 shadow-2xl border-r flex flex-col justify-between border-gray-100 p-2"}>
                <div className="flex flex-col items-center gap-10 ease-in duration-300 transition-all">

                    {toggles ?
                        <div className="flex flex-col gap-5">
                            <img src={logosvg} width='60px' alt="" />
                            <div className="flex justify-center ">
                                <button className=" rounded-lg   text-verdeBase hover:bg-verdeBase hover:text-white transition-all" onClick={() => setToggleS(!toggles)}>{toggles ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 18L18 12L12 6" stroke="CurrentColor" stroke-width="2" />
                                    <path d="M6 18L12 12L6 6" stroke="CurrentColor" stroke-width="2" />
                                </svg>
                                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 18L6 12L12 6" stroke="CurrentColor" stroke-width="2" />
                                        <path d="M18 18L12 12L18 6" stroke="CurrentColor" stroke-width="2" />
                                    </svg>
                                }</button>
                            </div>
                        </div> :
                        <div className="w-full flex flex-col items-center gap-10">
                            <div className="flex flex-col gap-3">
                                <img src={logodash} alt="" height='60px' />
                                <div className="flex justify-end">
                                    <button className=" rounded-lg   text-verdeBase hover:bg-verdeBase hover:text-white transition-all" onClick={() => setToggleS(!toggles)}>{toggles ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 18L18 12L12 6" stroke="CurrentColor" stroke-width="2" />
                                        <path d="M6 18L12 12L6 6" stroke="CurrentColor" stroke-width="2" />
                                    </svg>
                                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 18L6 12L12 6" stroke="CurrentColor" stroke-width="2" />
                                            <path d="M18 18L12 12L18 6" stroke="CurrentColor" stroke-width="2" />
                                        </svg>
                                    }</button>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-slate-100 w-full border-[1.5px] p-1 ">
                                <div className="inline-block  ">
                                    <p className="bg-verdeEscuro rounded-full px-1 text-xs font-semibold text-white ">Ativa</p>
                                </div>
                                <div className="flex justify-between bg-white rounded-xl p-1 gap-2">
                                    <div className=" flex items-center ">
                                        <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_27_83)">
                                                <path d="M5.96916 5.83178C6.2041 4.89202 6.32156 4.42214 6.67194 4.14856C7.02233 3.875 7.50667 3.875 8.47535 3.875H22.5246C23.4934 3.875 23.9777 3.875 24.328 4.14856C24.6785 4.42214 24.7959 4.89202 25.0308 5.83178L26.5855 12.0504C26.7107 12.5508 26.7732 12.801 26.7593 13.0042C26.7236 13.5311 26.3707 13.9832 25.8681 14.1457C25.6743 14.2083 25.4105 14.2083 24.8828 14.2083C24.1941 14.2083 23.8499 14.2083 23.5607 14.1409C22.7505 13.9522 22.0808 13.3849 21.7614 12.6168C21.6474 12.3426 21.592 12.0106 21.4815 11.3467C21.4505 11.161 21.435 11.0681 21.4174 11.0437C21.3659 10.9719 21.2592 10.9719 21.2076 11.0437C21.1901 11.0681 21.1746 11.161 21.1436 11.3467L21.0383 11.9787C21.0272 12.0457 21.0215 12.0792 21.016 12.1085C20.788 13.3048 19.7555 14.1795 18.538 14.2077C18.5082 14.2083 18.4742 14.2083 18.4063 14.2083C18.3383 14.2083 18.3044 14.2083 18.2745 14.2077C17.057 14.1795 16.0246 13.3048 15.7966 12.1085C15.791 12.0792 15.7853 12.0457 15.7742 11.9787L15.669 11.3467C15.638 11.161 15.6225 11.0681 15.6049 11.0437C15.5534 10.9719 15.4467 10.9719 15.3951 11.0437C15.3776 11.0681 15.3621 11.161 15.3311 11.3467L15.2258 11.9787C15.2147 12.0457 15.209 12.0792 15.2035 12.1085C14.9755 13.3048 13.943 14.1795 12.7255 14.2077C12.6956 14.2083 12.6617 14.2083 12.5938 14.2083C12.5259 14.2083 12.4919 14.2083 12.462 14.2077C11.2445 14.1795 10.212 13.3048 9.98408 12.1085C9.97849 12.0792 9.97291 12.0457 9.96174 11.9787L9.85642 11.3467C9.82545 11.161 9.80998 11.0681 9.79243 11.0437C9.74089 10.9719 9.63415 10.9719 9.58261 11.0437C9.56505 11.0681 9.54958 11.161 9.51862 11.3467C9.40796 12.0106 9.35264 12.3426 9.23865 12.6168C8.91929 13.3849 8.24957 13.9522 7.43938 14.1409C7.15021 14.2083 6.80587 14.2083 6.11723 14.2083C5.58954 14.2083 5.32568 14.2083 5.13189 14.1457C4.62939 13.9832 4.27644 13.5311 4.24065 13.0042C4.22685 12.801 4.2894 12.5508 4.41448 12.0504L5.96916 5.83178Z" fill="#222222" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48094 16.1461C6.45837 16.6898 6.45837 17.328 6.45837 18.0833V25.8333C6.45837 27.0511 6.45837 27.66 6.83669 28.0383C7.21502 28.4167 7.82391 28.4167 9.04171 28.4167H12.9167V23.25C12.9167 22.5366 13.495 21.9583 14.2084 21.9583H16.7917C17.5051 21.9583 18.0834 22.5366 18.0834 23.25V28.4167H21.9584C23.1762 28.4167 23.785 28.4167 24.1634 28.0383C24.5417 27.66 24.5417 27.0511 24.5417 25.8333V18.0833C24.5417 17.328 24.5417 16.6898 24.5191 16.1461C24.0479 16.1449 23.566 16.1316 23.1211 16.0279C22.4502 15.8716 21.8344 15.567 21.3125 15.1471C20.5581 15.7543 19.6079 16.1209 18.5829 16.1447C18.5298 16.1458 18.4737 16.1458 18.4204 16.1458H18.4063H18.3923C18.339 16.1458 18.2828 16.1458 18.2297 16.1447C17.2047 16.1209 16.2545 15.7543 15.5 15.1471C14.7456 15.7543 13.7954 16.1209 12.7703 16.1447C12.7172 16.1458 12.6613 16.1458 12.6078 16.1458H12.5938H12.5799C12.5264 16.1458 12.4704 16.1458 12.4172 16.1447C11.3922 16.1209 10.442 15.7543 9.68754 15.1471C9.16566 15.567 8.54984 15.8716 7.879 16.0279C7.43413 16.1316 6.95214 16.1449 6.48094 16.1461Z" fill="#222222" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_27_83" x="-4" y="0" width="39" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_83" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_83" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>

                                        <div className="text-xs">
                                            <h1 className="font-extrabold">
                                                {name}
                                            </h1>
                                            <p className="text-gray-700 text-ellipsis overflow-hidden ... max-w-[100PX]">
                                                {email}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="bg-verdeBase rounded-xl text-white px-2 py-1 font-bold self-end hover:bg-verdeEscuro transition-all" onClick={() => { context.Logout() }}>
                                        Sair
                                    </button>
                                </div>

                            </div>
                        </div>
                    }

                    <div className="w-full justify-self-center">
                        {toggles ? (
                            <nav className="flex flex-col w-full gap-1 items-center justify-center text-center">
                                {options.map((rota) => (
                                    <NavLink
                                        key={rota.path}
                                        to={rota.path}
                                        className="font-bold border w-full p-3 rounded-xl text-verdeClaro hover:bg-verdeBase hover:text-white transition-all flex items-center justify-center"
                                    >
                                        {whatIcon(rota.nome)}
                                    </NavLink>
                                ))}
                            </nav>
                        ) : (
                            <nav className="flex flex-col w-full gap-1 items-center justify-center text-left">
                                {options.map((rota) => (
                                    <NavLink
                                        key={rota.path}
                                        to={rota.path}
                                        className="font-bold border w-full p-3 rounded-xl text-verdeClaro hover:bg-verdeBase hover:text-white transition-all flex items-center"
                                    >
                                        <div>
                                            {whatIcon(rota.nome)}
                                        </div>
                                        <div className="ml-2">
                                            {rota.nome}
                                        </div>
                                    </NavLink>
                                ))}
                            </nav>
                        )}
                    </div>

                    <div>

                    </div>
                </div>
                <div className="flex flex-col items-center">
                 
                </div>
            </div>
            <div className={toggles ? "w-full h-full bg-gray-50 shadow-inner overflow-auto scroll" : "w-full h-full col-start-3 col-end-13 bg-gray-50 shadow-inner overflow-auto scroll"}>
                {children}
            </div>

        </div>
    </>
}

export default SideBar