import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <>
    <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&family=Nunito:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>    
        </Head>
        
        <Component {...pageProps} />

    </Layout>
</>
  )
}

export default MyApp
