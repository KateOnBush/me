import React, {useMemo} from "react";
import {ArrowRightCircleIcon} from "@heroicons/react/20/solid";
import {IPageProps, PageList} from "../App";
import {UserIcon} from "@heroicons/react/16/solid";

const memoji = require("../images/memoji.png");

const welcomeTextList: Array<[string, number]> = [
    ["You'll want to see my work.", 40],
    ["I code cool things.", 40],
    ["I talk to computers.", 15],
    ["I hope you'll like it around here.", 4],
    ["You had 1% chance of reading this, congrats.", 1]
];

export default function HomePage({ changePage }: IPageProps) {

    const welcomeText = useMemo(() => {
        let r = Math.random() * 100;
        let i = 0;
        while(r > welcomeTextList[i][1]) {
            r-=welcomeTextList[i][1];
            i++;
        }
        return welcomeTextList[i][0];
    }, []);

    return (<>
        <main className="h-full w-full flex justify-evenly items-center flex-row z-1 relative ">
            <div className="ml-5 flex justify-center items-start flex-col">
                <p className="text-2xl text-center text-white">Hello there, I'm Aouab!</p>
                <p className="text-5xl text-center text-white">{welcomeText}</p>
            </div>
            <div className="h-1/3 flex flex-col justify-center items-center">
                <img src={memoji} alt="Memoji" className="w-1/2 m-6 aspect-auto"/>
                <button className="text-gray-500 hover:text-white text-center transition duration-200 flex flex-row justify-center items-center">
                    About Me <UserIcon className="size-[16px] ml-1"/></button>
            </div>
            <button className="text-gray-400 absolute bottom-[15%] text-2xl flex flex-row justify-center items-center animate-bounce hover:text-white transition duration-50"
                    onClick={()=>changePage(PageList.PROJECTS)}
            >
                Check out my work <ArrowRightCircleIcon className="size-[30px] mx-2" />
            </button>
        </main>
    </>);

}