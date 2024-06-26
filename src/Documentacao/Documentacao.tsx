import React from "react";
import HeaderPainel from "../Components/DefaultComponents/HeaderPainel";

const Documentacao = () => {
    const fazendas = [
        { nome_fazenda: 'Fazende Campos Verdes', status: 'ativo', cidade: 'São Paulo', estado: 'SP', faturamento: 'R$ 7.000.000,00/Ano', graos: ['Amendoim', 'Arroz', 'Milho'], responsavel: 'João Silva' },
        { nome_fazenda: 'Sítio Boa Esperança', status: 'ativo', cidade: 'Campinas', estado: 'SP', faturamento: 'R$ 5.000.000,00/Ano', graos: ['Soja', 'Feijão', 'Trigo'], responsavel: 'Maria Oliveira' },
        { nome_fazenda: 'Chácara Luz do Sol', status: 'ativo', cidade: 'Ribeirão Preto', estado: 'SP', faturamento: 'R$ 6.500.000,00/Ano', graos: ['Café', 'Milho', 'Cana-de-açúcar'], responsavel: 'Carlos Souza' },
        { nome_fazenda: 'Fazenda Paraíso', status: 'inativo', cidade: 'Sorocaba', estado: 'SP', faturamento: 'R$ 3.200.000,00/Ano', graos: ['Milho', 'Amendoim'], responsavel: 'Ana Lima' },
        { nome_fazenda: 'Estância São José', status: 'ativo', cidade: 'Piracicaba', estado: 'SP', faturamento: 'R$ 4.800.000,00/Ano', graos: ['Arroz', 'Trigo', 'Soja'], responsavel: 'José Pereira' },
        { nome_fazenda: 'Sítio Bela Vista', status: 'ativo', cidade: 'Bauru', estado: 'SP', faturamento: 'R$ 7.200.000,00/Ano', graos: ['Amendoim', 'Feijão', 'Milho'], responsavel: 'Patrícia Costa' },
        { nome_fazenda: 'Fazenda Santa Maria', status: 'ativo', cidade: 'Jundiaí', estado: 'SP', faturamento: 'R$ 8.000.000,00/Ano', graos: ['Café', 'Arroz', 'Soja'], responsavel: 'Ricardo Gomes' },
        { nome_fazenda: 'Chácara Novo Horizonte', status: 'inativo', cidade: 'Mogi das Cruzes', estado: 'SP', faturamento: 'R$ 2.500.000,00/Ano', graos: ['Milho', 'Cana-de-açúcar'], responsavel: 'Fernanda Almeida' },
        { nome_fazenda: 'Estância Bela Flor', status: 'ativo', cidade: 'Itu', estado: 'SP', faturamento: 'R$ 6.000.000,00/Ano', graos: ['Feijão', 'Soja', 'Trigo'], responsavel: 'Marcos Fernandes' },
        { nome_fazenda: 'Fazenda Nova Vida', status: 'ativo', cidade: 'Americana', estado: 'SP', faturamento: 'R$ 9.000.000,00/Ano', graos: ['Amendoim', 'Milho', 'Café'], responsavel: 'Juliana Araújo' },
        { nome_fazenda: 'Sítio Primavera', status: 'ativo', cidade: 'Araraquara', estado: 'SP', faturamento: 'R$ 5.500.000,00/Ano', graos: ['Arroz', 'Soja', 'Cana-de-açúcar'], responsavel: 'Felipe Rocha' }
    ];



    return <>
        <div className="p-10">

            <section >
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Fazendas Cadastradas</h2>

                    <span className="px-3 py-1 text-xs text-white font-bold bg-verdeClaro rounded-full ">{fazendas.length}</span>

                </div>
                <div className="mb-10">
                    <HeaderPainel />
                </div>
                <div className="flex flex-col w-full h-full shadow-xl rounded-2xl">
                    <div className="w-full h-full rounded-2xl">
                        <div className="inline-block min-w-full  align-middle rounded-2xl">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-verdeBase dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm text-left rtl:text-right text-white font-bold dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-verdeBase border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    <span>Nome da Fazenda</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm text-left rtl:text-right text-white font-bold dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Status</span>

                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Cidade/Estado</span>

                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold dark:text-gray-400">Faturamento</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-left rtl:text-right text-white font-bold dark:text-gray-400">Grãos</th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {fazendas && fazendas.map((f: any) => (<tr>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <input type="checkbox" className="bg-verdeBase border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                    <div className="flex items-center gap-x-2">

                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{f.nome_fazenda}</h2>
                                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{f.responsavel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                {f.status == 'ativo' ?
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                        <h2 className="text-sm font-normal text-emerald-500">{f.status}</h2>
                                                    </div> :
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                                                        <h2 className="text-sm font-normal text-red-500">{f.status}</h2>
                                                    </div>
                                                }
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{f.cidade}
                                                <p>{f.estado}</p>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{f.faturamento}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">

                                                    {f.graos.map((g: any) => (
                                                        <p className="px-3 py-1 text-xs bg-green-50 text-verdeEscuro font-medium rounded-full ">{g}</p>
                                                    ))}

                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </button>

                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
            <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div className="items-center hidden lg:flex gap-x-3">
                    <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-verdeClaro/60">1</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                </div>

                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div> */}
            </section>
        </div>
    </>
}

export default Documentacao