import constants from "./constants";

export default {
    prettifyDate(rawDate) {
        const rawDateArr = rawDate.split(' ');
        return rawDateArr[1] + '-' + constants.months[parseInt(rawDateArr[0]) - 1];
    }
}