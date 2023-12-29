import React from 'react'
import styled from 'styled-components'

function Mainvideos() {

    return (
        <>
            <MainvideoWrapper>
                <iframe
                    width="630" 
                    height="350" 
                    src="https://www.youtube.com/embed/OJS1BVniz5c?si=9EVOYieWnVPmQX8J"
                    title='nba2k24'
                >
                </iframe>
                <Description>
                    <h2>NBA 2K24 MyTEAM: SEASONS PLAYBOOK</h2>
                </Description>
            </MainvideoWrapper>
        </>
    )
}

export default Mainvideos

const MainvideoWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 120px;
    left: 110px;
    z-index: 99;
`
const Description = styled.div`
    width: 630px;
    height: 350px;
    background-color: transparent;
    color: white;
    margin-left: 72px;
`