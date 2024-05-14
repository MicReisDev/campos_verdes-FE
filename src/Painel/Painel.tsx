
import img01 from "/img-painel-01.jpg"
import img02 from "/img-painel-02.jpg"
import HeaderPainel from "../Components/DefaultComponents/HeaderPainel";
const Painel = () => {



    return <>
        <section className="p-10">
            <div className="flex flex-col gap-10">
                <div className="w-full">
                    <HeaderPainel />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="w-full h-full bg-white shadow-lg rounded-xl p-5">
                        <div className="flex justify-between">
                            <div className="flex  items-center w-full lg:flex-row lg:w-1/2">
                                <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                                    <button className="w-3 h-3 mx-2 bg-verdeBase rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                </div>

                                <div className="max-w-lg lg:mx-12 lg:order-2">
                                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Painel</h1>
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                    <div className="mt-6">
                                        <a href="#" className="px-6 py-2.5 mt-6 text-sm leading-5 text-center text-white capitalize bg-gradient-verde rounded-lg hover:bg-verdeEscuro transition-all lg:mx-0 lg:w-auto focus:outline-none font-bold">Ver Relatório</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end  w-full h-96 lg:w-1/2">
                                <img className="object-cover w-full h-full max-w-2xl rounded-2xl" src={img01} alt="apple watch photo" />
                            </div>
                        </div>

                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-xl p-5">
                        <div className="flex justify-between">
                            <div className="flex justify-start  w-full h-96 lg:w-1/2">
                                <img className="object-cover w-full h-full max-w-2xl rounded-2xl" src={img02} alt="apple watch photo" />
                            </div>
                            <div className="flex  items-center w-full justify-between lg:flex-row lg:w-1/2">
                                <div className="max-w-lg lg:mx-12 lg:order-2">
                                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Lorem</h1>
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                                    <div className="mt-6">
                                        <a href="#" className="px-6 py-2.5 mt-6 text-sm leading-5 text-center text-white capitalize bg-gradient-verde rounded-lg hover:bg-verdeEscuro transition-all lg:mx-0 lg:w-auto focus:outline-none font-bold">Ver Relatório</a>
                                    </div>
                                </div>
                                <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                                    <button className="w-3 h-3 mx-2 bg-verdeBase rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-verdeEscuro transition-all"></button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Painel;