import React from 'react'
import styled from 'styled-components'

import {Swiper} from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';                // swiper 기본 css 적용 import
import 'swiper/css/navigation';     // swiper 좌우 버튼 기본 css
import 'swiper/css/pagination';     // swiper dot-list 기본 css   


function Com() {

    return (
        <div>
            <ComsContainer>
                <ComsTitle>응원방</ComsTitle>
                <Swiper
                    spaceBetween={10}
                    slidesPerview={4}
                    slidesPerGroup={4}
                    loop
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                >
                </Swiper>
            </ComsContainer>
        </div>
    )
}

export default Com

const ComsContainer = styled.div`
    margin-bottom: 50px;
    position: absolute;
    box-sizing: border-box;
    top: 750px;
    left: 130px;
    width: 1280px;
    height: 500px;
    /* background: white; */
`
const ComsTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
`
