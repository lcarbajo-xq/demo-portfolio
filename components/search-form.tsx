'use client'

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export function SearchForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = ''
      if (searchTerm) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: searchTerm
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, { scroll: false })
    }, 400)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <form className='flex items-center justify-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label className='relative w-full max-w-3xl flex items-center justify-center'>
        <Image
          className='absolute left-8'
          src='/magnifying-glass.svg'
          alt='magnifying glass'
          width={32}
          height={32}
        />
        <Input
          className='h-fit rounded-xl border-0 bg-black-400 base-regular text-white-800 placeholder:text-white-800 pr-8 pl-20 py-6'
          placeholder='Search'
          type='text'
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </label>
    </form>
  )
}
