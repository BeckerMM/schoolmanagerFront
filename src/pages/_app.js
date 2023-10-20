import '@/styles/globals.css'
import RootLayout from './layout'

export default function App({ Component, pageProps }) {
  return (<div className='h-full w-full'>
    <RootLayout>
      <Component {...pageProps} />

    </RootLayout>
  </div>)
}
