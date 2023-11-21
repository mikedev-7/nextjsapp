import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import inspirationImg from "../public/inspiration-2.jfif";


const Hero2 = () => {
  return  <div className='bg-white'>
        <div className='block__1'>
        <p className='font-semibold'>Best places to find design inspiration</p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ipsa facilis repudiandae 
          ducimus libero cum earum sint, expedita reiciendis magnam praesentium, tempore error
           quibusdam maiores excepturi accusamus numquam blanditiis perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, id. 
          Cumque dolorem voluptatum ipsa nam quaerat ratione nemo eos libero beatae natus 
          molestiae repellat perspiciatis doloremque, sequi ut corporis! Mollitia.
        </p>

        <div className='font-bold'>
          Episode page
          <FaArrowRight />
        </div>
        </div>
      
      <div className='block__2'>
      <Image src= {inspirationImg} />
      </div>
    
     </div>
  
}

export default Hero2