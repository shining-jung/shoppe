import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../css/Banner.css";

const Banner = () => {
    return (
        <section className="bannerCon">
            <Swiper pagination={true} modules={[Pagination]} className="bannerList">
                <SwiperSlide className="slide">
                    <div className="des">
                        <strong>Gold big hoops</strong>
                        <span>$ 68,00</span>
                        <a href="">VIEW PRODUCT</a>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/Img_bg1.jpg`} alt="Img_bg1" />
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={`${process.env.PUBLIC_URL}/img/Img_bg2.jpg`} alt="Img_bg2" />
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={`${process.env.PUBLIC_URL}/img/Img_bg3.jpg`} alt="Img_bg3" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;
