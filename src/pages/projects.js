import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

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
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto'></Image>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        
        <Link href={link} target='_blank' className='hover:underline underline-offset-2 text-primary'>
            <span className='text-primary font-medium text-xl'>{type}</span>
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

const Projects = () => {
  const projectsData = [
    {
      title: 'Crypto Screener Application',
      img: project1,
      summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
      link: '/',
      github: '/',
      type: 'Featured Project',
    },
    {
        title: 'Crypto Screener Application',
        img: project1,
        summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        link: '/',
        github: '/',
        type: 'Featured Project',
      },
      {
        title: 'Crypto Screener Application',
        img: project1,
        summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        link: '/',
        github: '/',
        type: 'Featured Project',
      },
      {
          title: 'Crypto Screener Application',
          img: project1,
          summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
          link: '/',
          github: '/',
          type: 'Featured Project',
        },
        {
            title: 'Crypto Screener Application',
            img: project1,
            summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
            link: '/',
            github: '/',
            type: 'Featured Project',
          },
          {
              title: 'Crypto Screener Application',
              img: project1,
              summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
              link: '/',
              github: '/',
              type: 'Featured Project',
            },
            {
              title: 'Crypto Screener Application',
              img: project1,
              summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
              link: '/',
              github: '/',
              type: 'Featured Project',
            },
            {
                title: 'Crypto Screener Application',
                img: project1,
                summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
                link: '/',
                github: '/',
                type: 'Featured Project',
            },
            {
                title: 'Crypto Screener Application',
                img: project1,
                summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
                link: '/',
                github: '/',
                type: 'Featured Project',
              },
              {
                title: 'Crypto Screener Application',
                img: project1,
                summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
                link: '/',
                github: '/',
                type: 'Featured Project',
              },
              {
                  title: 'Crypto Screener Application',
                  img: project1,
                  summary: 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
                  link: '/',
                  github: '/',
                  type: 'Featured Project',
              },
    // Add more project data here...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Calculate index range for current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Farkhan Hamzah Firdaus | Projects Page</title>
        <meta name='description' content='farkhan description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' className='text-center mb-16' />

          <div className='grid grid-cols-12 gap-8'>
            {currentProjects.map((project, index) => (
              <div className='col-span-4' key={index}>
                <Project {...project} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center mt-8'>
            {Array.from({ length: Math.ceil(projectsData.length / projectsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 py-2 px-4 rounded ${
                  currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
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
