import React from 'react'
import Link from "next/link";

const About = () => {
  return (
    <>
    <h1 className='text-center text-2xl'>About</h1>
    <Link href="/">
    <button>
      Goback
    </button>
    </Link>
    
    </>
  )
}

export default About