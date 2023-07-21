'use client'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import HeadComponent from '@/components/Head/Head'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

// export const metadata = {
//   title: 'Home | Don Benny',
//   description: "Welcome to my developer website, where I showcase my skills and expertise as a software developer. With a passion for crafting efficient and innovative solutions, I specialize in web and mobile application development. From front-end development using modern frameworks to back-end programming with scalable architectures, I bring ideas to life through clean code and intuitive user experiences. Through this website, you can explore my portfolio, featuring a diverse range of projects that highlight my technical prowess and attention to detail. Whether it's building responsive websites, optimizing performance, or integrating APIs, I am dedicated to delivering high- quality solutions tailored to meet your specific needs.Join me on this journey of exploration, collaboration, and innovation, and let's bring your digital vision to reality together.",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body>
        <Navbar />
        <div>
          {children}

        </div>
      </body>
    </html>
  )
}
