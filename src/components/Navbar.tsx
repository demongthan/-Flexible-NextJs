import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import logoImage from '../../public/logo.svg'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session={};

  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'><Image src={logoImage} width={115} height={43} alt='Flexible'></Image></Link>

            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link)=>(
                    <Link href={link.href} key={link.key}>{link.text}</Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
            {session?(
                <>
                    UserPhoto

                    <Link href='/create-project'>Share Work</Link>
                </>
            ):(
                <AuthProviders></AuthProviders>
            )}
        </div>
    </nav>
  )
}

export default Navbar