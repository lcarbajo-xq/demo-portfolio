'use client'

import { formUrlQuery } from '@/sanity/utils'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const LINKS = ['all', 'nextjs', 'frontend', 'backend', 'fullstack']

function Filters() {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get('category') || ''
  )

  const router = useRouter()

  const handleFilter = (filter: string) => {
    let newUrl = ''

    if (activeFilter === filter) {
      setActiveFilter('')

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
        value: null
      })
    } else {
      setActiveFilter(filter)

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: filter.toLowerCase()
      })
    }

    router.push(newUrl, { scroll: false })
  }
  return (
    <ul className='text-white-800 body-text flex w-full max-w-full overflow-auto py-12 sm:max-w-2xl gap-2'>
      {LINKS.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={` ${
            activeFilter === link ? 'gradient_blue-purple' : ''
          } rounded-xl whitespace-nowrap px-8 py-2.5`}>
          {link.toLocaleUpperCase()}
        </button>
      ))}
    </ul>
  )
}

export default Filters
