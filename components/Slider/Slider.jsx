import Box from '@chakra-ui/react';
import Slide from './Slide'
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

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

export default function Slider () {

  return (

        // main element
        <Box
        w='50%'
        mr={12}
        mt={10}
        >
          

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
              <Slide
              image={diffrentFairy}/>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
                <Slide
                  image={inspectorFairy}
                />
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
                <Slide
                  image={futureFairy}
                />
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
                <Slide
                  image={bloodlettingFairy}
                />
            </SwiperSlide>

            {/* slide 5 */}
            <SwiperSlide>
                <Slide
                  image={futureFairy}
                />
            </SwiperSlide>

            {/* slide 6 */}
            <SwiperSlide>
                <Slide
                  image={diffrentFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                 image={inspectorFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                  image={leafFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                  image={loveFairyFreyja}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                  image={thoughtFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                image={forestFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Slide
                image={blueRayFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Slide
                image={tinkerBell}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Slide
                image={warriorFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Slide
                image={windFairy}
                />
            </SwiperSlide>

            <SwiperSlide>
            <Slide
                image={youthFairy}
                />
            </SwiperSlide>


          </Swiper>
    
        </Box>
    
      )
    }
    
