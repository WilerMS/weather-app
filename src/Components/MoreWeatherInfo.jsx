import React from 'react'
import styled from 'styled-components'
import MoreWeatherItem from './MoreWeatherItem'
import {MoreIcons} from './../const/Icons'

const MoreWeatherInfo = ({weather}) => {
    return (
        <Container>
                <MoreWeatherItem weather={weather}>
                    <img src={MoreIcons[0]} alt=""/>
                    <p>Humidity</p>
                    <p>{weather.humidity}%</p>
                </MoreWeatherItem>
                <MoreWeatherItem weather={weather}>
                    <img src={MoreIcons[1]} alt=""/>
                    <p>Min Temp</p>
                    <p>{weather.tempMin}</p>
                </MoreWeatherItem>
                <MoreWeatherItem weather={weather}>
                    <img src={MoreIcons[2]} alt=""/>
                    <p>Max Temp</p>
                    <p>{weather.tempMax}</p>
                </MoreWeatherItem>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 20%;
    margin-top: 20px;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    justify-content: space-evenly;
    transition: .5s all ease;

    @media (min-width: 600px) {
        &::-webkit-scrollbar-thumb {
            background-color: white;
        }
        width: 75%;
        justify-content:flex-start;
    }

    &::-webkit-scrollbar {
        background: none;
        height: 5px;
    }
`;

export default MoreWeatherInfo;