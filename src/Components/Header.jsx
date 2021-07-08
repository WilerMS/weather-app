import React, {useState} from 'react'
import styled from 'styled-components'
import Form from './Form'
import {CityName, ButtonEditCity} from './../Elements/CityNameElements'

const Header = ({weather, fetchWeather}) => {

    const [enableFormCity, setEnableFormCity] = useState(false);

    return (
        <ContainerHeader>
            {enableFormCity ? (
                <Form 
                    enableFormCity={enableFormCity} 
                    setEnableFormCity={setEnableFormCity}
                    fetchWeather={fetchWeather}
                />
            ):(
                <>
                    <CityName 
                        name={weather.name} 
                        country={weather.country}
                    />
                    <ButtonEditCity 
                        enableFormCity={enableFormCity} 
                        setEnableFormCity={setEnableFormCity}
                    />
                </>
            )}
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    color: white;
    height: 75px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-shadow: 0px 0px 5px #0000008c;
`;

export default Header;