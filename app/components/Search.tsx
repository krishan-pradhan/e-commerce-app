"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(query).toLocaleLowerCase()}`)
  }
  return (
    <>
      <div>
        <form action="" className='my-5 flex justify-center' onSubmit={handleSubmit}>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="search" value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="submit" variant={'ghost'}>Search</Button>
        </div>
        </form>
      </div>
    </>
  )
}

export default Search