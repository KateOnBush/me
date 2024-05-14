import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {PageList} from "../App";

const PagesContext = createContext<PagesContextProps | null>(null);

export const usePagesContext = () => {
    const context = useContext(PagesContext);
    if (!context) throw new Error();
    return context;
}

interface PagesContextProps {
    page: PageList;
    setPage: Dispatch<SetStateAction<PageList>>
}

interface PagesProviderProps {
    children: ReactNode;
}

export const PagesProvider: React.FC<PagesProviderProps> = ({ children }) => {
    const [page, setPage] = useState(PageList.HOME);

    return (
        <PagesContext.Provider value={{page, setPage}} >
            {children}
        </PagesContext.Provider>
    );
};