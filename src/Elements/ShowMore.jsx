import React from 'react'
import styled from 'styled-components'

const ShowMore = () => {
    return (
        <Container>
            <i className="fas fa-angle-up"></i>
        </Container>
    )
}

const Container = styled.button`
    position: absolute;
    bottom: 0%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    font-size: 40px;
    background: no-repeat;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    transition: .5s all ease;

    &:hover {
        transform: scale(1.3);
    }
`;

export default ShowMore;