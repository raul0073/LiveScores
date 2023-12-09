'use client'
import React, { useState } from 'react'
import './navbar.scss'
import logo from './../../../public/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NavbarComp() {

  const router = useRouter()

  return (
    <section className="navbar">
        <div className="container">
            <div className="logo" onClick={()=> router.push('/')}>
              <Image
              src={logo}
              width={80}
              height={80}
              alt='website_logo'
              
              />
            </div>
            <input type="text" placeholder='Search' />
            <div className="menu">
                <ul>
                    <li>About</li>
                </ul>
            </div>
        </div>

    </section>
  )
}
