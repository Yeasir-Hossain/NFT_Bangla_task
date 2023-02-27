import Head from 'next/head'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Stats from './components/Stats/Stats'

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Bangla Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main className='bg-black text-white scroll-smooth hover:scroll-smooth'>
        <Banner></Banner>
        <Services></Services>
        <Stats></Stats>
      </main>
    </>
  )
}
