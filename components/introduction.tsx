"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center md:justify-start md:ml-20">  {/* Añadido margin-left aquí */}
                    <Image 
                        src="/foto1.png" 
                        priority 
                        width={300} 
                        height={300} 
                        alt="Avatar" 
                        className="rounded-full mt-24" // Clase para hacer la imagen circular y agregar margen superior
                    />
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-center custom-justify">
  Soy un programador Junior de Frontend apasionado por la creación de interfaces web intuitivas y atractivas. Con experiencia en tecnologías como React, Tailwind CSS y Vite, me especializo en transformar ideas y diseños en experiencias de usuario fluidas y dinámicas. Siempre en busca de aprender y mejorar, me esfuerzo por mantenerme al día con las últimas tendencias y mejores prácticas en desarrollo web para ofrecer soluciones eficientes y de alta calidad.
</p>



                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
