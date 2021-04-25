import React from 'react';
import styled from 'styled-components';
import {AnimationIn} from './../Elements/Animations'

const H1 = styled.p`
    margin: 0;
    margin-bottom: 3px;
    width: 65%;
    height: 30px;
    font-size: 25px;
    transition: .3s all ease;
    font-weight: 500;
    animation: ${AnimationIn} .5s ease;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (min-width: 600px) {
        font-size: 28px;
    }
`;

const Icon = styled.div`
    font-size: 25px;
    margin-right: 15px;
    text-shadow: 0px 0px 5px #0000008c;
    animation: ${AnimationIn} .5s ease;
    margin-left: 30px;
`;

const CityName = ({name, country}) => {
    return (
        <>
            <Icon>
                <i className="fas fa-map-marker-alt"></i>
            </Icon>
            <H1>{`
                    ${name ? name : ''}
                    ${country ? ', ' + country : ''}
            `}</H1>
        </>
    )
}

export default CityName;