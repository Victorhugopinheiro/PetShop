import royal from "../../../../public/royal.png"
import golden from "../../../../public/golden.png"
import primier from "../../../../public/primier.png"
import natural from "../../../../public/natural.png"
import whiskas from "../../../../public/whiskas.png"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="bg-[#e84c3d]">
            <div className="container mx-auto">
                <div className="text-white">
                    <h1 className="text-3xl text-center font-bold mb-6 py-2">Marcas qaue trabalhamos</h1>


                    <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-6">
                        {brands.map((item, index) => (
                            <div key={index} className=" flex items-center justify-center ">
                                <Image className="object-contain rounded-md" width={180} height={150} src={item.logo} alt={item.name} quality={100} priority />
                            </div>
                        ))}
                    </div>




                    <div className="grid grid-cols-1 items-center mt-10 py-5 px-3 border-t-gray-200 border-opacity-35 border-t gap-6 md:grid-cols-2 lg:grid-cols-3">


                        <div className=" flex flex-col gap-2  ">
                            <h3 className="text-2xl font-bold">PetShop dev</h3>

                            <p>Cuidando do seu melhor amigo com amor e dedicação.</p>

                            <a className="py-1 px-3 w-fit bg-green-500 rounded-md">Contato via WhatssApp</a>
                        </div>


                        <div className=" flex flex-col  ">
                            <h3 className="text-2xl font-bold">Contatos</h3>

                            <p>Email: teste@teste.com</p>
                            <p>Telefone: (xx) 97678-8673</p>
                            <p>Endereço: Rua Tal, 190, centro, Sbc</p>


                        </div>

                        <div className=" flex flex-col  ">
                            <h3 className="text-2xl font-bold">Redes sociais</h3>

                            <div className="flex gap-3 mt-2">
                                <Facebook size={16} />
                                <Instagram size={16} />
                                <BsWhatsapp size={16} />
                            </div>



                        </div>



                    </div>
                </div>

            </div>

        </section>
    )
}