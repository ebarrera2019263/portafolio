import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import { Github } from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        network: "youtube",
        url: "https://www.youtube.com",
    },
    {
        id: 2,
        network: "linkedin",
        url: "https://www.linkedin.com",
    },
    {
        id: 3,
        network: "twitter",
        url: "https://www.twitter.com",
    },
    {
        id: 4,
        network: "rss",
        url: "#!",
    },
    {
        id: 5,
        network: "twitch",
        url: "https://www.twitch.tv",
    },
];



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "San Manrtín ",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Programador jr",
        subtitle: "is4tech",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Técnico en Reparación",
        subtitle: "SIEG.SA",
        description: "Técnico de reparación de computadoras Dell, especializado en diagnóstico y solución de problemas técnicos, mantenimiento de hardware y software, y soporte al cliente. Experto en instalación, configuración, y actualización de sistemas, con habilidades en la identificación y reemplazo de componentes defectuosos, así como en la resolución de problemas de red y conectividad.",
        date: "Ago 2019",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    
];







export const dataPortfolio = [
    {
        id: 1,
        title: "tomadora de pedidos",
        image: "/pp.jpeg",
        urlGithub: "https://github.com/ebarrera2019263/API-OTS.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Calculadora Web ",
        image: "/callll.png",
        urlGithub: "https://github.com/ebarrera2019263/lab8.git",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "torneo deportivo",
        image: "/torno.png",
        urlGithub: "https://github.com/droldan2019310/torneobackUVG.git",
        urlDemo: "https://tournament-manager-grupo-1.firebaseapp.com/",
    },
    {
        id: 4,
        title: "AgendaWebPlus",
        image: "/web.png",
        urlGithub: "#!",
        urlDemo: "https://agendawebplus-d635d.web.app/",
    },
   
    
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];