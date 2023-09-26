import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-between body-text w-full px-20 py-12  max-md:flex-col text-center border-t-2 border-t-black-200 gap-y-5'>
      <p>Copyright © 2023 Louie-Dev | All Rights Reserved</p>
      <div className='flex gap-x-10'>
        <Link href='/terms-of-use'>Terms & Conditions</Link>

        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
