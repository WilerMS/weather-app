import React from 'react'
import styled from 'styled-components'
import Svg from './Svg'
import Mountain from './Mountain'
import Particle from './Particle'

const Background = ({weather, mountain}) => {
    return (
        <BgContainer className='background'>
            <Svg now={weather.now}/>
            <Mountain mountain={mountain} weather={weather}/>
            <Particle now={weather.now} main={weather.main}/>   
        </BgContainer>
    )
}

const BgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`;

export default Background;