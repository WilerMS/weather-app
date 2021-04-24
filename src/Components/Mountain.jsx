import React from 'react'
import styled from 'styled-components'
import {AnimationIn} from './../Elements/Animations'


const Mountain = ({weather, mountain}) => {
    return (
        <Container src={mountain.current} alt=""/>
    )
}

const Container = styled.img`
    position: absolute;
    height: 60%;
    right: -50%;
    bottom: 0;
    z-index: -2;
    opacity: .7;
    transition: .5s all ease;
    animation: ${AnimationIn} .5s ease;
`;

export default Mountain;