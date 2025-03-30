

import Image from "next/image"
import dogAndCat from "../../../../public/about-1.png"
import cat from "../../../../public/about-2.png"

import { Check, CheckCheck, Locate, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"


export function About() {


    return (
        <section className="w-full my-52">
            <div className="container mx-auto px-2">
                <article className="grid gap-16 grid-cols-1 lg:grid-cols-2">
                    <div data-aos="fade-up-right" className="relative ">
                        <div className="relative h-[400px] w-full rounded-lg">
                            <Image src={dogAndCat} alt="Imagem About"
                                priority quality={100} fill className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="absolute -bottom-7 right-2 h-28 w-28 rounded-lg border-4 border-white">
                            <Image src={cat} alt="Imagem About"
                                priority quality={100} fill
                            />
                        </div>
                    </div>


                    <section data-aos="fade-up-left">
                        <h1 className="text-3xl mb-3 font-bold">
                            Sobre
                        </h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, recusandae? Sapiente quam ullam amet a, officiis quis quasi eaque in, minus vero facere, delectus dolorem aliquam dolorum veritatis atque laboriosam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint fugit, consectetur, aspernatur sed aperiam quasi voluptatibus maiores minus laudantium nobis itaque fuga et sapiente dolores aliquid illo incidunt libero nulla!</p>


                        <ul className="mt-10 mb-3 flex flex-col gap-6">
                            <li className="flex gap-2"><Check className="text-red-500"/>
                                Aberto desde 2011
                            </li>
                            <li className="flex gap-2"><Check className="text-red-500"/>
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className="flex gap-2"><Check className="text-red-500"/>
                                Qualidade é nossa prioridade
                            </li>

                        </ul>


                        <div className=" flex gap-6 items-center text-white">
                            <a  href={`https://wa.me/11986767170?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-red-800 px-2 py-1 flex items-center rounded-md gap-3 w-fit "> <FaWhatsapp size={18} /> Contato via WhatsApp</a>

                            <div className="flex gap-2 text-black  items-center">
                                <span><MapPin size={18} /></span>
                                <span> Endereço da loja</span>
                                
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </section>
    )
}