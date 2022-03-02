import { DateTime } from 'luxon';

const formatDate = () => {
    const month = DateTime.local().month;
    const date = DateTime.local().day;
    let year: (string | number | string[]) = DateTime.local().year;
    year = year.toString().split('')
    year.splice(0,2)
    year = parseInt(year.join(''))

    return `${month}/${date}/${year}`
};

export default formatDate;