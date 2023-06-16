import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start center", "end"]
        }
    )
    return (
        <div className='my-64 '>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full text-left'>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    
                    <Details position="Back End Developer" 
                    company="PT Telekomunikasi Indonesia Tbk" 
                    companyLink="https://www.telkom.co.id/sites" 
                    time="September 2022 - March 2023" 
                    address="Bandung, West Java" 
                    work="Worked on the National Address Database project, where my role involves developing, improving, and maintaining high-quality back-end services and APIs. I actively participate in the entire application lifecycle, with a particular focus on coding and debugging. Working within an agile culture, I collaborate closely with a cross-functional team comprising backend developers, frontend developers, UI/UX designers, data scientists, product owners, and more." />

                    <Details position="Back End Developer" 
                    company="PT Investree Radhika Jaya" 
                    companyLink="https://investree.id/" 
                    time="August 2022 - September 2022" 
                    address="Remote" 
                    work="Learned with multiple tech stacks and have gained proficiency in using Postgresql for database management. Additionally, I have developed REST APIs using the Spring Boot framework." />

                    <Details position="Back End Engineer" 
                    company="Generasi Gigih 2.0 by YABB & GoTo" 
                    companyLink="https://www.anakbangsabisa.org/generasi-gigih/" 
                    time="February 2022 - July 2022" 
                    address="Remote" 
                    work="Learned to create a REST API using Ruby on Rails, gaining practical experience in back-end development. During this process, I have also familiarized myself with Postgresql, emphasizing clean code and adhering to the SOLID principle. In addition, I have developed REST APIs using Node.js, Sequelize, and Postgresql, expanding my skill set and enabling me to choose appropriate technologies for efficient back-end development." />

                    <Details position="Machine Learning and Front-End Web Developer - KAMPUS MERDEKA" 
                    company="PT Presentologics" 
                    companyLink="https://www.dicoding.com/" 
                    time="August 2021 - January 2022" 
                    address="Remote" 
                    work="I learned about Machine Learning and Deep Learning algorithms, which helped me create effective models. I also gained expertise in optimizing and deploying these models to Flask. Additionally, I dedicated time to mastering ReactJs for building dynamic and interactive user interfaces. To bring everything together, I combined my Machine Learning expertise, Flask, and ReactJs skills to develop a web application that seamlessly integrates a powerful Machine Learning model, delivering a comprehensive and valuable user experience." />

                    

                    <Details position="Laboratory Assistant" 
                    company="Informatics Laboratory UMM" 
                    companyLink="https://infotech.umm.ac.id/" 
                    time="August 2020 - March 2023" 
                    address="Malang, East Java" 
                    work="In this role, my main responsibilities included supporting lecturers in delivering course material to students according to the established curriculum. I assisted in teaching and assessing practical activities during lab sessions. Additionally, I collaborated with subject lecturers to coordinate and evaluate student learning outcomes based on the completed practical activities. Another aspect of my role involved designing and creating learning modules that supplemented the practical activities, following the guidance of the course lecturer." />

                </ul>
            </div>

        </div>
    )
}

export default Experience