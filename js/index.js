const checkTime = (i) => {
    // Add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

const startTime = () => {
    let letters = "";
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // AM/PM
    letters = h >= 12 ? "<span>PM</span>" : "<span>AM</span>";
    // 12hr Format
    h = h == 0 ? 12 : h;
    h = h > 12 ? h - 12 : h;
    // Add zero in front of numbers < 10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
        h + ":" + m + ":" + s + letters;
    // Date
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const date = `${days[today.getDay()]}, ${
        months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
    document.getElementById("date").innerHTML = date;
    // Update every second
    setTimeout(startTime, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    startTime();
});
