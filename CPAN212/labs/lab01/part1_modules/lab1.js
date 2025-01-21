const ld = require("lodash");

const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year's Day", date: "2026-01-01" },
]; // Created an object

holidays.forEach(holiday => {

    const today = new Date(); // This will show me the current date

    const holidayDate = new Date(holiday.date); //This returns me a Date object 
    // console.log(holidayDate);

    const timeDifference = holidayDate - today;
    const noOfDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
    // As in Javascript the date is in miliseconds, to get the noOfDays I have divided the timeDifference by 24 which is hours and 60 which are minutes and again 60 for seconds and finally 1000 to get miliseconds.
    console.log(`The number of days left for ${holiday.name} are ${noOfDays}`);

})


// Using lodash to get a random holiday
const randomHoliday = ld.sample(holidays);
//In Lodash, the sample method selects a single random element from a collection (array, object, or string)
// while random is used to get a random number from a specific range
console.log(`RandomHoliday : ${randomHoliday.name} on ${randomHoliday.date}`);


// Using lodash to get the indexes

let indexes1 = ld.findIndex(holidays, (e) =>
    e.name === "Canada Day"
);
let indexes2 = ld.findIndex(holidays, (e) =>
    e.name === "Christmas"
);

//=== is a comparison operator I can return e too and it would work as well. 


console.log(indexes1);
console.log(indexes2);

// I can do it in a different way too above I have used a callback function. Now i will do it using an object as predicate means condition

let indexes3 = ld.findIndex(holidays, { name: "Canada Day" });
let indexes4 = ld.findIndex(holidays, { name: "New Year's Day" });
let indexes5 = ld.findIndex(holidays, { name: "Christmas" });

console.log(indexes3);
console.log(indexes4);
console.log(indexes5);