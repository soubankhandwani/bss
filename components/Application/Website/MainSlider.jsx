'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider1 from '@/public/assets/images/slider-1.jpg'
import slider2 from '@/public/assets/images/slider-2.jpg'
import slider3 from '@/public/assets/images/slider-3.jpg'
import slider4 from '@/public/assets/images/slider-4.jpg'
import slider5 from '@/public/assets/images/slider-5.jpg'
import slider6 from '@/public/assets/images/slider-6.jpg'
import slider7 from '@/public/assets/images/slider-7.jpg'
import slider8 from '@/public/assets/images/slider-8.jpg'
import Image from 'next/image';
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";


const ArrowNext = (props) => {
    const { onClick } = props
    return (
        <button onClick={onClick} type='button' className='w-14 h-14 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white right-10' >
            <LuChevronRight size={25} className='text-gray-600' />
        </button>
    )
}
const ArrowPrev = (props) => {
    const { onClick } = props
    return (
        <button onClick={onClick} type='button' className='w-14 h-14 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white left-10' >
            <LuChevronLeft size={25} className='text-gray-600' />
        </button>
    )
}

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrow: false,
                    nextArrow: '',
                    prevArrow: ''
                }
            }
        ]
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Image src={slider1.src} width={slider1.width} height={slider1.height} alt='slider 1' />
                </div>
                <div>
                    <Image src={slider2.src} width={slider2.width} height={slider2.height} alt='slider 2' />
                </div>
                <div>
                    <Image src={slider3.src} width={slider3.width} height={slider3.height} alt='slider 3' />
                </div>
                <div>
                    <Image src={slider4.src} width={slider4.width} height={slider4.height} alt='slider 4' />
                </div>
                <div>
                    <Image src={slider5.src} width={slider5.width} height={slider5.height} alt='slider 5' />
                </div>
                <div>
                    <Image src={slider6.src} width={slider6.width} height={slider6.height} alt='slider 6' />
                </div>
                <div>
                    <Image src={slider7.src} width={slider7.width} height={slider7.height} alt='slider 7' />
                </div>
                <div>
                    <Image src={slider8.src} width={slider8.width} height={slider8.height} alt='slider 8' />
                </div>
            </Slider>
        </div>
    )
}

export default MainSlider