import React from 'react'
import styled from 'styled-components'

function Mainvideos() {

    return (
        <>
            <MainvideoWrapper>
                <iframe
                    width="650" 
                    height="350" 
                    src="https://www.youtube.com/embed/OJS1BVniz5c?si=9EVOYieWnVPmQX8J"
                >
                </iframe>
            </MainvideoWrapper>
        </>
        
    )
}

export default Mainvideos

const MainvideoWrapper = styled.div`
    position: absolute;
    top: 120px;
    left: 100px;
    z-index: 99;
`