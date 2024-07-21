import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import { motion, useScroll } from "framer-motion";

const pathNames = ['/work', '/experience']
const Header = () => {

    const { pathname } = useLocation()
    const { scrollYProgress } = useScroll()

    const navigate = useNavigate()
    
    return (
        <section className="sticky top-0 bg-white z-10">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                <h3 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>Karthik</h3>
                <NavBar />
            </div>
            {pathNames.includes(pathname) ? <motion.div
                className="h-1 bg-[#333333] w-full origin-left"
                style={{ scaleX: scrollYProgress }}
            /> : <div className="h-1 w-full bg-[#333]"/>}
        </section>
    )
}

export default Header