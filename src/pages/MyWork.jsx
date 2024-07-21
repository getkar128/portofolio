import { motion } from 'framer-motion'
import { itemVariants, myWork } from '../constants'

const MyWork = () => {

    const handleClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className="w-full flex-1 max-w-2xl mx-auto flex flex-col gap-4 mt-6 p-4">
            {myWork.map((item, index) => (
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
                    <div className="p-4 w-full flex-1 rounded-xl transition-transform duration-300 cursor-pointer border-btn-1 hover:border-2 hover:scale-105" onClick={() => handleClick(item.link)} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)'}}>
                        <h2 className='text-2xl font-bold leading-6'>{item.appName} <span className='text-xs font-normal text-secondary-text'>{item.duration}</span></h2>
                        <div className='flex max-sm:flex-col gap-3 items-start mt-2'>
                            <img src={item.image} width={200} className='w-[200px] h-auto rounded-2xl' alt="" />
                            <div>
                                <p className='text-sm leading-[17px] py-2'>{item.description}</p>
                                <div className='flex flex-wrap gap-1'>
                                    {item.techStack.map((item) => (
                                        <p className='w-fit text-xs px-2 py-1 rounded-md bg-btn-1/55' key={item}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {index !== myWork?.length - 1 && <div className="h-[calc(100%+16px)] w-1 bg-btn-1 absolute top-4 left-3 -z-10"/>}
                </motion.div>
            ))}

        </div>
    )
}

export default MyWork