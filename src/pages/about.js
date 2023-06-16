import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { use, useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/farkhan10.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { projectsData } from './projects'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Farkhan Hamzah Firdaus | About Page</title>
                <meta name='description' content='farkhan description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center text-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start text-left xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I am Farkhan, a software engineer and an Informatics Engineering student at University of Muhammadiyah Malang in Indonesia. 
                                I love coding and learning new things, especially in the fields of web development and machine learning.
                            </p>
                            <p className='my-4 font-medium'>
                                I have worked on various projects using different technologies such as Node.js, Golang, ReactJS, MongoDB, Postgresql, and Python. 
                                Some of them are related to Backend Development, Machine Learning and Front End Development. 
                                {/* I have also participated in some programs and competitions to improve my skills and network with other developers and professionals. */}
                            </p>
                            <p className='font-medium'>
                                You can find some of my work on this website, GitHub and LinkedIn, where I also share my interests and opinions on various topics. 
                                I am always open to new opportunities and challenges, so feel free to contact me if you have any questions or suggestions. 
                                Thank you for reading!
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-0 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="Farkhan" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={projectsData.length} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={2} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years experiences</h2>
                            </div>
                        </div>
                    </div>
                
                <Skills />
                <Experience />
                <Education />
                </Layout>
            </main>
        </>
    )
}

export default about