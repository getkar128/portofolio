import { Outlet } from "react-router-dom"
import Header from "../shared/Header"
import Footer from "../shared/Footer"


const RootLayout = () => {
    return (
        <section className="flex-1 flex flex-col">
            <Header/>
            <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col">
                <Outlet/>
            </div>
            <Footer />
        </section>
    )
}

export default RootLayout