import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MySkill = ({ name, initialX, initialY, _2xlX, _2xlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY}) => {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1535) { // Smaller screen size, adjust position
        setX(_2xlX);
        setY(_2xlY);
      } else if(window.innerWidth > 1279) {
        setX(xlX);
        setY(xlY);
      } else if(window.innerWidth > 1023) {
        setX(lgX);
        setY(lgY);
      } else if(window.innerWidth > 767) {
        setX(mdX);
        setY(mdY);
      } else if(window.innerWidth > 639) {
        setX(smX);
        setY(smY);
      } else if(window.innerWidth > 479) {
        setX(xsX);
        setY(xsY);
      } else { // Larger screen size, use initial position
        setX(initialX);
        setY(initialY);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialX, initialY, _2xlX, _2xlY, xlX, xlY, mdX, mdY, smX, smY, xsX, xsY]);

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 300, y: 160 }}
      whileInView={{x:x, y:y, transition: {duration: 1.5}}}
      viewport={{once: true}}
      style={{ left: x, top: y }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div className="flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2" whileHover={{ scale: 1.05 }}>
          <p>Software</p>
          <p>Development</p>
        </motion.div>
        <MySkill name="Node.js" initialX="0vw" initialY="0vw" _2xlX="13vw" _2xlY="13vw" xlX="13vw" xlY="13vw" lgX="12vw" lgY="13vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw" />
        <MySkill name="JavaScript" initialX="0vw" initialY="0vw" _2xlX="23vw" _2xlY="9vw" xlX="23vw" xlY="9vw" lgX="22vw" lgY="9vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="PostgresQL" initialX="0vw" initialY="0vw" _2xlX="13vw" _2xlY="9vw" xlX="13vw" xlY="9vw" lgX="13vw" lgY="9vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="ExpressJS" initialX="0vw" initialY="0vw" _2xlX="24vw" _2xlY="13vw" xlX="24vw" xlY="13vw" lgX="26vw" lgY="13vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="MongoDB" initialX="0vw" initialY="0vw" _2xlX="18.5vw" _2xlY="15vw" xlX="18.5vw" xlY="15vw" lgX="18.5vw" lgY="20vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Golang" initialX="0vw" initialY="0vw" _2xlX="22vw" _2xlY="6vw" xlX="22vw" xlY="6vw" lgX="22vw" lgY="5vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw" />
        <MySkill name="Restify" initialX="0vw" initialY="0vw" _2xlX="24vw" _2xlY="16vw" xlX="24vw" xlY="16vw" lgX="29vw" lgY="16vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="TypeScript" initialX="0vw" initialY="0vw" _2xlX="12.5vw" _2xlY="16vw" xlX="12.5vw" xlY="16vw" lgX="7vw" lgY="16vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="MySQL" initialX="0vw" initialY="0vw" _2xlX="9vw" _2xlY="10vw" xlX="9vw" xlY="10vw" lgX="7vw" lgY="10vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Docker" initialX="0vw" initialY="0vw" _2xlX="28vw" _2xlY="10vw" xlX="28vw" xlY="10vw" lgX="30vw" lgY="10vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="ReactJS" initialX="0vw" initialY="0vw" _2xlX="15vw" _2xlY="6vw" xlX="15vw" xlY="6vw" lgX="15vw" lgY="5vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Laravel" initialX="0vw" initialY="0vw" _2xlX="7vw" _2xlY="14vw" xlX="7vw" xlY="14vw" lgX="2vw" lgY="14vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="PostGIS" initialX="0vw" initialY="0vw" _2xlX="30vw" _2xlY="14vw" xlX="30vw" xlY="14vw" lgX="35vw" lgY="14vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Next.js" initialX="0vw" initialY="0vw" _2xlX="19vw" _2xlY="19vw" xlX="19vw" xlY="19vw" lgX="19vw" lgY="25vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Python" initialX="0vw" initialY="0vw" _2xlX="9vw" _2xlY="6vw" xlX="9vw" xlY="6vw" lgX="6vw" lgY="6vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="SQLite" initialX="0vw" initialY="0vw" _2xlX="29vw" _2xlY="6vw" xlX="29vw" xlY="6vw" lgX="31vw" lgY="6vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="PHP" initialX="0vw" initialY="0vw" _2xlX="19vw" _2xlY="4vw" xlX="19vw" xlY="4vw" lgX="19vw" lgY="2vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="Mocha" initialX="0vw" initialY="0vw" _2xlX="3vw" _2xlY="10vw" xlX="3vw" xlY="10vw" lgX="-1vw" lgY="10vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="TensorFlow" initialX="0vw" initialY="0vw" _2xlX="34vw" _2xlY="10vw" xlX="34vw" xlY="10vw" lgX="38vw" lgY="10vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="GraphQL" initialX="0vw" initialY="0vw" _2xlX="9vw" _2xlY="19vw" xlX="9vw" xlY="19vw" lgX="9vw" lgY="26vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
        <MySkill name="GRPC" initialX="0vw" initialY="0vw" _2xlX="28vw" _2xlY="19vw" xlX="28vw" xlY="19vw" lgX="28vw" lgY="26vw" mdX="10vw" mdY="10vw" smX="10vw" smY="10vw" xsX="10vw" xsY="10vw"></MySkill>
      </div>
    </>
  );
};

export default Skills;
