import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/Banner/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Bangla Launchpad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main className='bg-black text-white'>
        <Banner></Banner>
      </main>
    </>
  )
}
