import Head from 'next/head'
import FontAwesome from 'next/script'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Corgan Maillet | Programmer</title>
        <meta name="description" content="I am a programmer focusing on video games and first responder software." />
        <link rel="icon" href="/fav.png" />
        <FontAwesome src="https://kit.fontawesome.com/74b1c2a5ca.js" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
