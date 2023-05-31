import React from 'react'
import {motion} from "framer-motion"

const MySkill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute' whileHover={{scale:1.05}} initial={{x:0, y:0}} animate={{x:x, y:y}} transition={{duration: 1.5}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen raeltive flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex flex-col items-center justify-center rounded-full font-semibold 
                bg-dark text-light p-6 shadow-dark cursor-pointer' whileHover={{scale:1.05}}>
                    <p>Software</p>
                    <p>Developtment</p>
                </motion.div>
                <MySkill name="Node.js" x="-11vw" y="2vw"></MySkill>
                <MySkill name="Golang" x="4vw" y="-12vw"></MySkill>
                <MySkill name="Laravel" x="-10vw" y="-10vw"></MySkill>
                <MySkill name="Python" x="-25vw" y="2vw"></MySkill>
                <MySkill name="ReactJS" x="-11vw" y="9vw"></MySkill>
                <MySkill name="ExpressJS" x="13vw" y="2vw"></MySkill>
                <MySkill name="PostgresQL" x="-5vw" y="-6vw"></MySkill>
                <MySkill name="MongoDB" x="-1vw" y="7vw"></MySkill>
                <MySkill name="MySQL" x="8vw" y="-5vw"></MySkill>
                <MySkill name="PostGIS" x="9vw" y="10vw"></MySkill>
                <MySkill name="Mocha" x="-17vw" y="-5vw"></MySkill>
                <MySkill name="GIN" x="15vw" y="-7vw"></MySkill>
            </div>
        </>
    )
}

export default Skills