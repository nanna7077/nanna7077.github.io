// @ts-nocheck

import { useEffect, useState } from "react";
import TextTransition, {presets} from "react-text-transition";
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

export default function Home() {
    const [greeting, setGreeting] = useState("Hello");
    const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "नमस्ते", "வணக்கம்", "ഹലോ", "ನಮಸ್ಕಾರ", "హలో"];
    var changeGreetingTimeout = null;
    var currentGreetingIndex = 0;

    const [role, setRole] = useState('Fullstack Developer');
    const roles = ["Fullstack Developer", "Software Engineer", "Linux Enthusiast", "Innovationalist", "Tech Enthusiast", "ฅ^•ﻌ•^ฅ"];
    var currentRoleIndex = 0;
    
    function changeGreetingandRole() {
        if (currentGreetingIndex >= greetings.length) currentGreetingIndex = 0;
        setGreeting(greetings[currentGreetingIndex++]);
        if (currentRoleIndex >= roles.length) currentRoleIndex = 0;
        setRole(roles[currentRoleIndex++]);
        clearTimeout(changeGreetingTimeout);
        changeGreetingTimeout = setTimeout(changeGreetingandRole, 2000);
    }

    useEffect(() => {
        if (changeGreetingTimeout === null) changeGreetingandRole();
    }, [])
    
    return (
        <div className="p-4">
            <div className="mt-16 text-center flex justify-center font-bold text-nowrap flex-wrap text-[2rem] lg:text-[8rem]">
                <TextTransition children={greeting + ","} springConfig={presets.gentle} className="text-[#f694fb] text-nowrap" />&nbsp;I am Nannan
            </div>
            <div className="mt-8 text-2xl font-bold text-nowrap flex justify-center"><TextTransition children={role} springConfig={presets.molasses} /></div>
            <div className="mt-16 flex justify-center gap-12 flex-col lg:flex-row items-center">
                <div className="flex gap-2 text-lg" onClick={() => window.open("https://linkedin.com/in/nannan-", "_blank")}>
                    <FaLinkedin className="w-8 h-8 fill-[#f694fb]" />
                    nannan-
                </div>
                <div className="flex gap-2 text-lg" onClick={() => window.open("https://github.com/nanna7077", "_blank")}>
                    <FaGithubSquare className="w-8 h-8 fill-[#f694fb]" />
                    nanna7077
                </div>
                <div className="flex gap-2 text-lg" onClick={() => window.open("tel:+919445168005", "_blank")}>
                    <FaPhoneSquare className="w-8 h-8 fill-[#f694fb]" />
                    +919445168005
                </div>
                <div className="flex gap-2 text-lg" onClick={() => window.open("mailto:nanna7077@gmail.com", "_blank")}>
                    <FaMailBulk className="w-8 h-8 fill-[#f694fb]" />
                    nanna7077@gmail.com
                </div>
            </div>
            {/* <div className="text-xl font-semibold text-nowrap mt-20">
                Latest Blogs / Projects
            </div>
            <div className="mt-6 flex gap-4 flex-wrap justify-around">
                <div className="p-4 bg-[rgba(246,148,251,.2)] backdrop-blur-md rounded-xl w-1/4 flex gap-2 flex-col max-h-[200px]">
                    <div className="font-semibold text-lg">Blog 1</div>
                    Blog desc
                    <div className="self-end">
                        21st April 2024
                    </div>
                </div>
            </div> */}
        </div>
    );
}