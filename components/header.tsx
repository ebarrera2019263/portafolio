"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { SocialIcon } from 'react-social-icons'; // Importa SocialIcon

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 mt-5">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Erick 
                            <span className="ml-2">Barrera</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ url, id }) => (
                            <SocialIcon
                                key={id}
                                url={url}
                                className="transition-all duration-300 hover:text-secondary"
                                style={{ height: 30, width: 30 }}
                            />
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
