import styled from 'styled-components'
import {AnimationIn} from './Animations'

const bgColors = {
  dayPrimary: '#56e2d7',
  daySecundary: '#58d5f1',
  nightPrimary: '#043338',
  nightSecundary: '#041f25'
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
    
  background: linear-gradient(to bottom, ${(props) => props.now ? 
    `${bgColors.dayPrimary}, ${bgColors.daySecundary} ` 
  : `${bgColors.nightPrimary}, ${bgColors.nightSecundary}`
  });
  transition: 1s all ease;
  animation: ${AnimationIn} .5s linear;
  overflow: hidden;
  position: relative;
  z-index: 0;

  @media (min-width: 600px) {
    width: 80%;
    height: 90%;
    max-width: 883px;
    box-shadow: 0px 0px 10px 0px #00000040;
    border: 1px solid #008b9a;
    border-radius: 35px;
  }
`;

export {Container};