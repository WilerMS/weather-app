import {keyframes} from 'styled-components'

const AnimationIn = keyframes`
    0% {
        opacity: .5;
    }
    100%{
        opacity: 1;
    }
`;

const AnimationOut = keyframes`
    0% {
        opacity: 1;
    }
    100%{
        opacity: .5;
    }
`;

export {AnimationIn, AnimationOut};