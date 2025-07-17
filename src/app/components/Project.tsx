import {motion} from 'framer-motion';
import {projects} from '@/data/projects';

export default function Project(){
    return(
        <section id='projects' className='py-20'>
            <h2 className='text-4xl font-bold text-center mb-10'>Projects</h2>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                   {projects.map((project, index) =>(
                    <motion.div 
                    key ={index}
                    className='bg-white shadow-lg rounded-lg overflow-hidden'
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    />
                    //<Image />
                   ))} 
                </div>
            </div>
        </section>
    )
}
