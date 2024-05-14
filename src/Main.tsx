import React, {useState} from "react";
import {usePagesContext} from "./contexts/Pages";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import {PageList} from "./App";
import {usePageStackContext} from "./contexts/PageStack";

interface IMainProps {
    triggerTransition: (time: number, direction: number) => void;
}

export default function Main({ triggerTransition }: IMainProps) {

    let {page, setPage} = usePagesContext();
    let [transitionDirection, setTransitionDirection] = useState<number>(0);
    let [pageLate, setPageLate] = useState<PageList>(page);
    let pageList = usePageStackContext();

    const changePage = function (target: PageList) {
        setTransitionDirection(Math.sign(target - page));
        triggerTransition(2000, -Math.sign(target - page));
        pageList.push(target);
        setPage(target);
        setTimeout(() => {
            setTransitionDirection(0);
            setPageLate(target);
        }, 2000);
    }
    let classString = transitionDirection === 0 ? "" : ((transitionDirection === -1 ? "translate-x-[100%]" : "translate-x-[-100%]") + " blur-transition-active translate-transition");
    function getPage(pageNumber: PageList) {
        switch (pageNumber) {
            case PageList.HOME:
                return <HomePage changePage={changePage}/>
            case PageList.PROJECTS:
                return <ProjectsPage changePage={changePage}/>
        }
    }

    return (<>
        <div className={`w-full h-full blur-transition ${classString}`}>
            {getPage(pageLate)}
        </div>
        <div className={`absolute blur-transition w-full h-full top-0 overflow-x-hidden right-[100%] ${classString}`}>
            {getPage(page)}
        </div>
        <div className={`absolute blur-transition w-full h-full top-0 overflow-x-hidden left-[100%] ${classString}`}>
            {getPage(page)}
        </div>
    </>)

}