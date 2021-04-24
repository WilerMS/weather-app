import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import {ParticlesSnow, ParticlesNight, ParticlesSun, ParticlesCloud, ParticlesRain} from './../config/dataParticles'

 const Particle = ({now, main}) => {

    let params = ParticlesCloud;
    if (main === 'Clear') {
        params =  (now==='day') ? ParticlesSun : ParticlesNight;
    } else if (main === 'Clouds') {
        params = ParticlesCloud;
    }else if (main === 'Rain') {
        params = ParticlesRain;
    } else if (main === 'Snow') {
        params = ParticlesSnow;
    } else if (main === 'Mist' || main==='Fog') {
        params = ParticlesNight;
    }
    
    return (
        <ContainerParticles>
            <Particles 
                className="particles" 
                params={params}
            />
        </ContainerParticles>
    )
}

const ContainerParticles = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

export default Particle;