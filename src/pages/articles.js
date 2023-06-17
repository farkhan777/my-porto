import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import { motion, useMotionValue } from 'framer-motion'
import useThemeSwitcher from "../components/hooks/useThemeSwitcher"
import { ArticlesIcon1, ArticlesIcon2 } from '@/components/Icons'
import articles1 from '../../public/images/articles/articlesDark.png';
import articles2 from '../../public/images/articles/articlesLight.png';

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
        <FramerImage style={{ x:x, y:y }} initial={{opacity: 0}} whileInView={{opacity: 1, transition:{duration: 0.2}}} ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({image, title, date, link}) => {
    return(
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once: true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={image} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    const [z, setZ] = useState("");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1535) { // Smaller screen size, adjust position
          setZ("🚧 The work you wanted to see is still in progress 🚧");
        } else if(window.innerWidth > 1279) {
          setZ("🚧 The work you wanted to see is still in progress 🚧");
        } else if(window.innerWidth > 1023) {
          setZ("🚧 The work you wanted to see is still in progress 🚧");
        } else if(window.innerWidth > 767) {
          setZ("🚧 Work in Progress 🚧");
        } else if(window.innerWidth > 639) {
          setZ("🚧 Work in Progress 🚧");
        } else if(window.innerWidth > 479) {
          setZ("🚧 Work in Progress 🚧");
        } else { // Smaller screen size
          setZ("🚧 Work in Progress 🚧");
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
            <Head>
                <title>Farkhan Hamzah Firdaus | Articles Page</title>
                <meta name='description' content='farkhan description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    {/* <AnimatedText text="Words Can Cahnge The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl text-center' /> */}
                    {/* <ul className='grid grid-cols-2 items-center gap-16 lg-gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        img={article1}
                        />
                        <FeaturedArticle 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                        date="June 01, 2023" link="/" image={article3} />
                        <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                        date="June 01, 2023" link="/" image={article3} />
                        <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                        date="June 01, 2023" link="/" image={article3} />
                        <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                        date="June 01, 2023" link="/" image={article3} />
                        <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                        date="June 01, 2023" link="/" image={article3} />
                    </ul> */}

                    <div className='flex justify-center items-center floating'>
                        <div className="bg-Pic dark:bg-Pic-dark w-full h-[28rem] md:w-full sm:h-[26rem]"></div>
                    </div>
                    
                    <h2 className='flex justify-center items-center pt-10 pb-2 text-2xl font-semibold sm:pt-0'>So eager aren't we ?</h2>
                    <p className='flex justify-center items-center text-1xl font-medium text-dark/75 dark:text-light/75'>{z}</p>
                    
                    <div className='flex justify-center items-center pt-10 sm:pt-10'>
                    <Link href="/" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Cool ! Let's Head Back
                    </Link>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default articles