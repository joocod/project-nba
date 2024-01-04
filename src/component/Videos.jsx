import React from 'react'
import styled from 'styled-components'

function Videos() {

    return (
        <>
            <MainvideoContainer>
                <iframe
                    width="900" 
                    height="600" 
                    src="https://www.youtube.com/embed/LM3jziC3JFs?si=O_z-cTMtBRkNoug_"
                    title='highlight'
                >
                </iframe>
            </MainvideoContainer>
        </>
    )
}

export default Videos

const MainvideoContainer = styled.div`
    display: flex;
    position: absolute;
    top: 120px;
    left: 130px;
    z-index: -11;
`
