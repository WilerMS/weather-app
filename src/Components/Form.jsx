import React, {useState} from 'react'
import styled from 'styled-components'
import {AnimationIn} from './../Elements/Animations'

const Form = ({enableFormCity, setEnableFormCity, fetchWeather}) => {

    const [city, setCity] = useState('');

    const handleChange = e => {
        setCity(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setEnableFormCity(!enableFormCity);
        city !== "" && fetchWeather({city:city.toLowerCase()});
        setCity("");
    }

    return(
        <Container onSubmit={handleSubmit}>
            <Input 
                type="text"
                onChange={handleChange}
                value={city}
                placeholder="Write your city..."
            />
            <Button type="submit">
                <i className="fas fa-search"></i>    
            </Button>        
        </Container>
    );
}

const Container = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    animation: ${AnimationIn} .5s ease;
    animation-direction: alternate;
`;

const Input = styled.input`
    color: white;
    text-shadow: 1px 1px 4px #0000002e;
    padding: 0;
    padding-right: 30px;
    width: 65%;
    height: 35px;
    font-size: 25px;
    font-weight: 500;
    outline: none;
    background: none;
    border: none;
    font-weight: bold;
    /*border-bottom: 1px solid #0b272f;*/

    &::placeholder { 
        color: white;
        opacity: 1; 
    }
`;

const Button = styled.button`
    color: white;
    text-shadow: 1px 1px 4px #0000002e;
    font-size: 25px;
    background: none;
    outline: none;
    border: none;
    position: absolute;
    bottom: 0;
    right: 25px;
    cursor: pointer;
    transition: .5s ease all;

    &:hover {
        transform: scale(1.2);
    }
`;

export default Form;