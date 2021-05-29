var taskNum = 0;
while (taskNum < 1 || taskNum > 14 || taskNum === "" || taskNum === null || taskNum != Number(taskNum)) {
				taskNum = prompt("Enter task number:")
				if (taskNum === null || taskNum === ""){
								alert("Please enter a task number!");
				}
				else if (taskNum != Number(taskNum)) {
								alert("Please enter numbers only");
				}
				else if (taskNum < 1 || taskNum > 14) {
								alert("There is no such task!");
				}
}

taskNum = +taskNum;

//Question 1
if (taskNum === 1) {
				var currentTime = new Date().toString();
				var index = currentTime.indexOf("(");
				currentTime = currentTime.slice(0, index) + "(PKT)";
				document.write(currentTime);
}

//Question 2
else if (taskNum === 2) {
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var currentMonthIndex = new Date().getMonth();
				document.write("Current month: " + months[currentMonthIndex]);
}

//Question 3
else if (taskNum === 3) {
				var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var currentDayIndex = new Date().getDay();
				document.write("Today is " + days[currentDayIndex].slice(0, 3) + ".");
}

//Question 4
else if (taskNum === 4) {
				var currentDayIndex = new Date().getDay();
				if (currentDayIndex === 0 || currentDayIndex === 6) {
								alert("It's Fun Day.");
				}
				else {
								alert("Get to work!");
				}
}

//Question 5
else if (taskNum === 5) {
				var currentDate = new Date().getDate();
				if (currentDate < 16) {
								alert("First fifteen days of the month.");
				}
				else {
								alert("Last days of the month.");
				}
}

//Question 6
else if (taskNum === 6) {
				var currentDate = new Date();
				var totalMillis = currentDate.getTime();
				var totalMinutes = totalMillis / (1000 * 60);
				currentDate = currentDate.toString();
				var index = currentDate.indexOf("(");
				currentDate = currentDate.slice(0, index) + "(PKT)";
				document.write("Current date: " + currentDate + "<br />");
				document.write("Elapsed milliseconds since January 1, 1970: " + totalMillis + "<br />");
				document.write("Elapsed minutes since January 1, 1970: " + totalMinutes);
}

//Question 7
else if (taskNum === 7) {
				var currentHour = new Date().getHours();
				if (currentHour < 12) {
								alert("It's AM");
				}
				else {
								alert("It's PM");
				}
}

//Question 8
else if (taskNum === 8) {
				var laterDate = new Date("31 December 2021").toString();
				var index = laterDate.indexOf("(");
				laterDate = laterDate.slice(0, index) + "(PKT)";
				document.write("Later date: " + laterDate);
}

//Question 9
else if (taskNum === 9) {
				var startOfRamzan = new Date("14 April 2021").getTime();
				var today = new Date().getTime();
				var daysSinceRamzan = Math.floor((today - startOfRamzan) / (1000 * 60 * 60 * 24));
				document.write(daysSinceRamzan + " days have passed since Ramzan.");
}

//Question 10
else if (taskNum === 10) {
				var startOfYear = new Date("1 Jan 2021").getTime();
				var currentDate = new Date();
				var today = currentDate.getTime();
				var secondsSince = Math.floor((today - startOfYear) / 1000);
				currentDate = currentDate.toString();
				var index = currentDate.indexOf("(");
				currentDate = currentDate.slice(0, index) + "(PKT)";
				document.write("On reference date " + currentDate + ", " + secondsSince + " seconds had passed since beginning of 2021.");
}

//Question 11
else if (taskNum === 11) {
				
}

else if (taskNum === 12) {
				
}

else if (taskNum === 13) {
				
}

else if (taskNum === 14) {
				
}
