import {motion} from 'framer-motion'
const Navbar = () => {
    return (
        <div className='max-w-screen px-16 sticky  py-9'>
            <div className='flex justify-center gap-10 whitespace-nowrap sm:justify-between'>
                <h3 className='uppercase text-2xl'>Tech Fest</h3>
                <ul className='hidden sm:flex gap-10 uppercase '>
                    <li className='cursor-pointer'>events</li>
                    <li className='cursor-pointer'>dates</li>
                    <li className='cursor-pointer'>sponsers</li>
                    <li className='cursor-pointer'>events</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar