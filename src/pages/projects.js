import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/sdn1watukebo.png';
import project2 from '../../public/images/projects/lp-monitor-covid-19.jpg';
import project3 from '../../public/images/projects/online_learning.png';
import project4 from '../../public/images/projects/shopping.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto'></Image>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"></FramerImage>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        
        <Link href={link} target='_blank' className='hover:underline underline-offset-2 text-primary dark:text-primaryDark'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export const projectsData = [
  {
    type: 'SD Negeri 1 Watukebo',
    img: project1,
    summary: 'Website for 1 Watukebo State Elementary School',
    link: 'https://sdn1watukebo.sch.id/',
    github: 'https://github.com/BC07/SDN-1-Watukebo',
  },
  {
    type: 'Covid Vaccination Rate',
    img: project2,
    summary: 'Consume API ML Prediction in Front-End, built with React JS, Antd, and Data Visualization with Recharts.',
    link: 'https://pantau-covid-19.netlify.app/',
    github: 'https://github.com/ilhamAdhim/covid-vaccination-rate',
  },
  {
    type: 'Bootcamp App API',
    img: project3,
    summary: 'Backend API for Bootcamp Web application, which is a bootcamp directory website made with Express to manage bootcamps, course, users, and authentication.',
    link: 'https://documenter.getpostman.com/view/21759373/2s93z58jDa',
    github: 'https://github.com/farkhan777/Bootcamp-Web-API',
  },
  {
    type: 'E-commerce API',
    img: project4,
    summary: 'Backend API for E-shop application, which is a E-shop directory API made with Express to manage bootcamps, course, users, and authentication.',
    link: 'https://documenter.getpostman.com/view/21759373/2s93z6d48a',
    github: 'https://github.com/farkhan777/E-commerce-Backend',
  },
  // Add more project data here...
];

const Projects = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate index range for current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // router.push(`/?page=${pageNumber}`, undefined, { shallow: true });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Farkhan Hamzah Firdaus | Projects Page</title>
        <meta name='description' content='farkhan description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' className='text-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-8 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            {currentProjects.map((project, index) => (
              <div className='col-span-4 sm:col-span-12' key={index}>
                <Project {...project} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center mt-16'>
            {Array.from({ length: Math.ceil(projectsData.length / projectsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 py-2 px-4 rounded ${
                  currentPage === index + 1 ? 'bg-black text-white dark:bg-primaryDark dark:text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
