// Inspired by 'alexismenest' capstone 'mockAPI' logic.
// fetchAPI accepts a JavaScript Date object.
// fetchAPI returns a list of randomly generated available times.
// The times are between 15:00 and 23:30.
// The list always begins with "--- Select a Time---"
// I found this useful for debugging.
// 
// submitAPI always returns 'true'.

const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    const result = ((d + hour) % m) / 10;

    return result;
}

const fetchAPI = (date) => {
    let result = [];

    for (let hour = 17; hour <= 22; hour++) {
        if (seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
    }

    return result;
};

const submitAPI = formData => true;


export { fetchAPI, submitAPI };