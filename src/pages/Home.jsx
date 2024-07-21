import { motion } from "framer-motion"
import Profile from "../components/shared/Profile"

const Home = () => {
    
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex flex-col justify-center items-center m-auto px-6 py-8 rounded-2xl"
        >
            <Profile />
            <div className='rounded-xl p-4 mt-4' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)'}}>
                <h3 className='text-2xl font-bold'>About Me:</h3>
                <p className='mt-2 leading-[150%]'>With <span className='font-bold'>three years</span> of dedicated <span className='font-bold'>Front-End development</span> experience, I am passionate about crafting seamless and engaging user interfaces using technologies like <span className='font-bold'>React, Redux Toolkit, JavaScript, TypeScript, HTML, TailwindCSS and CSS.</span> My journey into software development began after a rewarding six-year career in <span className='font-bold'>Civil Engineering</span>, where I honed my problem-solving skills and attention to detail. This transition has fueled my enthusiasm and readiness to embrace new challenges in the tech world. I am constantly exploring innovative solutions and technologies, eager to contribute to and grow with dynamic teams.</p>

            </div>
        </motion.div>
    )
}

export default Home