import React from 'react'
import styled from 'styled-components'


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
`;

export default Mountain;