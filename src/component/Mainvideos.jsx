import React from 'react'
import styled from 'styled-components'

function Mainvideos() {

    return (
        <>
            <MainvideoWrapper>
                <iframe
                    width="900" 
                    height="600" 
                    src="https://www.youtube.com/embed/LM3jziC3JFs?si=O_z-cTMtBRkNoug_"
                    title='highlight'
                >
                </iframe>
            </MainvideoWrapper>
        </>
    )
}

export default Mainvideos

const MainvideoWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 120px;
    left: 130px;
    z-index: 99;
`
