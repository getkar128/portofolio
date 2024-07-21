import { createContext, useContext, useRef } from "react";

const PortfolioContext = createContext({})

const PortfolioProvider = ({ children }) => {

    const homeRef = useRef(null)
    const workRef = useRef(null)
    const experienceRef = useRef(null)
    const contactRef = useRef(null)

    return <PortfolioContext.Provider value={{
        homeRef,
        workRef,
        experienceRef,
        contactRef
    }} >
        {children}
    </PortfolioContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePortfolioContext = () => useContext(PortfolioContext)
export default PortfolioProvider