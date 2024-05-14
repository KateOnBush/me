import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import SpaceParticles from "./SpaceParticles";
import {loadFull} from "tsparticles";
import Main from "./Main";
import {Container, Engine, ISourceOptions} from "@tsparticles/engine/types";
import {loadBaseMover} from "@tsparticles/move-base";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {usePageStackContext} from "./contexts/PageStack";

export interface IPageProps {
    changePage: (target: PageList) => void;
}

export enum PageList {
    HOME,
    PROJECTS
}

const PageNameList = [
    "Home",
    "Projects"
]

function App() {

    const [ init, setInit ] = useState(false);
    const [ engine, setEngine ] = useState<Engine | null>(null);
    let particleOptionsRef = useRef<ISourceOptions>(SpaceParticles);
    let containerRef = useRef<Container | null>();
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
            await loadBaseMover(engine);
            setEngine(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        containerRef.current = (container ?? null);
    };

    const triggerStarsTransition = (time: number, direction: number) => {
        if (!containerRef.current) return;
        containerRef.current?.particles.filter(()=>true).forEach(particle => {
            let particleInitialVelocity = particle.initialVelocity;
            for(let i = 1; i <= 50; i++) {
                setTimeout(()=>{
                    let targetX = particleInitialVelocity.x * 100 * direction,
                        targetY = particleInitialVelocity.y * 100 * direction;
                    let lerpX = particle.velocity.x + ((targetX) - particle.velocity.x) * (0.1),
                        lerpY = particle.velocity.y + ((targetY) - particle.velocity.y) * (0.1);
                    particle.velocity.x = lerpX;
                    particle.velocity.y = lerpY;
                }, 10 * i);
            }
        })

        setTimeout(() => {
            containerRef.current?.particles.filter(()=>true).forEach(particle => {
                const particleInitialVelocity = particle.initialVelocity;
                for(let i = 1; i <= 50; i++) {
                    setTimeout(()=>{
                        let targetX = particleInitialVelocity.x,
                            targetY = particleInitialVelocity.y;
                        let lerpX = particle.velocity.x + ((targetX) - particle.velocity.x) * (0.1),
                            lerpY = particle.velocity.y + ((targetY) - particle.velocity.y) * (0.1);
                        particle.velocity.x = lerpX;
                        particle.velocity.y = lerpY;
                    }, 40 * i);
                }
            })
        }, time - 20 * 40);
    }

    let pageList = usePageStackContext();

    return (
        <div className="w-full h-full
        bg-gradient-to-br from-indigo-950 to-black flex justify-center items-center flex-col">
            <Particles options={particleOptionsRef.current} particlesLoaded={particlesLoaded}/>
            <header className="w-full h-1/6 flex justify-center items-center">
                {pageList.stack.map((page, i) =>
                    <>
                        <span className="text-white">{PageNameList[page]}</span>
                        {i === pageList.stack.length - 1 || <ChevronRightIcon/>}
                    </>
                )}
            </header>
            <div className="bg-opacity-40 w-full h-5/6 bg-black relative overflow-hidden">
                <Main triggerTransition={triggerStarsTransition}/>
            </div>

            <footer className="w-full h-1/6">

            </footer>
        </div>
    );
}

export default App;
