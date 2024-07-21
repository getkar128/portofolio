import profileImage from '../../assets/profile.jpeg'

const Profile = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={profileImage} alt="" width={128} height={128} className='size-[128px] rounded-full object-cover' />
            <h1 className='text-2xl font-bold mt-4 leading-6'>Karthik A M</h1>
            <h2 className='text-secondary-text mt-1 font-semibold'>Software Developer </h2>
            <h2 className='text-secondary-text font-semibold'>CareerNinja|LearnTube</h2>
        </div>
    )
}

export default Profile