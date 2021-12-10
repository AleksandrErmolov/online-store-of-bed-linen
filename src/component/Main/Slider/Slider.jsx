import s from "../Slider/Slider.module.scss"
import React, { useRef, useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/swiper-bundle.min.css'


import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function Slider() {

  return (

    <div>
      <div className={s.title} style={{ position: "absolute", "z-index": "9", top: "50%", left: "50%", transform: "translate(-50%, -50%" }}>

        <h1 className={s.firstTitle}> При покупке 2-х комплектов</h1>
        <h1 className={s.secondTitle}>2 подушки в подарок!</h1>
        <p className={s.description}>*  Акция действует до 10 октября 2021 года включительно</p>
        <button>Заказать и получить подарок</button>
      </div>

      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 20500,
        "disableOnInteraction": false
      }} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">



        <SwiperSlide>
          <img src="../img/firstscreen/bg.png" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="../img/firstscreen/bg2.png" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="../img/firstscreen/bg3.png" alt="" /> </SwiperSlide>
      </Swiper>
    </div>
  )
}