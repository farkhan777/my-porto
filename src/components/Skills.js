import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MySkill = ({ name, _2xlX, _2xlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY}) => {
  const [x, setX] = useState(_2xlX);
  const [y, setY] = useState(_2xlY);
  const [z, setZ] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1535) { // Smaller screen size, adjust position
        setX(_2xlX);
        setY(_2xlY);
        setZ(1);
      } else if(window.innerWidth > 1279) {
        setX(xlX);
        setY(xlY);
        setZ(2);
      } else if(window.innerWidth > 1023) {
        setX(lgX);
        setY(lgY);
        setZ(3);
      } else if(window.innerWidth > 767) {
        setX(mdX);
        setY(mdY);
        setZ(4);
      } else if(window.innerWidth > 639) {
        setX(smX);
        setY(smY);
        setZ(5);
      } else if(window.innerWidth > 479) {
        setX(xsX);
        setY(xsY);
        setZ(6);
      } else { // Smaller screen size
        setX(xsX);
        setY(xsY);
        setZ(7);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {z === 1 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 300, y: 150 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}
  
      {z === 2 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 300, y: 150 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}

      {z === 3 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 170, y: 170 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}

      {z === 4 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 200, y: 150 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}

      {z === 5 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 140, y: 140 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}

      {z === 6 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 
          px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 
          md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light 
          xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 70, y: 100 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}

      {z === 7 && (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 70, y: 100 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          style={{ left: x, top: y }}
        >
          {name}
        </motion.div>
      )}
    </>
  );
  
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div className="flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light 
        p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
        lg:p-6 md:p-4 xs:text-xs xs:p-2" 
        whileHover={{ scale: 1.05 }}>
          <p>Web Dev</p>
        </motion.div>
        <MySkill name="Node.js" _2xlX="13vw" _2xlY="13vw" xlX="13vw" xlY="13vw" lgX="12vw" lgY="13vw" mdX="11vw" mdY="13vw" smX="13vw" smY="13vw" xsX="6vw" xsY="20vw" />
        <MySkill name="JavaScript" _2xlX="23vw" _2xlY="9vw" xlX="23vw" xlY="9vw" lgX="22vw" lgY="9vw" mdX="23vw" mdY="9vw" smX="23vw" smY="9vw" xsX="15vw" xsY="8vw"></MySkill>
        <MySkill name="PostgresQL" _2xlX="13vw" _2xlY="9vw" xlX="13vw" xlY="9vw" lgX="13vw" lgY="9vw" mdX="13vw" mdY="9vw" smX="13vw" smY="9vw" xsX="15vw" xsY="35vw"></MySkill>
        <MySkill name="ExpressJS" _2xlX="24vw" _2xlY="13vw" xlX="24vw" xlY="13vw" lgX="26vw" lgY="13vw" mdX="27vw" mdY="13vw" smX="24vw" smY="13vw" xsX="24vw" xsY="13vw"></MySkill>
        <MySkill name="MongoDB" _2xlX="18.5vw" _2xlY="15vw" xlX="18.5vw" xlY="15vw" lgX="18.5vw" lgY="20vw" mdX="18.5vw" mdY="21vw" smX="18.5vw" smY="21vw" xsX="15vw" xsY="43vw"></MySkill>
        <MySkill name="Golang" _2xlX="22vw" _2xlY="6vw" xlX="22vw" xlY="6vw" lgX="22vw" lgY="5vw" mdX="22vw" mdY="5vw" smX="23vw" smY="5vw" xsX="33vw" xsY="35vw" />
        <MySkill name="Restify" _2xlX="24vw" _2xlY="16vw" xlX="24vw" xlY="16vw" lgX="29vw" lgY="16vw" mdX="29vw" mdY="16vw" smX="31vw" smY="16vw" xsX="25vw" xsY="20vw"></MySkill>
        <MySkill name="TypeScript" _2xlX="12.5vw" _2xlY="16vw" xlX="12.5vw" xlY="16vw" lgX="7vw" lgY="16vw" mdX="7vw" mdY="16vw" smX="6vw" smY="16vw" xsX="7vw" xsY="13vw"></MySkill>
        <MySkill name="MySQL" _2xlX="9vw" _2xlY="10vw" xlX="9vw" xlY="10vw" lgX="7vw" lgY="10vw" mdX="7vw" mdY="10vw" smX="6vw" smY="10vw" xsX="-2vw" xsY="23vw"></MySkill>
        <MySkill name="Docker" _2xlX="28vw" _2xlY="10vw" xlX="28vw" xlY="10vw" lgX="30vw" lgY="10vw" mdX="30vw" mdY="10vw" smX="31vw" smY="10vw" xsX="34vw" xsY="23vw"></MySkill>
        <MySkill name="ReactJS" _2xlX="15vw" _2xlY="6vw" xlX="15vw" xlY="6vw" lgX="15vw" lgY="5vw" mdX="15vw" mdY="5vw" smX="14vw" smY="5vw" xsX="-1vw" xsY="35vw"></MySkill>
        <MySkill name="Laravel" _2xlX="7vw" _2xlY="14vw" xlX="7vw" xlY="14vw" lgX="2vw" lgY="14vw" mdX="2vw" mdY="14vw" smX="0vw" smY="14vw" xsX="0vw" xsY="16vw"></MySkill>
        <MySkill name="PostGIS" _2xlX="30vw" _2xlY="14vw" xlX="30vw" xlY="14vw" lgX="35vw" lgY="14vw" mdX="35vw" mdY="14vw" smX="37vw" smY="14vw" xsX="31vw" xsY="16vw"></MySkill>
        <MySkill name="Next.js" _2xlX="19vw" _2xlY="19vw" xlX="19vw" xlY="19vw" lgX="19vw" lgY="25vw" mdX="19vw" mdY="25vw" smX="19vw" smY="30vw" xsX="17vw" xsY="50vw"></MySkill>
        <MySkill name="Python" _2xlX="9vw" _2xlY="6vw" xlX="9vw" xlY="6vw" lgX="6vw" lgY="6vw" mdX="6vw" mdY="6vw" smX="6vw" smY="6vw" xsX="2vw" xsY="7vw"></MySkill>
        <MySkill name="SQLite" _2xlX="29vw" _2xlY="6vw" xlX="29vw" xlY="6vw" lgX="31vw" lgY="6vw" mdX="31vw" mdY="6vw" smX="31vw" smY="6vw" xsX="30vw" xsY="7vw"></MySkill>
        <MySkill name="PHP" _2xlX="19vw" _2xlY="4vw" xlX="19vw" xlY="4vw" lgX="19vw" lgY="2vw" mdX="19vw" mdY="2vw" smX="19vw" smY="2vw" xsX="18vw" xsY="1vw"></MySkill>
        <MySkill name="Mocha" _2xlX="3vw" _2xlY="10vw" xlX="3vw" xlY="10vw" lgX="-1vw" lgY="10vw" mdX="-1vw" mdY="10vw" smX="3vw" smY="22vw" xsX="3vw" xsY="28vw"></MySkill>
        <MySkill name="TensorFlow" _2xlX="34vw" _2xlY="10vw" xlX="34vw" xlY="10vw" lgX="38vw" lgY="10vw" mdX="38vw" mdY="10vw" smX="33vw" smY="22vw" xsX="30vw" xsY="28vw"></MySkill>
        <MySkill name="GraphQL" _2xlX="9vw" _2xlY="19vw" xlX="9vw" xlY="19vw" lgX="9vw" lgY="26vw" mdX="9vw" mdY="26vw" smX="9vw" smY="26vw" xsX="3vw" xsY="45vw"></MySkill>
        <MySkill name="GRPC" _2xlX="28vw" _2xlY="19vw" xlX="28vw" xlY="19vw" lgX="28vw" lgY="26vw" mdX="28vw" mdY="26vw" smX="28vw" smY="26vw" xsX="29vw" xsY="45vw"></MySkill>
      </div>
    </>
  );
};

export default Skills;
