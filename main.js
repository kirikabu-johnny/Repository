const week = ["日", "月", "火", "水", "木", "金", "土"];
let day = new Date();
let year = day.getFullYear();
let month = day.getMonth() + 1;

function showCalender() {
  let startDate = new Date(year, month - 1, 1);
  let startDay = startDate.getDay();
  let endDate = new Date(year, month, 0);
  let endDay = endDate.getDate();
  let dayCounter = 1;
  let indiCalender = '';

  indiCalender += `${year}年${month}月`;
  indiCalender += "<table>";
  for (let i = 0; i < week.length; i++) {
    indiCalender += "<td>" + week[i] + "</td>";
  }

  for (let w = 0; w < 6; w++) {
    indiCalender += "<tr>";
    for (let d = 0; d < 7; d++) {
      if (d < startDay && w === 0) {
        indiCalender += "<td>" + "</td>";
      }
      else if (dayCounter > endDay) {
        indiCalender += "<td>" + "</td>";
      }
      else {
        indiCalender += "<td>" + dayCounter + "</td>";
        dayCounter++;
      }
    }
    indiCalender += "</tr>";
  }
  indiCalender += "</table>";
  document.getElementById("calender-field").innerHTML = indiCalender;
}

showCalender();


document.getElementById("next").addEventListener('click', () => {
  if (month === 12) {
    year++;
    month = 1;
  }
  else {
    month++;
  }
  showCalender();
});

document.getElementById("prev").addEventListener('click', () => {
	if (month === 1) {
		year--;
		month = 12;
	}
	else {
		month--;
	}
	showCalender(); 
});