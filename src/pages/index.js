import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import user from '@/data/user';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const route = useRouter();
  const path = route.pathname;
  const verificar = ()=>{}

  return (
    <div className='h-full w-full'>

        {route.push('/login')}
      

    </div>
  )
}
