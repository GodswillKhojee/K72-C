import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
    const imagesDivRef = useRef(null);
    const imageRef = useRef(null);

    const imageArray = [
        "Images/Carl_480x640.jpg",
        "Images/Olivier_480x640.jpg" ,
        "Images/ChantalG_480x640.jpg",
        "Images/Michele_480X640.jpg",
        "Images/MEL_480X640.jpg",
        "Images/CAMILLE_480X640_2.jpg",
        "Images/MEGGIE_480X640_2.jpg",
        "Images/joel_480X640_3.jpg",
];

    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(function(){
        gsap.to(imagesDivRef.current,{
            scrollTrigger:{
                trigger:imagesDivRef.current,
                markers:true,
                // start:'top 21.8%',
                // end: 'top -140%',
                pin: true,
                scrub: true,
                onUpdate: (ele)=>
                {
                    let imageIndex
                    if(ele.progress < 1)
                    {
                        imageIndex =Math.floor(ele.progress * imageArray.length)
                    }
                    else{
                        imageIndex = imageArray.length -1;
                    }
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })
  return (
    <div>
        <div className='section1'>
        <div ref={imagesDivRef} className='h-[20vw] rounded-3xl overflow-hidden w-[15vw] absolute top-40 left-[30vw]'>
            <img ref={imageRef} className='h-full w-full object-cover' src="/Images/Carl_480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2] '>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] uppercase leading-[18vw] text-center'>SEVEN7Y <br /> TWO</h1>
      </div>
      <div className='pl-[40%] '>
        <p className='text-6xl'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
        </p>
      </div>
    </div>
        </div>
        <div className="section2 h-screen">

        </div>
    </div>
  )
}

export default Agence
