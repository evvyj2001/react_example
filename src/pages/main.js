import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import '../resources/css/test.scss';
import SwiperCore, { Autoplay, Navigation, Pagination, Thumbs, FreeMode} from 'swiper';

SwiperCore.use([Autoplay,Navigation,Pagination,Thumbs,FreeMode]);

function PageMain() {
    // const pagination = {
    //     "clickable": true,
    //     "renderBullet": function (index, className) {
    //     return '<span class= "' + className + ' ">' + (index + 1) + '</span>';
    //     }
    // }

    const [thumbsSwiper, setThumbsSwiper, ] = useState(null);

        return (
        <>
            <div className="visual">
                {/* <Swiper
                    navigation={true}
                    pagination={pagination}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                </Swiper> */}
                <Swiper 
                spaceBetween={0} 
                navigation={true} 
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                thumbs={{ swiper: thumbsSwiper }} 
                loop={true}
                // freeMode={true}
                className="mySwiper2">
                    <SwiperSlide>slide1</SwiperSlide>
                    <SwiperSlide>slide2</SwiperSlide>
                    <SwiperSlide>slide3</SwiperSlide>
                    <SwiperSlide>slide4</SwiperSlide>
                    <SwiperSlide>slide5</SwiperSlide>
                    <SwiperSlide>slide6</SwiperSlide>
                    <SwiperSlide>slide8</SwiperSlide>
                    <SwiperSlide>slide8</SwiperSlide>
                    <SwiperSlide>slide9</SwiperSlide>
                    <SwiperSlide>slide10</SwiperSlide>
                </Swiper>
                <Swiper 
                onSwiper={setThumbsSwiper} 
                spaceBetween={0} 
                slidesPerView={8} 
                freeMode={true} 
                watchSlidesProgress={true} 
                className="mySwiper">
                    <SwiperSlide>????????????1</SwiperSlide>
                    <SwiperSlide>????????????2</SwiperSlide>
                    <SwiperSlide>????????????3</SwiperSlide>
                    <SwiperSlide>????????????4</SwiperSlide>
                    <SwiperSlide>????????????5</SwiperSlide>
                    <SwiperSlide>????????????6</SwiperSlide>
                    <SwiperSlide>????????????7</SwiperSlide>
                    <SwiperSlide>????????????8</SwiperSlide>
                    <SwiperSlide>????????????9</SwiperSlide>
                    <SwiperSlide>????????????10</SwiperSlide>
                </Swiper>
            </div>
            <div className="section1">
                <div className="inner">

                </div>
            </div>
        </>
    );
}

export default PageMain;