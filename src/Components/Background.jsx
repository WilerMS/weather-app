import React from 'react'
import Svg from './Svg'
import Mountain from './Mountain'
import Particle from './Particle'

const Background = ({weather, mountain}) => {
    return (
        <>
            <Svg now={weather.now}/>
            <Mountain mountain={mountain} weather={weather}/>
            <Particle now={weather.now} main={weather.main}/>   
        </>
    )
}

export default Background;