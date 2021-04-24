import React from 'react'
import styled from 'styled-components'


const MoreWeatherItem = ({weather, children}) => {
    return (
        <Container now={weather.now}>
            {children}
        </Container>
    )
}

const bgColors = {
    dayPrimary: '#ffffffad',
    daySecundary: '#04202600',
    nightPrimary: '#ffffff52',
    nightSecundary: '#04202600'
}

const Container = styled.div`
    float: left;
    width: 130px;
    height: 100%;
    background: white;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, ${(props) => props.now === 'day' ? 
            `${bgColors.dayPrimary}, ${bgColors.daySecundary} ` 
        :   `${bgColors.nightPrimary}, ${bgColors.nightSecundary}`});

    & > img {
        width: 50%;
        margin-bottom: 10px;
    }

    & > p {
        margin: 0;
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 10px black;
    }
`;

export  default MoreWeatherItem;