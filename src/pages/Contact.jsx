import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contact from '../assets/contact.png'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import whatsapp from '../assets/whatsapp.jpg'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'

const Contact = () => {

    const handleClick = (url) => {
        window.open(url, '_blank')
    }
    
    return (
        <div className="p-4 flex-1 flex flex-col">
            <img src={contact} width="100%" height="100%" alt="" />
            <h2 className='text-[22px] font-bold text-center mt-4'>Let&apos;s make something great together</h2>
            <p className='text-center mt-3'>I&apos;m always excited to work with new people. Whether you&apos;re a founder, a designer, or an engineer, I&apos;d love to hear from you.</p>
            <div className='flex-1 flex items-center justify-center gap-3'>
                <a href={'mailto:getkar128@gmail.com'} className='size-10 border border-btn-1 flex items-center justify-center rounded-full transition-transform hover:scale-110'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-btn-1' />
                </a>
                <div className='size-10 border border-btn-1 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110' onClick={() => handleClick(`https://wa.me/${+919448575131}`)}>
                    <img src={whatsapp} alt="" className='size-8 object-cover rounded-full'/>
                </div>
                <div className='size-10 border border-btn-1 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110' onClick={() => handleClick(`https://www.linkedin.com/in/karthik-a-m-1b7518117/`)}>
                    <img src={linkedIn} alt="" className='w-7 h-auto'/>
                </div>
                <div className='size-10 border border-btn-1 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110' onClick={() => handleClick(`https://github.com/getkar128`)}>
                    <img src={github} alt="" className='size-9 object-cover rounded-full'/>
                </div>
            </div>
        </div>
    )
}

export default Contact