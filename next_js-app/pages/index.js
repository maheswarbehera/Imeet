import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/component/Navbar'
import Testimonial from '@/component/Testimonial'
import Herosection from '@/component/Herosection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="">

    <Navbar/>
    <Herosection/>
    <Testimonial/>
    </div>
    </>
    
  )
}
