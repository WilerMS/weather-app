import React from 'react'
import styled from 'styled-components'
import {DayIcons, NightIcons} from '../const/Icons'

const WeatherInfo = ({weather}) => {

    const setIcon = (icons) => {
        if (weather.main === 'Clear') {
            return icons[1];
        } else if (weather.main === 'Clouds') {
            return icons[0];
        }else if (weather.main === 'Rain') {
            return icons[2];
        } else if (weather.main === 'Snow') {
            return icons[3];
        } else if (weather.main === 'Mist' || weather.main==='Fog') {
            return icons[4];
        }
    }
    const image = (weather.now === 'night') ? setIcon(NightIcons) : setIcon(DayIcons);

    return (
        <Container>
            <img src={image} alt=""/>
            <div className="content__info">
                <h1>{weather.temp !== null ? Math.round(weather.temp) + 'º' : ''}</h1>
                <p>
                    {/*`
                        ${weather.tempMin !== null ? 'Min: ' +Math.round(weather.tempMin) + ', ' : '' } 
                        ${weather.tempMax !== null ? 'Max: ' + Math.round(weather.tempMax) + ', ' : ''}
                        ${weather.main !== null ? weather.main : ''}
    `*/ 
                        `${weather.description !== null ? 'Description: ' + weather.description : ''}`
                    }
                </p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 55%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      max-width: 100%;
      width: 55%;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(0px 2px 10px #0000003b);
    }

    .content__info {
      width: 100%;
      text-align: right;
      position: relative;

        & > h1 {
            margin: 0;
            margin-right: 20px;
            margin-top: 1px;
            font-size: 160px;
            color: #d5e1e7;
            text-shadow: 1px 1px 4px #0000002e;
            }
        & > p {
            margin: 0;
            position: absolute;
            right: 15px;
            bottom: 10px;
            font-weight: 600;
            text-shadow: 1px 1px 4px #0000002e;
            color: white;
        }
    }
`;


export default WeatherInfo;