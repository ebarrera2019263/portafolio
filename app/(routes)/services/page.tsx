import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { FaGithub, FaLinkedin, FaTwitter, FaRss, FaTwitch, FaYoutube, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiVite, SiSupabase, SiTailwindcss, SiLaravel, SiMysql, SiMongodb } from "react-icons/si";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-col items-center justify-center h-screen max-w-5xl gap-6 mx-auto">
                <div className="max-w-[450px] md:mr-6">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Tecnologías  <span className="font-bold text-secondary"> que Conozco.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                    A lo largo de mi carrera universitaria y laboral, he adquirido conocimientos sólidos en una variedad de tecnologías clave en el desarrollo web y de software.                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div className="flex-1">
                    <SliderServices />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mx-auto mt-8 max-w-5xl">
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg"> 
                        <FaGithub size={48} />
                        <h2 className="text-xl font-bold">Github</h2>
                        <p>Plataforma para el control de versiones y la colaboración en proyectos de desarrollo de software.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaHtml5 size={48} />
                        <h2 className="text-xl font-bold">HTML5</h2>
                        <p>Lenguaje de marcado utilizado para estructurar y presentar contenido en la web.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaCss3Alt size={48} />
                        <h2 className="text-xl font-bold">CSS3</h2>
                        <p>Lenguaje de estilo utilizado para describir la presentación de un documento escrito en HTML o XML.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaJs size={48} />
                        <h2 className="text-xl font-bold">JavaScript</h2>
                        <p>Lenguaje de programación que permite crear contenido dinámico en la web.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaReact size={48} />
                        <h2 className="text-xl font-bold">React</h2>
                        <p>Biblioteca de JavaScript para construir interfaces de usuario.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaNodeJs size={48} />
                        <h2 className="text-xl font-bold">Node.js</h2>
                        <p>Entorno de ejecución de JavaScript del lado del servidor.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaGitAlt size={48} />
                        <h2 className="text-xl font-bold">Git</h2>
                        <p>Sistema de control de versiones distribuido.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiNextdotjs size={48} />
                        <h2 className="text-xl font-bold">Next.js</h2>
                        <p>Framework de React para aplicaciones web estáticas y dinámicas.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiVite size={48} />
                        <h2 className="text-xl font-bold">Vite</h2>
                        <p>Herramienta de desarrollo que proporciona un entorno de desarrollo rápido para aplicaciones web.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiSupabase size={48} />
                        <h2 className="text-xl font-bold">Supabase</h2>
                        <p>Plataforma de backend como servicio que proporciona una base de datos y autenticación.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiTailwindcss size={48} />
                        <h2 className="text-xl font-bold">Tailwind CSS</h2>
                        <p>Framework de CSS que proporciona utilidades para construir diseños personalizados rápidamente.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiLaravel size={48} />
                        <h2 className="text-xl font-bold">Laravel</h2>
                        <p>Framework de PHP para el desarrollo de aplicaciones web.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaPhp size={48} />
                        <h2 className="text-xl font-bold">PHP</h2>
                        <p>Lenguaje de programación de propósito general ampliamente utilizado en desarrollo web.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiMysql size={48} />
                        <h2 className="text-xl font-bold">MySQL</h2>
                        <p>Sistema de gestión de bases de datos relacional.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <SiMongodb size={48} />
                        <h2 className="text-xl font-bold">MongoDB</h2>
                        <p>Base de datos NoSQL orientada a documentos.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="p-4 border rounded-lg">
                        <FaAws size={48} />
                        <h2 className="text-xl font-bold">Amazon Web Services</h2>
                        <p>Plataforma de servicios en la nube que ofrece una amplia gama de servicios.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
