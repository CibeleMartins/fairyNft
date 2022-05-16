import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';


import fairyMother from '../../public/assets/img/fairyMother.png';
import iceFairy from '../../public/assets/img/iceFairy.png';
import elfFairy from '../../public/assets/img/elfFairy.png';
import forestFairy from '../../public/assets/img/forestFairy.png';
import blueRayFairy from '../../public/assets/img/blueRayFairy.png';
import bloodlettingFairy from '../../public/assets/img/bloodlettingFairy.png';
import futureFairy from '../../public/assets/img/futureFairy.png';
import inspectorFairy from '../../public/assets/img/inspectorFairy.png';
import leafFairy from '../../public/assets/img/leafFairy.png';
import loveFairyFreyja from '../../public/assets/img/loveFairyFreyja.png';
import thoughtFairy from '../../public/assets/img/thoughtFairy.png';
import tinkerBell from '../../public/assets/img/tinkerBell.png';
import warriorFairy from '../../public/assets/img/warriorFairy.png';
import windFairy from '../../public/assets/img/windFairy.png';
import youthFairy from '../../public/assets/img/youthFairy.png';
import diffrentFairy from '../../public/assets/img/diffrentFairy.png';

export default function Slider (props) {
  return (

        // main element
        <div className={styles.slide}>
          

          {/* swiper main element  */}
          <Swiper
            className={styles.mySwiper}
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            
            {/* slide 1 */}
            <SwiperSlide>
              <Image
              src={diffrentFairy}/>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
                <Image
                  src={inspectorFairy}
                />
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
                <Image
                  src={futureFairy}
                />
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
                <Image
                  src={bloodlettingFairy}
                />
            </SwiperSlide>

            {/* slide 5 */}
            <SwiperSlide>
                <Image
                  src={futureFairy}
                />
            </SwiperSlide>

            {/* slide 6 */}
            <SwiperSlide>
                <Image
                  src={diffrentFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                 src={inspectorFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src={leafFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src={loveFairyFreyja}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src={thoughtFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                src={forestFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Image
                src={blueRayFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Image
                src={tinkerBell}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Image
                src={warriorFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Image
                src={windFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Image
                src={youthFairy}
                />
            </SwiperSlide>


          </Swiper>
    
        </div>
    
      )
    }
    
