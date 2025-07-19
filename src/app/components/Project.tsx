'use client'
import {motion} from 'framer-motion';
import {projects} from '../data/projects';
import Image from 'next/image';


export default function Project(){
    return(
        <section id='projects' className='py-20'>
            <h2 className='text-4xl font-bold text-center mb-10'>Projects</h2>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                   {projects.map((project, index) =>(
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative h-48">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.split(', ').map((tech: string, techIndex: number) => (
                                    <span 
                                        key={techIndex}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='px-6 pb-6 flex space-x-4'>
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium'
                            >
                                GitHub
                            </a>
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium'
                            >
                                Live Demo
                            </a>
                        </div>
                    </motion.div>
                   ))} 
                </div>
            </div>
        </section>
    )
}
