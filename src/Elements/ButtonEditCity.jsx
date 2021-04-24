import React from 'react'
import styled from 'styled-components'

const ButtonEditCity = ({setEnableFormCity, enableFormCity}) => {

    const handleClick = () => {
        setEnableFormCity(!enableFormCity);
    }

    return (
        <Button onClick={handleClick}>
            <i className="fas fa-edit"></i>
        </Button>
    )
}

const Button = styled.button`
    text-shadow: 0px 0px 5px #0000008d;
    color: white;
    background: none;
    outline: none;
    border: none;
    font-size: 25px;
    position: absolute;
    bottom: 1px;
    right: 25px;
    transition: .5s all ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;

export default ButtonEditCity;