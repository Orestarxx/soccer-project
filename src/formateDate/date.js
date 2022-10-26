function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}

let fromDate = addDays(-3);
let toDate = addDays(3);
let fromDateFormated = formatDate(fromDate);
let toDateFormated = formatDate(toDate);
export {fromDateFormated,toDateFormated}