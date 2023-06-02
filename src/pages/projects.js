import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const projects = () => {
    return (
        <>
            <Head>
                <title>Farkhan Hamzah Firdaus | Projects Page</title>
                <meta name='description' content='farkhan description' />
            </Head>
            <main>
                <Layout>
                    <AnimatedText text="Imagination Trumps Knowledge!" />
                </Layout>
            </main>
        </>
    )
}

export default projects