import Logo from "./Logo";
import MenuFooter from "./MenuFooter";
import SocialMedia from "./SocialMedia";

export default function Footer(){
    return(
        <footer className="bg-[#0e0e0e] py-16 w-full">
            <div className="container flex flex-col">
                <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between mb-10">
                    <Logo />
                    <MenuFooter />
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start lg:flex-row lg:items-end lg:justify-between mb-10">
                    <p className="items-start leading-6 w-[90%] lg:w-1/2 text-zinc-400">
                        Audiophile is an all in one stop to fulfill your audio needs.
                        We're a small team of music lovers and sound specialists who are 
                        devoted to helping you get the most out of personal audio. 
                        Come and visit our demo facility - we’re open 7 days a week.
                    </p>

                    <SocialMedia />
                </div>

                <p className="text-center text-zinc-400 lg:mt-16">
                   Copyright 2025. All Rights Reserved
                </p>   
            </div>
        </footer>
    )
}