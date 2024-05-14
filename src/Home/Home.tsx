//import * as React from 'react';

import Agrobot from '/agrobot.webp'
import Homebg from '/homebg.jpg'
import campobg from '/campo.jpeg'
const Home = () => {
    const name = window.localStorage.getItem('$NAME')

    const date = new Date();


    const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    // Formatar a data no padrão brasileiro
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const agora = `${day} de ${month} de ${year}`;

    return <>
        <section className="p-5 flex flex-col gap-5">

            <div className="w-full h-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover object-center  w-full h-64" src={campobg} alt="Article" />

                <div className="text-xs text-white font-bold bg-gradient-verde h-[40px] uppercase p-3">Colheita</div>

                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 p-6 flex flex-col gap-5 justify-around w-full h-[calc(100%-296px)]">
                    <div className="block mt-2 text-xl  font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600  " role="link">Olá <span className='font-semibold text-verdeBase'>{name}</span>, pronto para a dose diária de insights?</div>
                    <h2 className='font-bold text-verdeBase'>Dicas de Colheita de Amendoim 🌱🥜</h2>
                    <div className='flex gap-10 justify-between text-pretty'>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-verdeBase w-full ">
                            <h1 className="text-2xl font-bold text-green-600 mb-4">Amendoim</h1>
                            <p className="text-gray-700 mb-4">
                                Como produtor de amendoim com mais de 10 anos de experiência, aqui estão algumas dicas valiosas para otimizar sua colheita. Nos últimos anos, nossa produção aumentou em 20% devido à implementação de práticas agrícolas aprimoradas.
                            </p>
                            <h2 className="text-xl font-bold text-green-600 mb-2">Estatísticas da Fazenda</h2>
                            <ul className="list-disc list-inside mb-4">
                                <li>Área cultivada: 25 hectares</li>
                                <li>Produção anual: 50 toneladas</li>
                                <li>Rendimento médio: 1 tonelada por hectare</li>
                                <li>Índice de qualidade: 90% dos grãos são de alta qualidade</li>
                                <li>Redução de perdas pós-colheita: 10%</li>
                            </ul>
                            <h2 className="text-xl font-bold text-green-600 mb-2">Dicas de Colheita</h2>
                            <ul className="list-none space-y-3">
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Momento ideal:</strong> Colha o amendoim quando as folhas começarem a amarelar e cair. Isso geralmente ocorre cerca de 120 a 150 dias após o plantio.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Ferramentas adequadas:</strong> Use um garfo de jardim ou uma enxada para desenterrar cuidadosamente as plantas, evitando danificar os frutos.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Secagem:</strong> Após a colheita, deixe as plantas secarem ao sol por alguns dias. Isso ajuda a soltar os frutos da planta e facilita a separação.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Armazenamento:</strong> Guarde os amendoins em um local seco e ventilado. Se possível, use sacos de pano para evitar o acúmulo de umidade.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Rotação de culturas:</strong> Pratique a rotação de culturas para evitar o esgotamento do solo e a propagação de doenças. Plante amendoim no mesmo local apenas a cada 3 anos.
                                </li>
                            </ul>

                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-verdeBase w-full">
                            <h1 className="text-2xl font-bold text-green-600 mb-4">Colheitas futuras</h1>
                            <p className="text-gray-700 mb-4">
                                Como produtor de amendoim com mais de 10 anos de experiência, aqui estão algumas dicas valiosas para otimizar sua colheita. Nos últimos anos, nossa produção aumentou em 20% devido à implementação de práticas agrícolas aprimoradas.
                            </p>
                            <h2 className="text-xl font-bold text-green-600 mb-2">Estatísticas da Fazenda</h2>
                            <ul className="list-disc list-inside mb-4">
                                <li>Área cultivada: 50 hectares</li>
                                <li>Produção anual: 75 toneladas</li>
                                <li>Rendimento médio: 1,5 tonelada por hectare</li>
                                <li>Índice de qualidade: 95% dos grãos são de alta qualidade</li>
                                <li>Redução de perdas pós-colheita: 10%</li>
                            </ul>
                            <h2 className="text-xl font-bold text-green-600 mb-2">Dicas de Colheita</h2>
                            <ul className="list-none space-y-3">
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Controle de Pragas:</strong> Monitore regularmente a presença de pragas como a lagarta-do-cartucho e o pulgão, utilizando métodos de controle biológico ou produtos fitossanitários recomendados.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Melhoramento Genético:</strong> Opte por variedades de amendoim que sejam resistentes a doenças comuns e que tenham um alto rendimento, como a variedade BR1.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Irrigação Adequada:</strong> Mantenha uma irrigação constante, especialmente durante a fase de formação das vagens, para garantir que as plantas recebam a quantidade de água necessária.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Solo e Nutrientes:</strong> Realize análise de solo regularmente e adicione os nutrientes necessários, como fósforo e potássio, para manter a fertilidade do solo.
                                </li>
                                <li className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                                    <strong>Planejamento da Colheita:</strong> Planeje a colheita para coincidir com períodos de clima seco para evitar que os amendoins sejam expostos à umidade excessiva, o que pode levar ao apodrecimento.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <img className="object-cover rounded-full border-verdeBase border-[2px]" height='20px' width='50px' src={Agrobot} alt="Avatar" />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <a href="#" className="mx-2 font-semibold text-verdeEscuro dark:text-gray-200" role="link">AGROBOT</a>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{agora}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full h-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={Homebg} alt="Article" />

                <div className="text-xs text-white font-bold bg-gradient-verde h-[40px] uppercase p-3">Colheita</div>

                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 p-6 flex flex-col gap-5 justify-around w-full h-[calc(100%-296px)]">
                    <a href="#" className="block mt-2 text-xl  font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">Olá <span className='font-semibold text-verdeClaro'>{name}</span>, suas dicas de hoje são.</a>
                    <h2 className='font-bold text-verdeBase'>Otimizar Colheita 🌱🥜</h2>
                    <div className='flex gap-10 text-pretty'>

                        <div>
                            <div>
                                <h3>1. Momento Certo para Colher 📅</h3>
                                <ul>
                                    <li>O amendoim está pronto para a colheita cerca de 120 a 150 dias após o plantio.</li>
                                    <li>Verifique se as folhas estão começando a amarelar.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2. Verificação das Vagens 🔍</h3>
                                <ul>
                                    <li>Desenterre algumas plantas para inspecionar as vagens.</li>
                                    <li>Vagens maduras têm uma cor marrom por dentro e a rede ao redor da casca é bem definida.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>3. Condições Climáticas ☀️</h3>
                                <ul>
                                    <li>Colha em dias secos para evitar mofo e fungos.</li>
                                    <li>Evite colher após chuvas intensas para facilitar a retirada das plantas.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>4. Ferramentas Adequadas 🛠️</h3>
                                <ul>
                                    <li>Use enxadas ou arados para desenterrar as plantas cuidadosamente.</li>
                                    <li>Evite danificar as vagens durante a colheita.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <img className="object-cover rounded-full border-verdeBase border-[2px]" height='20px' width='50px' src={Agrobot} alt="Avatar" />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <a href="#" className="mx-2 font-semibold text-verdeEscuro dark:text-gray-200" role="link">AGROBOT</a>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{agora}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </>
}

export default Home