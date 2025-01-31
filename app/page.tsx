import Header from '@/components/Header'
import React from 'react'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'
import AboutPage from './about/page'


function HomePage() {
  return (
    <div>
   <Header />
   <AboutPage />
   <Projects />
   <Skills />
   <Contact />
    </div>
  )
}

export default HomePage