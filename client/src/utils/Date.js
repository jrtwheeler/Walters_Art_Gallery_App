export function getCurrentDate() {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let monthNames = ["January", "Febuary", "March", "April", "May", 
        "June", "July", "August", "September", "October", "November", "December"];

    return `${monthNames[month]} ${date}, ${year}`;
}