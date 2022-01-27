import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import conditions from './../const/conditionsCodes'
import {ParticlesSnow, ParticlesNight, ParticlesSun, ParticlesCloud, ParticlesRain} from './../config/dataParticles'

 const Particle = ({now, main}) => {
     
    let params = ParticlesCloud;
    if (conditions.clear.includes(main)) {
        params =  (now) ? ParticlesSun : ParticlesNight;
    } else if (conditions.clouds.includes(main)) {
        params = ParticlesCloud;
    }else if (conditions.rain.includes(main)) {
        params = ParticlesRain;
    } else if (conditions.snow.includes(main)) {
        params = ParticlesSnow;
    } else if (conditions.fog.includes(main)) {
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
    top: 0;
    width: 280%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
`;

export default Particle;