var nav = document.getElementById("nav-list");
var navItem = nav.getElementsByClassName("list-item");
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-item");
  current[0].className = current[0].className.replace(" active-item", "");
  this.className += " active-item";
  });
}

// const menu = document.querySelectorAll(".list-item");
// Array.from(menu).forEach(item => {
//    item.addEventListener("click", () => {
//       var selected = document.getElementsByClassName("active-item");
//       selected[0].className = selected[0].className.replace(" active-item", "");
//       item.className += " active-item";
//    });
// });


// let nav = document.querySelectorAll('list-item');
// nav.forEach(menu => {
//     menu.addEventListener('click', function () {
//          for (let i = 0; i < progressBox.length; i++) {
//             progressBox[i].classList.remove("active-item");
//            }
//         this.classList.add('active-item');        
//     });
// });























const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();