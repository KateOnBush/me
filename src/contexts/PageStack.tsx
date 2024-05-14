import React, {createContext, ReactNode, useContext, useState} from "react";
import {PageList} from "../App";

const PageStackContext = createContext<PageStackContextProps | null>(null);

export const usePageStackContext = () => {
    const context = useContext(PageStackContext);
    if (!context) throw new Error();
    return context;
}

interface PageStackContextProps {
    stack: Array<PageList>;
    push: (value: PageList) => void;
    pop: () => void;
}

interface PageStackProviderProps {
    children: ReactNode;
}

export const PageStackProvider: React.FC<PageStackProviderProps> = ({ children }) => {
    const [pageList, setPageList] = useState<PageList[]>([PageList.HOME]);
    const stack = pageList,
          push = function (page: PageList)  {
              pageList.push(page);
              setPageList(pageList);
          },
          pop = () => {
              pageList.pop();
              setPageList(pageList);
          }
    return (
        <PageStackContext.Provider value={{stack, push, pop}} >
            {children}
        </PageStackContext.Provider>
    );
};