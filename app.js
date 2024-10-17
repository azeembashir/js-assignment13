// task 1
// var rightnow = new Date();
// var theDay = rightnow.getDay();
// document.write(rightnow);

// task 2
// const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

// const currentDate = new Date();

// const currentMonth = months[currentDate.getMonth()];

// alert("The current month is " + currentMonth);

// task 3
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const currentDate = new Date();

// const currentDay = days[currentDate.getDay()];

// alert("Today is " + currentDay);

// task 4
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = days[date.getDay()];
// if(day == "Thu" || day == "Sun"){
//     document.write("It’s Fun day");
// }else{
//     document.write("not a fun day")
// }

// task 5
// var date = new Date();
// document.write(date);
// if(date < 16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last fifteen days of the month");
// }

// task 6
// var currentDate = new Date();

// var millisecondsSinceEpoch = currentDate.getTime();

// minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);

// document.write(currentDate + "<br>");
// document.write(millisecondsSinceEpoch + "<br>");
// document.write(minutesSinceEpoch);

// task 7
// var currentDate = new Date();

// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// task 8
// var laterDate = new Date(2020, 11, 31); 
// document.write(laterDate);

// // task 9

// var ramadanStartDate = new Date(2015, 5, 18);  

// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;

// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// document.write("Number of days past since 1st Ramadan: " + daysPast);

// // task 10
// var referenceDate = new Date();
// var startOf2015 = new Date(2015, 0, 1);
// var timeDifference = referenceDate - startOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed);

// // task 11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated date and time: " + currentDate);

// // task12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);

// task13
// var userAge = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// document.write("Your birth year is: " + birthYear);

// task 14
// var customerName = prompt("Enter your name:");
// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = 50;

// var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
