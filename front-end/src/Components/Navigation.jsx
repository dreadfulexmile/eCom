import React from 'react'
import { Search } from 'lucide-react';

export default function Navigation() {
  return (
    <header className='bg-white border-b border-gray-200 px-4 lg:px-16'>
      <div>
        <div className='flex items-center justify-between h-16'>
            <a href="/" className='font-bold text-2xl'>Mebius</a>

            <nav className='hidden md:flex space-x-8'>
                {[
                    {
                        path: "/shop/shoes",
                        label: "Shoes",
                    },
                    {
                        path: "/shop/shoes",
                        label: "T-Shirt",
                    },
                    {
                        path: "/shop/shoes",
                        label: "Shorts",
                    },
                    {
                        path: "/shop/shoes",
                        label: "Pants",
                    },
                    {
                        path: "/shop/shoes",
                        label: "Socks",
                    },
                ].map((item) => {
                    return(
                        <a
                         key={item.path}
                         href={item.path}
                         className='font-medium hover:text-gray-600'>
                            {item.label}
                         </a>
                    );
                })}
            </nav>

            <div className='flex items-center space-x-4'>
                <button aria-label='Search' className='p-1'>
                    <Search size={20}/>
                </button>
            </div>
            
                        
        </div>
      </div>
    </header>
  )
}
