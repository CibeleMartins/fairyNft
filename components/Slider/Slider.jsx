import Box, { Flex } from '@chakra-ui/react';
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function Slider ({image}) {

  return (

        // main element
        <Flex
        w='500px'>

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
              w='300px' src={iceFairy}/>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <Image
                w='300px' src={iceFairy}/>  
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
              
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
               
            </SwiperSlide>

            {/* slide 5 */}
            <SwiperSlide>
               
            </SwiperSlide>

            {/* slide 6 */}
            <SwiperSlide>
                
            </SwiperSlide>

            <SwiperSlide>
                
            </SwiperSlide>

            <SwiperSlide>
               
            </SwiperSlide>

            <SwiperSlide>
                
            </SwiperSlide>

            <SwiperSlide>
               
            </SwiperSlide>

            <SwiperSlide>
              
            </SwiperSlide>

            <SwiperSlide>
            
            </SwiperSlide>

            <SwiperSlide>
            
            </SwiperSlide>

            <SwiperSlide>
            
            </SwiperSlide>

            <SwiperSlide>
           
            </SwiperSlide>

            <SwiperSlide>
            
            </SwiperSlide>

          </Swiper>
    
        </Flex>
    
      )
    }
    
