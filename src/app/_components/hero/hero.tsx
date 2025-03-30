import Image from "next/image";
import dog from "../../../../public/hero-dog.webp"
import cat from "../../../../public/cat-hero.png"


export function Hero() {
    return (
        <section className=" text-white bg-[#e84c3d] relative overflow-hidden">


            <div className="lg:hidden">
                <Image className="object-cover opacity-60 lg:hidden" sizes="100vw" src={dog} alt="foto de fundo banner" fill />

                <div className="absolute inset-0 opacity-40 bg-black md:hidden  ">

                </div>
            </div>

            <div className="container relative mx-auto pt-16 pb-16 text-white md:pb-0 px-4">

                <article className="grid grid-cols-1 lg:grid-cols-2  : ">
                    <div className="space-y-6">
                        <h1 data-aos="fade-down" className="text-3xl lg:text-4xl">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>

                        <p data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <a  href={`https://wa.me/11986767170?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-500 p-3 rounded-md text-white ">   Contato via WhatsApp</a>
                        </div>

                        <p><b className="py-1 px-2 bg-black rounded-md text-white">5%</b> de desconto na primeira compra</p>


                        <div className="relative hidden lg:block w-32">
                            <Image className="object-fill" src={cat} alt="Imagem do gato" />
                        </div>

                    </div>

                    <div className="hidden lg:block h-full relative">
                        <Image className="object-contain" src={dog} alt="Imagem dog" fill priority={true} quality={100} sizes="(max-width: 768px) 0vw, 50vw" />
                    </div>



                </article>


            </div>
        </section>
    )
}