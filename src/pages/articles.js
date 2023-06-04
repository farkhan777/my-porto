import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <Link href={link} target='_blank'>
            
            </Link>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Farkhan Hamzah Firdaus | Articles Page</title>
                <meta name='description' content='farkhan description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Cahnge The World!" className='mb-16 text-center' />
                    <ul className='grid grid-col-2 items-center'>
                        <li>Featured articles-1</li>
                        <li>Featured articles-2</li>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles