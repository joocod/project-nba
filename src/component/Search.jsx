import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import styled from 'styled-components';

function Search() {
    return (
        <>
            <Searchform>
                <button className='menu'>
                    <RxHamburgerMenu />
                </button>
            </Searchform>
        </>
    )
}

export default Search

const Searchform = styled.form`
    display: flex;
    position: fixed;
    top: 15px;
    right: 100px;
    transition: 500ms;
    width: 30px;
    z-index: 11;
    &.on{
        border: solid 1px #ffffff;
        transition: 500ms;
        width: 240px;
        border-radius: 4px;
    }
    .menu{
        color: #ffffff;
        font-size: 30px;
        display: flex;
        align-items: center;
    }
`