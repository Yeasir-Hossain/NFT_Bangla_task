import Head from 'next/head'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Stats from './components/Stats/Stats'
import Mints from './components/Mints/Mints'
import Stakes from './components/Stakes/Stakes'
import Utilities from './components/Utilities/Utilities'
import Packages from './components/Packages/Packages'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'

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
        <Services></Services>
        <Stats></Stats>
        {/* <Mints mints={props.mints}></Mints>
        <Stakes stakes={props.stakes}></Stakes> */}
        <Mints></Mints>
        <Stakes></Stakes>
        <Utilities></Utilities>
        <Packages></Packages>
        <Partners></Partners>
      </main>
      <Footer></Footer>
    </>
  )
}

// SSR code for stakes and mints
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const mintsres = await fetch(`http://localhost:5000/mints`)
//   const stakestsres = await fetch(`http://localhost:5000/stakes`)
//   const mints = await mintsres.json()
//   const stakes = await stakestsres.json()
//   // Pass data to the page via props
//   return { props: { mints, stakes } }
// }
