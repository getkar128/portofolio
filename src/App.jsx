import Home from "./pages/Home"

import Contact from "./pages/Contact"
import MyWork from "./pages/MyWork"
import MyExperience from "./pages/MyExperience"
import { Navigate, Route, Routes } from "react-router-dom"
import RootLayout from "./components/Layout/RootLayout"


const App = () => {

    return (
        <main className="h-screen w-full flex flex-col">
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="projects" element={<MyWork />}/>
                    <Route path="experience" element={<MyExperience />}/>
                </Route>
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>
        </main>
    )
}

export default App