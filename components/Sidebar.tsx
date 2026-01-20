
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const Sidebar = () => {
    const pathname = usePathname()  
  return (
    <div className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/"
            className='mb-12 cursor-pointer items-center gap-2 flex'>
                <Image
                src="/icons/logo.png"
                alt="Logo"
                width={34}
                height={34}
                className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Atlas</h1>
            </Link>
            
            {sidebarLinks.map((link) => {
                const isActive = link.route === pathname || pathname.startsWith(`${link.route}/`)
                return (
                    <Link
                    href={link.route}
                    key={link.label}
                    className={cn("sidebar-link", {
                        "bg-bank-gradient": isActive
                    })}
                    >
                        <div className='relative size-6'>
                            <Image
                            src={link.imgURL}
                            alt={link.label}
                            fill
                            className={cn({'brightness-[3] invert-0': isActive})}                   />
                        </div>
                        <p className={cn('sidebar-label' , {'!text-white': isActive})}>{link.label}</p>
                    </Link>
                )
            })}
        </nav>
    </div>
  )
}

export default Sidebar