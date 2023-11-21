import Link from 'next/link'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { CgMenuGridO } from "react-icons/cg";

const Hero = () => {
  return <div className='bg-[url(./public/backgroundimg.jpeg)]'>

    <div className='container flex justify-evenly items-center text-black '>
        <div>Michael-X</div>

        <div>
        <link className="navbar__link relative text-center hover:text-amber-950 hover:underline"   href="#">Home</link>
        </div>
        <div>
        <link className="navbar__link relative text-center  hover:text-amber-950 hover:underline " href="#">Pages</link>
        </div>
        <div>
        <link className="navbar__link relative text-center hover:text-amber-950 hover:underline" href="#">Podcast</link>
        </div>
        <div>
        <link className="navbar__link relative text-center hover:text-amber-950 hover:underline " href="#">Blog</link>
        </div>
        <div>
        <link className="navbar__link relative text-center hover:text-amber-950 hover:underline " href="#">Shop</link>
        </div>

        <div>
            <BsSearch />
            Search
        </div>
        <div>
            <CgMenuGridO />
        </div>


    </div>
  </div>
  
}

export default Hero