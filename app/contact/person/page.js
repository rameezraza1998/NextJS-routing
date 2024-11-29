import React from 'react'
import Link from "next/link";

const ContactPerson = () => {
  return (
    <>
    <h1 className='text-center text-2xl'>Nested Contact</h1>
    <Link href="/contact">
    <button>
      Goback
    </button>
    </Link>
    </>
    
  )
}

export default ContactPerson