import { motion } from 'framer-motion'
import { experience, itemVariants } from '../constants'


const MyExperience = () => {

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 mt-6 p-4">
            {experience.map((item, index) => (
                <motion.div
                    key={index}
                    className="relative flex gap-5 w-full"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <div className="mt-4 size-7 flex items-center justify-center bg-btn-1 text-white rounded-full"/>
                    <div className="p-4 w-full flex-1 rounded-xl" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)'}}>
                        <h3 className="text-lg font-bold">{item.position}<span className='text-xs font-normal'> at</span> <span className='font-medium'>{item.companyName}</span></h3>
                        <p className="text-sm mb-3">{item.duration}</p>
                        {item.techStack && <p className='text-sm'>Tech Stack: {item.techStack}</p>}
                        <h3 className="text-lg font-semibold mt-2">Responsibilities:</h3>
                        <ul className="flex flex-col gap-0.5 list-disc list-inside">
                            {item.responsibilities.map((respon, index) => (
                                <li key={index} className="text-sm">{respon}</li>
                            ))}
                        </ul>
                    </div>
                    {index !== experience?.length - 1 && <div className="h-[calc(100%+16px)] w-1 bg-btn-1 absolute top-4 left-3 -z-10"/>}
                </motion.div>
            ))}
        </div>
    )
}

export default MyExperience