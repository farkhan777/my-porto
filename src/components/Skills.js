import React from 'react'
import {motion} from "framer-motion"

const MySkill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute' whileHover={{scale:1.05}} initial={{x:0, y:0}} whileInView={{x:x, y:y}} transition={{duration: 1.5}} viewport={{once: true}}>
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
                <MySkill name="ExpressJS" x="11vw" y="2vw"></MySkill>
                <MySkill name="PostgresQL" x="-5vw" y="-6vw"></MySkill>
                <MySkill name="MongoDB" x="0vw" y="7vw"></MySkill>
                <MySkill name="MySQL" x="-21vw" y="-9vw"></MySkill>
                <MySkill name="PostGIS" x="-1vw" y="15vw"></MySkill>
                <MySkill name="Mocha" x="25vw" y="-2vw"></MySkill>
                <MySkill name="Docker" x="-18vw" y="-3vw"></MySkill>
                <MySkill name="Restify" x="9vw" y="10vw"></MySkill>
                <MySkill name="JavaScript" x="7vw" y="-5vw"></MySkill>
                <MySkill name="TypeScript" x="17vw" y="-11vw"></MySkill>
                <MySkill name="SQLite" x="22vw" y="7vw"></MySkill>
                <MySkill name="PHP" x="-5vw" y="-15vw"></MySkill>
                <MySkill name="GraphQL" x="-17vw" y="-16vw"></MySkill>
                <MySkill name="GRPC" x="9vw" y="-18vw"></MySkill>
                <MySkill name="TensorFlow" x="-19vw" y="15vw"></MySkill>
                <MySkill name="Next.js" x="19vw" y="15vw"></MySkill>
            </div>
        </>
    )
}

export default Skills