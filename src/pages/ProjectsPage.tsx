import React, {useState} from "react";
import {IPageProps} from "../App";

const memoji = require("../images/memoji.png");

export default function ProjectsPage({ changePage }: IPageProps) {

    const projects = [
        { id: 1, name: 'Rivalium',
            desc: "A 2.5D-style, high octane, character-based online multiplayer game.",
            fun: 85, practical: 70, size: "1.8"},
        { id: 2, name: 'Maticha',
            desc: "An interpreted Object-Oriented programming language, that started as a challenge.",
            fun: 28, practical: 20, size: "1.2"},
        { id: 3, name: 'Discord Presency',
            desc: "A DLL-based extension for GameMaker, providing support for Discord Rich Presence.",
            fun: 20, practical: 60, size: "1"},
        { id: 4, name: 'Expr',
            desc: "A compact data storage format, inspired by Relaxed JSON.",
            fun: 12, practical: 80, size: "1.6"},
    ];

    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
    const [desc, setDesc] = useState<string>("");
    const handleMouseEnter = (pointId) => {
        setHoveredPoint(pointId);
    };

    const handleMouseLeave = () => {
        setHoveredPoint(null);
    };


    return (<>
        <main className="h-full w-full flex justify-evenly items-center flex-row z-1 relative">
            <div className="h-full w-full ml-5 flex justify-evenly items-center flex-col py-16">
                <p className="text-4xl text-center text-white">Projects</p>
                <div className="h-[80%] w-full flex flex-row justify-evenly items-center py-5 relative">

                </div>
            </div>
        </main>
    </>);

}