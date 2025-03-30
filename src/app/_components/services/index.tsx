"use client"

import useEmblaCarousel from "embla-carousel-react"

import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
]

export function Services() {


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })


    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-10 text-black">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Serviços</h1>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">

                                    <article className=" px-6 bg-[#1e293b] flex flex-col p-6 space-y-6 h-full text-white rounded-2xl ">

                                        <div className="flex-1 flex items-start  justify-between flex-col p-3 ">

                                            <div className="flex justify-center gap-4">
                                                <span>{item.icon}</span>
                                                <div>
                                                    <h3>{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>


                                        </div>


                                        <div className="border-gray-700 flex justify-between border-t py-3">


                                            <div className="flex gap-3 items-center">
                                                <p><Clock size={16} /></p>
                                                <span>1H</span>
                                            </div>


                                            <div className="flex gap-3">
                                                <a  href={`https://wa.me/11986767170?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`} className="flex gap-3 items-center"> <FaWhatsapp size={16} /> Contato</a>

                                            </div>



                                        </div>



                                    </article>

                                </div>
                            ))}

                        </div>

                    </div>


                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 left-3  " onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 " />
                    </button>

                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 -right-6  " onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 " />
                    </button>

                </div>
            </div>
        </section>
    )
}