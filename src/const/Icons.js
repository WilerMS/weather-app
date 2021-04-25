import cloudyDay from './../Icons/001-cloudyday.svg';
import cloudyNight from './../Icons/036-night.svg';

import clearDay from './../Icons/002-sunny.svg';
import clearNight from './../Icons/021-cloudy night.svg';

import RainDay from './../Icons/033-rainy day.svg';
import RainNight from './../Icons/011-night.svg';

import SnowDay from './../Icons/032-snowy.svg';
import SnowNight from './../Icons/010-night.svg';

import MistDay from './../Icons/003-sunny.svg';
import MistNight from './../Icons/007-windy.svg';

import humidity from './../Icons/022-humidity.svg'
import minTemp from './../Icons/024-temperature.svg'
import maxTemp from './../Icons/025-temperature.svg'

import conditions from './../const/conditionsCodes'

const DayIcons = [cloudyDay, clearDay, RainDay, SnowDay, MistDay];
const NightIcons = [cloudyNight, clearNight, RainNight, SnowNight, MistNight];
const MoreIcons = [humidity, minTemp, maxTemp];

const setIcon = (now, main) => {
    if (conditions.clear.includes(main)){
        return (now) ? DayIcons[1] : NightIcons[1];
    } else if (conditions.clouds.includes(main)) {
        return (now) ? DayIcons[0] : NightIcons[0];
    } else if (conditions.rain.includes(main)) {
        return (now) ? DayIcons[2] : NightIcons[2];
    } else if (conditions.snow.includes(main)) {
        return (now) ? DayIcons[3] : NightIcons[3];
    } else if (conditions.fog.includes(main)) {
        return (now) ? DayIcons[4] : NightIcons[4];
    }
}


export {setIcon, MoreIcons};

