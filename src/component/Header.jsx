import React from 'react'
import {Link} from "react-router-dom";
import { SiNba } from "react-icons/si";
import styled from 'styled-components';

function Header() {
    return (
        <div>
            <Headercontainer>
                <h1 className='logo'>
                    <Link to='/'><SiNba /></Link>
                </h1>
            </Headercontainer>
        </div>
    )
}

export default Header

const Headercontainer = styled.header`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    padding: 16px 100px;
    box-sizing: border-box;
    background: #03227e;
    width: 100%;
    gap: 48px;
    .logo{
        font-size: 30px;
        a{
            display: flex;
            align-items: center;
            path{
                color: white;
            }
        }
    }
`