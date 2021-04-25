import React from 'react'
import styled from 'styled-components';

const Svg = ({now}) => {
    return (
        <Container>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.0" 
                width="1000.000000pt" 
                height="1000.000000pt" 
                viewBox="0 0 1000.000000 1000.000000" 
                preserveAspectRatio="none"
            >
                <g 
                    transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" 
                    fill={now ? `#00aeca94` : `#042e33b3`} 
                    stroke="none"
                >
                    <path d="M0 7470 l0 -2529 72 -103 c500 -717 1162 -1434 1864 -2019 714 -595 1473 -1087 2319 -1504 1677 -826 3502 -1265 5458 -1311 l287 -7 0 5001 0 5002 -5000 0 -5000 0 0 -2530z"/>
                </g>
            </svg>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70%;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    & > svg {
        max-height: 100%;
        max-width: 100%;
    }
`;

export default Svg;