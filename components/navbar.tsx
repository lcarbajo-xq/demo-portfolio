import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex fixed top-0 items-center justify-center py-7 w-full z-50 border-b-2 border-black-200 bg-black-100'>
      <div className='flex items-center justify-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href='/'>
          <Image
            src='https://picsum.photos/100/100'
            alt='logo'
            className='rounded'
            width={55}
            height={48}
          />
        </Link>
        <Image
          src='/hamburger.svg'
          alt='logo'
          width={55}
          height={48}
          className='block md:hidden'
        />
        <ul className='flex items-center justify-center gap-x-3 md:gap-x-10 max-md:hidden'>
          <li className='body-text link-gradient !font-extrabold'>
            <Link href='/resources'>Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
