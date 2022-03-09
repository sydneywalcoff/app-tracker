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

const hasBeenGhosted = (lastUpdated: string) => {
    const todayMonth = DateTime.local().month;
    const todayDate = DateTime.local().day;
    const lastUpdatedMonth = parseInt(lastUpdated.slice(0,2));
    const lastUpdatedDay = parseInt(lastUpdated.slice(2,4))
    if((todayDate -lastUpdatedDay)>= 14) {
        return true;
    }
    return false;
};

export { formatDate, hasBeenGhosted };