'use client'
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Beulah from '../../../public/images/Beu.jpg';

export default function Hero(){
    return(
        <section id='home' className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-600'>
            <div className='container mx-auto px-4 text-center'>
                <motion.div 
                 className='w-32 h-32 rounded-full mx-auto mb-4'
                 initial = {{opacity: 0, y: 20}}
                 animate = {{opacity:1, y:0}}
                 transition={{duration: 0.5, delay: 0.5}}
                >
                    <Image 
                        src={Beulah}
                        alt='Beulah'
                        className='w-32 h-32 rounded-full'
                    />
                </motion.div>
                <motion.h1
                 className='text-4xl font-bold text-white mb-4'
                 initial= {{opacity: 0, y: 20}}
                 animate = {{opacity:1, y:0}}
                 transition={{duration: 0.5, delay: 0.5}}
                >
                    Building the Future of Web3 from Nigeria
                </motion.h1>
                <motion.p
                 className='text-white text-lg mb-8'
                 initial= {{opacity: 0, y: 20}}
                 animate = {{opacity:1, y:0}}
                 transition={{duration: 0.5, delay: 0.5}}
                >
Web3 Developer & Educator | React, Solidity, Tailwind CSS                
</motion.p>
<Link href='#projects' className='bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 hover:text-white transition-colors'>
  View My Work
</Link>
            </div>
        </section>
    )
}

