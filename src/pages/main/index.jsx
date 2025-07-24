import { MainWrap, VisualWrap } from './style';

import Content1 from '../../components/main/Content1';
import Content2 from '../../components/main/Content2';
import Timeline from '../../components/main/Timeline';
import Communication from '../../components/main/Communication';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';



const Main = () => {
    const Banners = [
        { id: 1, image: './images/MainBanner1.png', name:'팝콘랜드홍보배너'},
        { id: 2, image: './images/MainBanner3.png', name:'그로잉홍보배너'},
    ];
    return (
        <>
           <VisualWrap>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {Banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <img src={banner.image} alt={banner.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VisualWrap>
            <MainWrap>
                <div className='inner'>
                <Content1 />
                <Content2 />
                <Timeline />
                </div>

                <Communication/>
                
            </MainWrap>
            
        </>
    );
};

export default Main;
