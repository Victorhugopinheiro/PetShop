"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import tutor1 from "../../../../public/tutor1.png"
import tutor2 from "../../../../public/tutor2.png"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"



export function Testimonials() {

    const testimonials = [
        {
            content:
                "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
            author: "Mariana Souza",
            role: "Tutora da Luna (Golden Retriever)",
            image: tutor1,
        },
        {
            content:
                "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
            author: "Rafael",
            role: "Tutor do Thor (Bulldog Francês)",
            image: tutor1,
        },
        {
            content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
            author: "Camila fernandes",
            role: "Tutora da Mel e do Max",
            image: tutor1,
        },
    ]


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 2,
        
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }







    return (
        <section className="bg-[#FFD449] py-10 text-black">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl text-center font-bold mb-6 md:text-3xl">Depoimentos dos nossos clientes</h1>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3 ">

                                    <article className=" px-6 bg-[#1e293b] flex flex-col items-center p-6 space-y-6 h-full text-white rounded-2xl ">

                                        <div className="flex  w-32 h-32 relative -center p-3 ">

                                            <Image alt="Imagem cliente" src={item.image} quality={100} priority fill className="rounded-full object-cover " />


                                        </div>


                                        <div className="py-3 text-center md:w-3/4   ">


                                            <p>{item.content}</p>
                                        </div>


                                        <div className=" flex flex-col py-3 items-center gap-1">

                                            <p className="font-bold">{item.author}</p>
                                            <p>{item.role}</p>
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