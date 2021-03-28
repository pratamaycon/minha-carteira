
const formatDate = (date: string): string => {
    const dataFormatted = new Date(date);
    const year = dataFormatted.getFullYear();
    const day = dataFormatted.getDate() > 9
        ? dataFormatted.getDate() : `0${dataFormatted.getDate()}`;

    const month = dataFormatted.getMonth() + 1 > 9
        ? dataFormatted.getMonth() + 1 : `0${dataFormatted.getMonth() + 1}`;

    return `${day}/${month}/${year}`;
}

export default formatDate;