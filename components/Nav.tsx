import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='px-16 py-4 sticky inset-x-0 top-0 z-30 w-full bg-black transition-all'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <img src="/logo.svg" alt="" className='w-8' />
                <h1 className='font-medium text-3xl'>Blok</h1>
            </div>
            <div className='flex gap-6 text-neutral-500 text-sm'>
                <Link href='/' className='hover:text-white transition-all'>Contact</Link>
                <Link href='/' className='hover:text-white transition-all'>Blog</Link>
            </div>
        </div>
        <div className='flex gap-4'>
            <button className='border border-neutral-500 hover:border-white py-2 px-4 rounded-full text-sm text-neutral-500 hover:text-white flex items-center gap-1 duration-500 transition-all'>Download App <ChevronRight size={16} /></button>
            <button className='border border-white bg-white py-2 px-4 rounded-full text-sm text-black flex items-center gap-1 hover:shadow-lg hover:shadow-[#c8f904]/50 transition-all'>Buy Blok <ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  )
}

export default Nav
