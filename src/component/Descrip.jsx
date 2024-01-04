import React from 'react'
import styled from 'styled-components'

function Descrip() {
    return (
        <>
            <Description>
                <h2>오늘의 nba</h2>
            </Description>
        </>
    )
}

export default Descrip

const Description = styled.div`
    display: flex;
    position: absolute;
    right: 110px;
    top: 120px;
    padding: 30px 0 0 30px;
    width: 300px;
    height: 570px;
    background-color: white;
    z-index: -11;
`